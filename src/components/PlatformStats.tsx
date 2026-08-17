import { SocialIcon } from "@/components/SocialIcons";
import { Section } from "@/components/ui";

type Platform = {
  name: string;
  icon: string;
  handle: string;
  note: string;
  metrics: readonly { label: string; value: string }[];
};

export function PlatformStats({
  platforms,
}: {
  platforms: readonly Platform[];
}) {
  return (
    <>
      {platforms.map((platform) => (
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
              <div key={metric.label} className="border border-line p-5">
                <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
                  {metric.label}
                </p>
                <p className="mt-3 font-mono text-2xl tracking-tight text-fg">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
