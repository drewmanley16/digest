import type { Metadata } from "next";
import { Avatar } from "@/components/Avatar";
import { BrandRow } from "@/components/BrandRow";
import { Faq } from "@/components/Faq";
import { OfferingIcon } from "@/components/Icons";
import { SocialIcon } from "@/components/SocialIcons";
import { Button, Eyebrow, Hero, Label, Section } from "@/components/ui";
import { partnerships } from "@/lib/site";

export const metadata: Metadata = {
  title: "digest.md — partnerships",
  description: partnerships.subhead,
};

export default function PartnershipsPage() {
  const { profile: kit } = partnerships;

  return (
    <main className="fade-in flex-1">
      <Hero>
        <Eyebrow>{partnerships.eyebrow}</Eyebrow>

        <h1 className="mt-5 font-mono text-4xl tracking-tight text-fg sm:text-5xl">
          {partnerships.headline}
        </h1>

        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted sm:text-lg">
          {partnerships.subhead}
        </p>

        <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-start">
          <Avatar size={128} className="shrink-0" />

          <div>
            <ul className="flex flex-wrap gap-2">
              {kit.categories.map((category) => (
                <li
                  key={category}
                  className="rounded-sm border border-line px-3 py-1 font-mono text-xs tracking-wide text-muted uppercase"
                >
                  {category}
                </li>
              ))}
            </ul>

            <p className="mt-6 font-mono text-xs tracking-[0.14em] text-muted uppercase">
              {kit.totalFollowersLabel}
            </p>
            <p className="mt-2 font-mono text-4xl tracking-tight text-fg">
              {kit.totalFollowers}
            </p>

            <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              {kit.platforms.map((platform) => (
                <li
                  key={platform.label}
                  className="flex items-center gap-2 font-mono text-sm text-muted"
                >
                  <span className="text-fg">
                    <SocialIcon name={platform.icon} />
                  </span>
                  {platform.value}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="/media-kit">{kit.ctaLabel}</Button>
            </div>
          </div>
        </div>
      </Hero>

      <Section>
        <Label>{kit.aboutLabel}</Label>
        <p className="mt-5 max-w-[65ch] leading-relaxed text-fg">{kit.about}</p>
      </Section>

      <Section>
        <Label>What I offer</Label>

        <div className="mt-6 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {partnerships.offerings.map((offering) => (
            <div key={offering.title} className="bg-bg p-6">
              <span className="inline-flex border border-line p-2 text-accent">
                <OfferingIcon name={offering.icon} />
              </span>
              <h3 className="mt-4 font-mono text-base text-fg">
                {offering.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {offering.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="border border-line p-6 sm:p-8">
          <h2 className="font-mono text-2xl tracking-tight text-fg">
            {partnerships.reasonsLabel}
          </h2>

          <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {partnerships.reasons.map((reason) => (
              <li key={reason} className="flex gap-3 leading-relaxed text-fg">
                <span aria-hidden="true" className="font-mono text-accent">
                  ✓
                </span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <Label>{partnerships.brandsLabel}</Label>
        <BrandRow brands={partnerships.brands} />

        <div className="mt-8">
          <Button href="/media-kit" variant="secondary">
            {kit.ctaLabel}
          </Button>
        </div>
      </Section>

      <Section>
        <h2 className="font-mono text-2xl tracking-tight text-fg">
          {partnerships.faqLabel}
        </h2>

        <div className="mt-6">
          <Faq items={partnerships.faq} />
        </div>
      </Section>

      <Section>
        <h2 className="font-mono text-2xl tracking-tight text-fg sm:text-3xl">
          {partnerships.closing.headline}
        </h2>

        <p className="mt-5 max-w-[65ch] leading-relaxed text-muted">
          {partnerships.closing.body}
        </p>

        <div className="mt-8">
          <Button href={`mailto:${partnerships.closing.email}`}>
            {partnerships.closing.email}
          </Button>
        </div>
      </Section>
    </main>
  );
}
