import type { Metadata } from "next";
import Image from "next/image";
import { Avatar } from "@/components/Avatar";
import { Faq } from "@/components/Faq";
import { OfferingIcon } from "@/components/Icons";
import { SocialIcon } from "@/components/SocialIcons";
import { Button, Eyebrow, Hero, Label, Section } from "@/components/ui";
import { partnerships } from "@/lib/site";

export const metadata: Metadata = {
  title: "digest.md — partnerships",
  description: partnerships.subhead,
};

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-line p-5">
      <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
        {label}
      </p>
      <p className="mt-3 font-mono text-2xl tracking-tight text-fg">{value}</p>
    </div>
  );
}

function Bar({ percent }: { percent: number }) {
  return (
    <div className="h-1.5 w-full bg-line">
      <div className="h-full bg-accent" style={{ width: `${percent}%` }} />
    </div>
  );
}

export default function PartnershipsPage() {
  const { profile: kit, demographics } = partnerships;

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
          </div>
        </div>
      </Hero>

      <Section>
        <Label>{kit.aboutLabel}</Label>
        <p className="mt-5 max-w-[65ch] leading-relaxed text-fg">{kit.about}</p>
      </Section>

      <Section>
        <Label>{partnerships.brandsLabel}</Label>

        {partnerships.brands.length > 0 ? (
          <ul className="mt-6 flex flex-wrap items-center gap-4">
            {partnerships.brands.map((brand) => (
              <li key={brand.name}>
                {brand.logo ? (
                  // Both logos ship with light backgrounds baked in, so they sit
                  // on a light tile rather than floating on the near-black page.
                  <figure>
                    <div className="flex h-20 w-36 items-center justify-center bg-white p-3">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={144}
                        height={80}
                        className="max-h-full w-auto object-contain"
                      />
                    </div>
                    <figcaption className="mt-2 text-center font-mono text-xs text-muted">
                      {brand.name}
                    </figcaption>
                  </figure>
                ) : (
                  <span className="inline-flex h-20 items-center border border-line px-5 font-mono text-sm text-muted">
                    {brand.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 font-mono text-sm text-muted">
            Open to first partners — your logo could go here.
          </p>
        )}
      </Section>

      {partnerships.platformStats.map((platform) => (
        <Section key={platform.name}>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="flex items-center gap-3 font-mono text-2xl tracking-tight text-fg">
              <span className="text-accent">
                <SocialIcon name={platform.icon} />
              </span>
              {platform.name}
              <span className="font-mono text-sm text-muted">
                {platform.handle}
              </span>
            </h2>
            <p className="font-mono text-xs tracking-wide text-muted uppercase">
              {platform.note}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {platform.metrics.map((metric) => (
              <Metric
                key={metric.label}
                label={metric.label}
                value={metric.value}
              />
            ))}
          </div>
        </Section>
      ))}

      <Section>
        <Label>{demographics.label}</Label>

        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="font-mono text-sm text-fg">{demographics.ageLabel}</p>
            <ul className="mt-4 space-y-3">
              {demographics.age.map((bucket) => (
                <li key={bucket.range}>
                  <div className="flex justify-between font-mono text-xs text-muted">
                    <span>{bucket.range}</span>
                    <span className="text-fg">{bucket.percent}%</span>
                  </div>
                  <div className="mt-1.5">
                    <Bar percent={bucket.percent} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-sm text-fg">
              {demographics.genderLabel}
            </p>
            <ul className="mt-4 space-y-3">
              {demographics.gender.map((slice) => (
                <li key={slice.label}>
                  <div className="flex justify-between font-mono text-xs text-muted">
                    <span>{slice.label}</span>
                    <span className="text-fg">{slice.percent}%</span>
                  </div>
                  <div className="mt-1.5">
                    <Bar percent={slice.percent} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
