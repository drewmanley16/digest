import type { LatestPost } from "@/lib/beehiiv.server";
import { newsletter } from "@/lib/site";

/**
 * Nothing else on the site proves the newsletter exists. Showing a real issue
 * beats describing one, so this renders whenever beehiiv has a published post
 * and disappears quietly when it does not.
 */
export function LatestIssue({
  post,
  className = "",
}: {
  post: LatestPost | null;
  className?: string;
}) {
  if (!post) return null;

  const date = post.publishedAt
    ? new Date(post.publishedAt * 1000).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block border border-line p-5 text-left transition-colors hover:border-accent ${className}`}
    >
      <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
        {newsletter.latestIssueLabel}
        {date ? ` · ${date}` : ""}
      </p>

      <p className="mt-3 font-mono text-base text-fg transition-colors group-hover:text-accent">
        {post.title}
      </p>

      <p className="mt-3 font-mono text-sm text-accent">
        {newsletter.latestIssueCta}
      </p>
    </a>
  );
}
