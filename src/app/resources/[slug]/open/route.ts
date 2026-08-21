import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  findResource,
  isUnlockToken,
  resourceLinks,
  unlockCookieName,
} from "@/lib/resources.server";

/**
 * The unlocked "open it" link points here rather than straight at the file, so
 * the real URL never appears in the page HTML — not even for readers who have
 * already unlocked. They land on it, they do not get handed it.
 */
export async function GET(
  request: Request,
  context: RouteContext<"/resources/[slug]/open">,
) {
  const { slug } = await context.params;
  const resource = findResource(slug);

  if (!resource) redirect("/resources");

  const token = (await cookies()).get(unlockCookieName)?.value;
  if (!isUnlockToken(token)) redirect(`/resources/${slug}`);

  // ?link=<index> picks one of a bundle. Anything out of range falls back to
  // the gate rather than guessing which link was meant.
  const links = resourceLinks(resource);
  const index = Number(new URL(request.url).searchParams.get("link") ?? "0");
  const link = Number.isInteger(index) ? links[index] : undefined;

  if (!link) redirect(`/resources/${slug}`);

  redirect(link.url);
}
