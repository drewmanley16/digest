import type { Metadata } from "next";
import Link from "next/link";
import { BrandRow } from "@/components/BrandRow";
import { PlatformStats } from "@/components/PlatformStats";
import { Button, Eyebrow, Hero, Label, Section } from "@/components/ui";
import { mediaKit, partnerships } from "@/lib/site";

export const metadata: Metadata = {
  title: "digest.md · media kit",
  description: mediaKit.subhead,
};

function Bar({ percent }: { percent: number }) {
  return (
    <div className="h-1.5 w-full bg-line">
      <div className="h-full bg-accent" style={{ width: `${percent}%` }} />
    </div>
  );
}

export default function MediaKitPage() {
  const { demographics } = partnerships;

  return (
    <main className="fade-in flex-1">
      <Hero>
        <Eyebrow>{mediaKit.eyebrow}</Eyebrow>

        <h1 className="mt-5 font-mono text-4xl tracking-tight text-fg sm:text-5xl">
          {mediaKit.headline}
        </h1>

        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted sm:text-lg">
          {mediaKit.subhead}
        </p>
      </Hero>

      <PlatformStats platforms={partnerships.platformStats} />

      <Section>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <Label>{demographics.label}</Label>
          <p className="font-mono text-xs tracking-wide text-muted uppercase">
            {demographics.note}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
          {demographics.groups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-sm text-fg">{group.label}</p>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex justify-between gap-4 font-mono text-xs text-muted">
                      <span className="truncate">{item.name}</span>
                      <span className="shrink-0 text-fg">{item.display}</span>
                    </div>
                    <div className="mt-1.5">
                      <Bar percent={item.percent} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Label>{partnerships.brandsLabel}</Label>
        <BrandRow brands={partnerships.brands} />
      </Section>

      <Section>
        <h2 className="font-mono text-2xl tracking-tight text-fg sm:text-3xl">
          {mediaKit.closing.headline}
        </h2>

        <p className="mt-5 max-w-[65ch] leading-relaxed text-muted">
          {mediaKit.closing.body}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Button href={`mailto:${partnerships.closing.email}`}>
            {partnerships.closing.email}
          </Button>

          <Link
            href="/partnerships"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            {mediaKit.backLabel}
          </Link>
        </div>
      </Section>
    </main>
  );
}
