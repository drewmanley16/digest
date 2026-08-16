import { home } from "@/lib/site";

const { letter } = home;

function Field({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex gap-4">
      <dt className="w-14 shrink-0 text-muted">{name}</dt>
      <dd className="text-fg">{value}</dd>
    </div>
  );
}

export function Letter() {
  return (
    <div className="relative border border-line">
      {/* Memo header — the terminal-mail framing */}
      <dl className="space-y-1.5 border-b border-line p-6 pr-24 font-mono text-xs sm:pr-32 sm:text-sm">
        <Field name="TO" value={letter.to} />
        <Field name="FROM" value={letter.from} />
        <Field name="RE" value={letter.re} />
      </dl>

      {/* Postmark */}
      <div className="absolute top-4 right-4 rotate-6 border border-dashed border-line px-3 py-2 text-center font-mono text-[9px] leading-tight text-muted">
        <span className="block">{letter.stamp.top}</span>
        <span className="my-0.5 block text-lg text-accent">
          {letter.stamp.initials}
        </span>
        <span className="block">{letter.stamp.bottom}</span>
      </div>

      <div className="space-y-5 p-6 sm:p-8">
        {letter.paragraphs.map((paragraph) => (
          <p key={paragraph} className="max-w-[65ch] leading-relaxed text-fg">
            {paragraph}
          </p>
        ))}

        <p className="pt-2 font-mono text-sm text-accent">{letter.signoff}</p>
      </div>
    </div>
  );
}
