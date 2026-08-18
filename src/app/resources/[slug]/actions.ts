"use server";

import { cookies } from "next/headers";
import { subscribe } from "@/lib/beehiiv.server";
import {
  createUnlockToken,
  findResource,
  unlockCookieName,
} from "@/lib/resources.server";
import { resources } from "@/lib/site";

export type UnlockState = { error?: string };

// Deliberately loose: the only thing worth rejecting here is an obvious typo.
// Beehiiv is the real validator, and it rejects what it cannot deliver to.
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function unlock(
  slug: string,
  _previous: UnlockState,
  formData: FormData,
): Promise<UnlockState> {
  const resource = findResource(slug);
  if (!resource) return { error: resources.gate.error };

  // Honeypot: hidden from people, irresistible to form-filling bots.
  if (String(formData.get("company") ?? "").length > 0) {
    return { error: resources.gate.error };
  }

  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!emailPattern.test(email)) {
    return { error: resources.gate.invalidEmail };
  }

  // No subscription, no unlock. Handing over the file after failing to capture
  // the address defeats the point of the gate.
  if (!(await subscribe(email, resource.slug))) {
    return { error: resources.gate.error };
  }

  const token = createUnlockToken();

  (await cookies()).set(unlockCookieName, token.value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: token.maxAge,
  });

  return {};
}
