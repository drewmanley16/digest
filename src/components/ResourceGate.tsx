"use client";

import { useActionState } from "react";
import { unlock, type UnlockState } from "@/app/resources/[slug]/actions";
import { resources } from "@/lib/site";

const initialState: UnlockState = {};

export function ResourceGate({ slug }: { slug: string }) {
  const unlockResource = unlock.bind(null, slug);
  const [state, formAction, pending] = useActionState(
    unlockResource,
    initialState,
  );

  return (
    <form action={formAction} className="mt-8 max-w-md">
      <label htmlFor="email" className="sr-only">
        Email address
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={resources.gate.placeholder}
          aria-describedby={state.error ? "unlock-error" : undefined}
          className="w-full rounded-sm border border-line bg-transparent px-4 py-2.5 font-mono text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none"
        />

        <button
          type="submit"
          disabled={pending}
          className="shrink-0 rounded-sm bg-accent px-5 py-2.5 font-mono text-sm text-bg transition-colors hover:bg-accent/85 disabled:opacity-60"
        >
          {pending ? resources.gate.pendingButton : resources.gate.button}
        </button>
      </div>

      {/* Honeypot. Off-screen rather than display:none, which some bots skip. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} />
      </div>

      {state.error && (
        <p
          id="unlock-error"
          aria-live="polite"
          className="mt-3 font-mono text-xs text-accent"
        >
          {state.error}
        </p>
      )}
    </form>
  );
}
