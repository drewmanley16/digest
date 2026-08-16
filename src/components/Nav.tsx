"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar } from "@/components/Avatar";
import { nav, profile } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/95 backdrop-blur-sm">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-5 py-3 sm:px-8"
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Avatar size={28} />
          <span className="font-mono text-sm text-fg sm:text-base">
            {profile.wordmark}
          </span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          <ul className="flex items-center gap-3.5 font-mono text-xs sm:gap-6 sm:text-sm">
            {nav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={
                      isActive
                        ? "text-accent underline underline-offset-4"
                        : "text-muted transition-colors hover:text-fg"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hidden on the narrowest screens only, where it would crowd the
              links — the hero form sits right there anyway. */}
          <Link
            href="/newsletter#subscribe"
            className="hidden rounded-sm bg-accent px-3.5 py-2 font-mono text-xs tracking-wide text-bg uppercase transition-colors hover:bg-accent/85 sm:inline-block"
          >
            {profile.navCta}
          </Link>
        </div>
      </nav>
    </header>
  );
}
