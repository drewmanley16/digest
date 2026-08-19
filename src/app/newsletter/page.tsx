import type { Metadata } from "next";
import { SubscribeForm } from "@/components/SubscribeForm";
import { Faq } from "@/components/Faq";
import { LatestIssue } from "@/components/LatestIssue";
import { Hero, Section } from "@/components/ui";
import { latestPost } from "@/lib/beehiiv.server";
import { newsletter } from "@/lib/site";

export const metadata: Metadata = {
  title: "digest.md · the newsletter",
  description: newsletter.subhead,
};

export default async function NewsletterPage() {
  const post = await latestPost();

  return (
    <main className="fade-in flex-1">
      <Hero>
        <h1 className=" font-sans text-4xl tracking-tight text-fg sm:text-5xl">
          {newsletter.headline}
        </h1>

        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted sm:text-lg">
          {newsletter.subhead}
        </p>

        <p className="mt-4 font-sans text-sm text-muted">{newsletter.byline}</p>

        <div id="subscribe" className="mt-10 scroll-mt-24">
          <SubscribeForm source="newsletter_page" className="max-w-[30rem]" />
          <p className="mt-4 font-sans text-sm text-muted">
            {newsletter.subscriberCount}
          </p>

          <LatestIssue post={post} className="mt-10 max-w-[34rem]" />
        </div>
      </Hero>

      <Section>
        <p className="font-mono text-sm text-muted">{newsletter.whyLabel}</p>

        <div className="mt-6 max-w-[65ch] space-y-5 leading-relaxed text-fg">
          {newsletter.whyParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-sans text-xl tracking-tight text-fg">Questions</h2>

        <div className="mt-6">
          <Faq items={newsletter.faq} />
        </div>
      </Section>
    </main>
  );
}
