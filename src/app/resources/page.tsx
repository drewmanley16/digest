import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Hero, Label, Section } from "@/components/ui";
import { resources } from "@/lib/site";

export const metadata: Metadata = {
  title: "digest.md · resources",
  description: resources.subhead,
};

export default function ResourcesPage() {
  return (
    <main className="fade-in flex-1">
      <Hero>
        <Eyebrow>{resources.eyebrow}</Eyebrow>

        <h1 className="mt-5 font-mono text-4xl tracking-tight text-fg sm:text-5xl">
          {resources.headline}
        </h1>

        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted sm:text-lg">
          {resources.subhead}
        </p>
      </Hero>

      <Section>
        <Label>{resources.indexLabel}</Label>

        <ul className="mt-8 space-y-4">
          {resources.items.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/resources/${item.slug}`}
                className="group block border border-line p-6 transition-colors hover:border-accent"
              >
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-[0.14em] uppercase">
                  <span className="text-muted">{item.format}</span>
                  <span className="text-line">/</span>
                  <span className="text-accent">{resources.indexGateHint}</span>
                </div>

                <h2 className="mt-3 font-mono text-xl tracking-tight text-fg transition-colors group-hover:text-accent">
                  {item.title}
                </h2>

                <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted">
                  {item.blurb}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
