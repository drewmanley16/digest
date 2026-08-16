import type { Metadata } from "next";
import { Button, Eyebrow, Hero, Label, Section } from "@/components/ui";
import { partnerships } from "@/lib/site";

export const metadata: Metadata = {
  title: "digest.md — partnerships",
  description: partnerships.subhead,
};

export default function PartnershipsPage() {
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

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {partnerships.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-mono text-3xl tracking-tight text-fg">
                  {stat.value}
                </span>
                <span className="mt-2 block font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Hero>

      <Section>
        <Label>Brands I&apos;ve worked with</Label>

        {partnerships.brands.length > 0 ? (
          <ul className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-base text-fg">
            {partnerships.brands.map((brand) => (
              <li key={brand}>{brand}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 font-mono text-sm text-muted">
            Open to first partners — your logo could go here.
          </p>
        )}
      </Section>

      <Section>
        <Label>What I offer</Label>

        <div className="mt-6 grid grid-cols-1 gap-px bg-line md:grid-cols-2">
          {partnerships.offerings.map((offering) => (
            <div key={offering.title} className="bg-bg p-6">
              <h3 className="font-mono text-base text-fg">{offering.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {offering.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Label>Why work with me</Label>

        <ul className="mt-6 max-w-[65ch] space-y-3">
          {partnerships.reasons.map((reason) => (
            <li key={reason} className="flex gap-3 leading-relaxed text-fg">
              <span aria-hidden="true" className="font-mono text-accent">
                ✓
              </span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
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
