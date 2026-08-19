"use client";

import { useActionState } from "react";
import {
  joinNewsletter,
  type SubscribeState,
} from "@/app/subscribe-actions";
import { newsletter } from "@/lib/site";

const initialState: SubscribeState = { status: "idle" };

/**
 * `source` lands in beehiiv as utm_content, so you can tell which form on the
 * site is actually converting.
 */
export function SubscribeForm({
  source,
  className = "",
  align = "left",
}: {
  source: string;
  className?: string;
  align?: "left" | "center";
}) {
  const [state, formAction, pending] = useActionState(
    joinNewsletter.bind(null, source),
    initialState,
  );

  const alignment = align === "center" ? "items-center text-center" : "";

  if (state.status === "done") {
    return (
      <div
        className={`flex flex-col border border-accent p-6 ${alignment} ${className}`}
      >
        <p className="font-sans text-lg text-fg">{newsletter.form.doneTitle}</p>
        <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-muted">
          {newsletter.form.doneBody}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className={`w-full ${className}`}>
      <label htmlFor={`email-${source}`} className="sr-only">
        Email address
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={`email-${source}`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={newsletter.form.placeholder}
          aria-describedby={state.error ? `error-${source}` : undefined}
          className="w-full rounded-sm border border-line bg-transparent px-4 py-3 font-sans text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none"
        />

        <button
          type="submit"
          disabled={pending}
          className="shrink-0 rounded-sm bg-accent px-6 py-3 font-sans text-sm font-medium text-bg transition-colors hover:bg-accent/85 disabled:opacity-60"
        >
          {pending ? newsletter.form.pendingButton : newsletter.form.button}
        </button>
      </div>

      {/* Honeypot: off-screen rather than display:none, which some bots skip. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor={`company-${source}`}>Company</label>
        <input
          id={`company-${source}`}
          name="company"
          type="text"
          tabIndex={-1}
        />
      </div>

      {state.error && (
        <p
          id={`error-${source}`}
          aria-live="polite"
          className="mt-3 font-sans text-xs text-accent"
        >
          {state.error}
        </p>
      )}
    </form>
  );
}
