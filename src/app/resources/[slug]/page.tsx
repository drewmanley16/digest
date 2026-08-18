import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResourceGate } from "@/components/ResourceGate";
import { Button, Eyebrow, Hero, Section } from "@/components/ui";
import {
  findResource,
  isUnlockToken,
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

  return (
    <main className="fade-in flex-1">
      <Hero>
        <Eyebrow>{resource.format}</Eyebrow>

        <h1 className="mt-5 font-mono text-4xl tracking-tight text-fg sm:text-5xl">
          {resource.title}
        </h1>

        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted sm:text-lg">
          {resource.blurb}
        </p>
      </Hero>

      <Section>
        {unlocked ? (
          <>
            <p className="font-mono text-sm text-muted">
              {resources.unlocked.note}
            </p>

            <div className="mt-6">
              <Button href={`/resources/${resource.slug}/open`} newTab>
                {resources.unlocked.button}
              </Button>
            </div>
          </>
        ) : (
          <>
            <p className="max-w-[60ch] leading-relaxed text-muted">
              {resources.gate.support}
            </p>

            <ResourceGate slug={resource.slug} />
          </>
        )}

        <div className="mt-10">
          <Link
            href="/resources"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            {resources.backLabel}
          </Link>
        </div>
      </Section>
    </main>
  );
}
