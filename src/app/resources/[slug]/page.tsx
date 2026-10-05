import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResourceGate } from "@/components/ResourceGate";
import { Button, Eyebrow, Hero, Label, Section } from "@/components/ui";
import {
  findResource,
  isUnlockToken,
  resourceLinks,
  unlockCookieName,
} from "@/lib/resources.server";
import { resources } from "@/lib/site";

export function generateStaticParams() {
  return resources.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/resources/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const resource = findResource(slug);

  if (!resource) return {};

  return {
    title: `digest.md · ${resource.title}`,
    description: resource.blurb,
  };
}

export default async function ResourcePage({
  params,
}: PageProps<"/resources/[slug]">) {
  const { slug } = await params;
  const resource = findResource(slug);

  if (!resource) notFound();

  // One unlock covers every resource — see lib/resources.server.ts.
  const unlocked = isUnlockToken((await cookies()).get(unlockCookieName)?.value);
  const links = resourceLinks(resource);
  const document = "document" in resource ? resource.document : undefined;
  const projects = "projects" in resource ? resource.projects : undefined;
  const tracks = "tracks" in resource ? resource.tracks : undefined;
  const bundled = links.length > 1;

  return (
    <main className="fade-in flex-1">
      <Hero>
        <Eyebrow>{resource.eyebrow}</Eyebrow>

        <h1 className="mt-5 font-sans text-4xl tracking-tight text-fg sm:text-5xl">
          {resource.title}
        </h1>

        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted sm:text-lg">
          {resource.blurb}
        </p>
      </Hero>

      <Section>
        {unlocked && document ? (
          <div className="border border-accent p-6 sm:p-8">
            <Label>{resources.unlocked.label}</Label>

            <h2 className="mt-4 font-sans text-2xl tracking-tight text-fg sm:text-3xl">
              {resources.unlocked.heading}
            </h2>

            <p className="mt-4 max-w-[55ch] leading-relaxed text-muted">
              {document.intro}
            </p>

            <div className="mt-8 space-y-8">
              <article>
                <h3 className="font-mono text-sm text-fg">
                  {document.template.title}
                </h3>
                <pre className="mt-4 overflow-x-auto whitespace-pre-wrap border border-line p-5 font-sans text-sm leading-relaxed text-muted">
                  {document.template.body.join("\n")}
                </pre>
              </article>

              {document.examples.map((example, index) => (
                <article key={example.title}>
                  <h3 className="font-mono text-sm text-fg">
                    {String(index + 1).padStart(2, "0")} {example.title}
                  </h3>
                  <pre className="mt-4 overflow-x-auto whitespace-pre-wrap border border-line p-5 font-sans text-sm leading-relaxed text-muted">
                    {example.body.join("\n")}
                  </pre>
                </article>
              ))}
            </div>
          </div>
        ) : unlocked && projects ? (
          <div className="border border-accent p-6 sm:p-8">
            <Label>{resources.unlocked.label}</Label>

            <h2 className="mt-4 font-sans text-2xl tracking-tight text-fg sm:text-3xl">
              {resources.unlocked.heading}
            </h2>

            <p className="mt-4 max-w-[55ch] leading-relaxed text-muted">
              {projects.intro}
            </p>

            <div className="mt-8 space-y-6">
              {projects.items.map((project, index) => (
                <article key={project.title} className="border border-line p-5 sm:p-6">
                  <h3 className="font-sans text-lg tracking-tight text-fg">
                    <span className="mr-3 font-mono text-xs text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.pitch}
                  </p>

                  <p className="mt-6 font-mono text-xs tracking-[0.14em] text-fg uppercase">
                    What to build
                  </p>
                  <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted">
                    {project.build.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>

                  <p className="mt-6 font-mono text-xs tracking-[0.14em] text-fg uppercase">
                    Tech stack
                  </p>
                  <dl className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[8rem_1fr]">
                    {project.stack.map((row) => (
                      <div key={row.label} className="contents">
                        <dt className="font-mono text-xs leading-relaxed text-fg sm:text-sm">
                          {row.label}
                        </dt>
                        <dd className="leading-relaxed text-muted">{row.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">
                    <span className="font-medium text-fg">Bonus: </span>
                    {project.bonus}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ) : unlocked && tracks ? (
          <div className="border border-accent p-6 sm:p-8">
            <Label>{resources.unlocked.label}</Label>

            <h2 className="mt-4 font-sans text-2xl tracking-tight text-fg sm:text-3xl">
              {resources.unlocked.heading}
            </h2>

            <p className="mt-4 max-w-[55ch] leading-relaxed text-muted">
              {tracks.intro}
            </p>

            <div className="mt-10 space-y-10">
              {tracks.items.map((track) => (
                <section key={track.major}>
                  <p className="font-mono text-xs tracking-[0.14em] text-fg uppercase">
                    {track.major}
                  </p>

                  <div className="mt-4 space-y-4">
                    {track.projects.map((project, index) => (
                      <article key={project.title} className="border border-line p-5 sm:p-6">
                        <h3 className="font-sans text-lg tracking-tight text-fg">
                          <span className="mr-3 font-mono text-xs text-muted">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {project.title}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          {project.pitch}
                        </p>

                        <p className="mt-4 text-sm leading-relaxed text-muted">
                          <span className="font-mono text-xs tracking-[0.14em] text-fg uppercase">
                            Stack{" "}
                          </span>
                          {project.stack}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        ) : unlocked ? (
          <div className="border border-accent p-6 sm:p-8">
            <Label>{resources.unlocked.label}</Label>

            <h2 className="mt-4 font-sans text-2xl tracking-tight text-fg sm:text-3xl">
              {resources.unlocked.heading}
            </h2>

            <p className="mt-4 max-w-[55ch] leading-relaxed text-muted">
              {bundled ? resources.unlocked.multiNote : resources.unlocked.note}
            </p>

            {bundled ? (
              <ul className="mt-7 space-y-3">
                {links.map((link, index) => (
                  <li key={link.url}>
                    <a
                      href={`/resources/${resource.slug}/open?link=${index}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline gap-4 border border-line p-5 transition-colors hover:border-accent"
                    >
                      <span className="font-mono text-xs text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex-1">
                        <span className="block font-sans text-base text-fg transition-colors group-hover:text-accent">
                          {link.label} →
                        </span>
                        {link.note && (
                          <span className="mt-1 block text-sm leading-relaxed text-muted">
                            {link.note}
                          </span>
                        )}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-7">
                <Button
                  href={`/resources/${resource.slug}/open`}
                  size="lg"
                  newTab
                >
                  {resources.unlocked.button.replace("{noun}", resource.noun)}
                </Button>
              </div>
            )}

            <p className="mt-4 font-sans text-xs text-muted">
              {resources.unlocked.newTabNote}
            </p>
          </div>
        ) : (
          <div className="border border-line p-6 sm:p-8">
            <Label>{resources.gate.label}</Label>

            <h2 className="mt-4 font-sans text-2xl tracking-tight text-fg sm:text-3xl">
              {resources.gate.heading}
            </h2>

            <p className="mt-4 max-w-[55ch] leading-relaxed text-muted">
              {resources.gate.support.replace("{noun}", resource.noun)}
            </p>

            <ResourceGate slug={resource.slug} noun={resource.noun} />
          </div>
        )}

        <div className="mt-10">
          <Link
            href="/resources"
            className="font-sans text-sm text-muted transition-colors hover:text-accent"
          >
            {resources.backLabel}
          </Link>
        </div>
      </Section>
    </main>
  );
}
