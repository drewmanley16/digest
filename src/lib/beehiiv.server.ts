import "server-only";

/**
 * Beehiiv subscription API. Needs BEEHIIV_API_KEY and BEEHIIV_PUBLICATION_ID
 * (Settings -> Integrations -> API on beehiiv; the publication id starts with
 * "pub_"). Without both, subscribing fails loudly rather than quietly dropping
 * the email — a gate that hands over the file but never captures the address
 * is worse than a broken one.
 */
export async function subscribe(
  email: string,
  utmContent: string,
): Promise<boolean> {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    console.error("beehiiv: missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID");
    return false;
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          // Someone who unsubscribed and came back for a resource is opting in
          // again, so reactivate rather than 409.
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: "digest.md",
          utm_medium: "resource_gate",
          utm_content: utmContent,
        }),
      },
    );

    if (!response.ok) {
      // Log the address too: if beehiiv is down, this is the only record that
      // the lead ever existed.
      console.error(
        `beehiiv: subscribe failed (${response.status}) for ${email}`,
        await response.text(),
      );
      return false;
    }

    return true;
  } catch (error) {
    console.error(`beehiiv: subscribe threw for ${email}`, error);
    return false;
  }
}
