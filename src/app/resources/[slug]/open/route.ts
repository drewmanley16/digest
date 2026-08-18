import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  findResource,
  isUnlockToken,
  resourceUrl,
  unlockCookieName,
} from "@/lib/resources.server";

/**
 * The unlocked "open it" link points here rather than straight at the file, so
 * the real URL never appears in the page HTML — not even for readers who have
 * already unlocked. They land on it, they do not get handed it.
 */
export async function GET(
  _request: Request,
  context: RouteContext<"/resources/[slug]/open">,
) {
  const { slug } = await context.params;
  const resource = findResource(slug);

  if (!resource) redirect("/resources");

  const token = (await cookies()).get(unlockCookieName)?.value;
  if (!isUnlockToken(token)) redirect(`/resources/${slug}`);

  const url = resourceUrl(resource);
  if (!url) redirect(`/resources/${slug}`);

  redirect(url);
}
