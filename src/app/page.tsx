import { Avatar } from "@/components/Avatar";
import { LatestIssue } from "@/components/LatestIssue";
import { SubscribeForm } from "@/components/SubscribeForm";
import { Letter } from "@/components/Letter";
import { SocialIcon } from "@/components/SocialIcons";
import { Button, Section } from "@/components/ui";
import { latestPost } from "@/lib/beehiiv.server";
import { home, socials } from "@/lib/site";

export default async function HomePage() {
  const post = await latestPost();

  return (
    <main className="fade-in flex-1">
      <section className="px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-20">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
          <Avatar size={168} />

          <h1 className="mt-8 font-sans text-3xl tracking-tight text-fg sm:text-5xl">
            {home.headline}
          </h1>

          <p className="mt-4 font-sans text-sm text-muted">{home.byline}</p>

          <p className="mt-6 max-w-[52ch] leading-relaxed text-muted">
            {home.subhead}
          </p>

          <div className="mt-8">
            <Button href="#subscribe">{home.heroCta}</Button>
          </div>

          <ul className="mt-8 flex items-center gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-sm border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <SocialIcon name={social.icon} />
                </a>
              </li>
            ))}
          </ul>

          <div
            id="subscribe"
            className="mt-12 flex w-full scroll-mt-24 flex-col items-center border-t border-line pt-12"
          >
            <h2 className="font-sans text-2xl tracking-tight text-fg sm:text-3xl">
              {home.subscribeHeading}
            </h2>
            <p className="mt-3 mb-8 text-sm text-muted">
              {home.subscribeSupport}
            </p>

            <SubscribeForm
              source="home_hero"
              align="center"
              className="max-w-[30rem]"
            />

            <LatestIssue post={post} className="mt-10 w-full max-w-[34rem]" />
          </div>
        </div>
      </section>

      <Section>
        <h2 className="text-center font-sans text-2xl tracking-tight text-fg sm:text-3xl">
          {home.letter.heading}
        </h2>

        <div className="mt-10">
          <Letter />
        </div>

        <div className="mt-12 flex flex-col items-center border-t border-line pt-12 text-center">
          <h3 className="font-sans text-xl tracking-tight text-fg">
            {home.letterCta.heading}
          </h3>

          <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-muted">
            {home.letterCta.body}
          </p>

          <div className="mt-7">
            <Button href="#subscribe" size="lg">
              {home.letterCta.button}
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
