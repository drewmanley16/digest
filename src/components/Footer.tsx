import { footer, socials } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-base text-fg">{footer.wordmark}</p>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-8 w-full max-w-3xl font-mono text-xs text-muted">
        {footer.copyright}
      </p>
    </footer>
  );
}
