import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { resourceItems } from "@/lib/site";

/**
 * Server-only half of the resource gate. Two things live here that must never
 * reach the browser: the real file links (read from env by `urlEnv`) and the
 * secret used to sign the unlock cookie.
 */

export type Resource = (typeof resourceItems)[number];

export function findResource(slug: string): Resource | undefined {
  return resourceItems.find((item) => item.slug === slug);
}

export function resourceUrl(resource: Resource): string | undefined {
  return process.env[resource.urlEnv];
}

export const unlockCookieName = "digest_unlocked";

// A year. Long enough that a returning reader never re-enters their email,
// short enough that the signature eventually rotates out.
const unlockMaxAge = 60 * 60 * 24 * 365;

function secret(): string {
  const value = process.env.RESOURCE_UNLOCK_SECRET;
  if (!value) {
    throw new Error("RESOURCE_UNLOCK_SECRET is not set");
  }
  return value;
}

function sign(payload: string): string {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

/**
 * The cookie is `<expiry>.<signature>`. It carries no email and no slug —
 * unlocking one resource unlocks them all, since the reader is on the list
 * either way and a second email prompt only costs conversions.
 */
export function createUnlockToken(): { value: string; maxAge: number } {
  const expiresAt = Math.floor(Date.now() / 1000) + unlockMaxAge;
  const payload = String(expiresAt);
  return { value: `${payload}.${sign(payload)}`, maxAge: unlockMaxAge };
}

export function isUnlockToken(token: string | undefined): boolean {
  if (!token) return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expiresAt = Number(payload);
  if (!Number.isFinite(expiresAt) || expiresAt < Date.now() / 1000) {
    return false;
  }

  try {
    const expected = Buffer.from(sign(payload));
    const actual = Buffer.from(signature);
    return (
      expected.length === actual.length && timingSafeEqual(expected, actual)
    );
  } catch {
    // Missing secret. Stay locked rather than taking the cookie on faith.
    return false;
  }
}
