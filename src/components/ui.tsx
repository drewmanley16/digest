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
  "inline-flex items-center justify-center rounded-sm font-sans font-medium transition-colors";

const buttonSizes = {
  default: "px-5 py-2.5 text-sm",
  // For the one CTA on a page that has to be impossible to miss.
  lg: "px-7 py-4 text-base",
};

const buttonVariants = {
  primary: "bg-accent text-bg hover:bg-accent/85",
  secondary: "border border-line text-fg hover:border-accent hover:text-accent",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  newTab = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  newTab?: boolean;
}) {
  const className = `${buttonBase} ${buttonSizes[size]} ${buttonVariants[variant]}`;
  // newTab also opts out of <Link>: prefetching a route that redirects would
  // fire the redirect before anyone clicked it.
  const isInternal = href.startsWith("/") && !newTab;

  if (isInternal) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
