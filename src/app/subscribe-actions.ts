"use server";

import { subscribe } from "@/lib/beehiiv.server";
import { newsletter } from "@/lib/site";

export type SubscribeState = { status: "idle" | "done"; error?: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Same beehiiv call the resource gate makes, minus the unlock cookie. This
 * replaced the beehiiv iframe embed: the form is ours, so it matches the
 * palette and costs no third-party request chain.
 */
export async function joinNewsletter(
  source: string,
  _previous: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  if (String(formData.get("company") ?? "").length > 0) {
    return { status: "idle", error: newsletter.form.error };
  }

  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!emailPattern.test(email)) {
    return { status: "idle", error: newsletter.form.invalidEmail };
  }

  if (!(await subscribe(email, source))) {
    return { status: "idle", error: newsletter.form.error };
  }

  return { status: "done" };
}
