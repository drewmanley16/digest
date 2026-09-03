import type { Metadata } from "next";
import { BrandRow } from "@/components/BrandRow";
import { OfferingIcon } from "@/components/Icons";
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

        <h1 className=" font-sans text-4xl tracking-tight text-fg sm:text-5xl">
          {mediaKit.headline}
        </h1>

        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted sm:text-lg">
          {mediaKit.subhead}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button href={`mailto:${partnerships.closing.email}`}>
            {mediaKit.primaryCta}
          </Button>
          <Button href="/partnerships" variant="secondary">
            {mediaKit.secondaryCta}
          </Button>
        </div>

        <p className="mt-6 font-mono text-xs tracking-wide text-muted uppercase">
          {mediaKit.updatedLabel}
        </p>
      </Hero>

      <Section>
        <Label>{mediaKit.snapshotLabel}</Label>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
          {mediaKit.snapshot.map((metric) => (
            <div key={metric.label} className="border border-line p-5">
              <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
                {metric.label}
              </p>
              <p className="mt-3 font-mono text-3xl tracking-tight text-fg">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Label>{mediaKit.audienceLabel}</Label>
            <p className="mt-5 leading-relaxed text-fg">
              {mediaKit.audienceIntro}
            </p>

            <ul className="mt-6 space-y-3">
              {mediaKit.audienceHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 leading-relaxed text-fg">
                  <span aria-hidden="true" className="font-mono text-accent">
                    /
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Label>{mediaKit.sponsorFitLabel}</Label>
            <ul className="mt-5 flex flex-wrap gap-2">
              {mediaKit.sponsorFit.map((fit) => (
                <li
                  key={fit}
                  className="border border-line px-3 py-2 font-mono text-xs text-fg"
                >
                  {fit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Label>{mediaKit.contentProofLabel}</Label>
          <p className="max-w-[42ch] text-sm leading-relaxed text-muted">
            Recent posts work best when they turn career anxiety or AI curiosity
            into one clear action.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
          {mediaKit.contentProof.map((item) => (
            <article key={item.title} className="bg-bg p-6">
              {item.videoSrc ? (
                <div className="mb-5 overflow-hidden border border-line bg-paper">
                  <video
                    className="aspect-[9/16] w-full bg-line object-cover"
                    src={item.videoSrc}
                    poster={item.posterSrc ?? undefined}
                    controls
                    playsInline
                    preload="metadata"
                  />
                </div>
              ) : null}

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <p className="font-mono text-3xl tracking-tight text-fg">
                  {item.metric}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs tracking-wide text-accent uppercase underline-offset-4 hover:underline"
                  >
                    View post
                  </a>
                ) : null}
              </div>

              <h2 className="mt-4 font-mono text-base text-fg">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </Section>

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
        <Label>{mediaKit.formatsLabel}</Label>

        <div className="mt-6 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {partnerships.offerings.map((offering) => (
            <div key={offering.title} className="bg-bg p-6">
              <span className="inline-flex border border-line p-2 text-accent">
                <OfferingIcon name={offering.icon} />
              </span>
              <h2 className="mt-4 font-mono text-base text-fg">
                {offering.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {offering.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 max-w-[65ch] text-sm leading-relaxed text-muted">
          {mediaKit.ratesNote}
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Label>{mediaKit.processLabel}</Label>
            <p className="mt-5 leading-relaxed text-muted">
              Partnerships stay useful for the audience and easy for the brand
              to review.
            </p>
          </div>

          <ol className="space-y-3">
            {mediaKit.process.map((step, index) => (
              <li
                key={step}
                className="grid grid-cols-[2.5rem_1fr] border border-line p-4"
              >
                <span className="font-mono text-xs text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed text-fg">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <Label>{mediaKit.contactLabel}</Label>
        <h2 className="mt-5 font-sans text-3xl tracking-tight text-fg">
          {mediaKit.contactHeadline}
        </h2>
        <p className="mt-5 max-w-[65ch] leading-relaxed text-muted">
          {mediaKit.contactBody}
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
