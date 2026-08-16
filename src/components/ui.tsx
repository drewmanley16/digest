import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-sm tracking-wide text-accent">{children}</p>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
      {children}
    </p>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`border-t border-line px-5 py-16 sm:px-8 sm:py-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-3xl">{children}</div>
    </section>
  );
}

export function Hero({ children }: { children: ReactNode }) {
  return (
    <section className="px-5 pt-16 pb-16 sm:px-8 sm:pt-24 sm:pb-20">
      <div className="mx-auto w-full max-w-3xl">{children}</div>
    </section>
  );
}

const buttonBase =
  "inline-flex items-center justify-center rounded-sm px-5 py-2.5 font-mono text-sm transition-colors";

const buttonVariants = {
  primary: "bg-accent text-bg hover:bg-accent/85",
  secondary: "border border-line text-fg hover:border-accent hover:text-accent",
};

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
}) {
  const className = `${buttonBase} ${buttonVariants[variant]}`;
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
