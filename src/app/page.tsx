import { Button, Eyebrow, Hero, Label, Section } from "@/components/ui";
import { home } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="fade-in flex-1">
      <Hero>
        <Eyebrow>{home.eyebrow}</Eyebrow>

        <h1 className="mt-5 font-mono text-4xl tracking-tight text-fg sm:text-5xl">
          {home.headline}
        </h1>

        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted sm:text-lg">
          {home.subhead}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/newsletter">Read the newsletter →</Button>
          <Button href="/partnerships" variant="secondary">
            Partner with me
          </Button>
        </div>

        <p className="mt-6 font-mono text-sm text-muted">{home.statLine}</p>
      </Hero>

      <Section>
        <Label>{home.section.label}</Label>

        <h2 className="mt-5 max-w-[34ch] font-mono text-2xl leading-snug tracking-tight text-fg sm:text-3xl">
          {home.section.headline}
        </h2>

        <p className="mt-5 max-w-[65ch] leading-relaxed text-muted">
          {home.section.body}
        </p>

        <div className="mt-8">
          <Button href="/newsletter#subscribe">{home.section.cta}</Button>
        </div>
      </Section>
    </main>
  );
}
