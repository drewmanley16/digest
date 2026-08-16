/**
 * Every editable string, number, and URL on the site lives here.
 * Anything marked TODO is a placeholder — grep "TODO" to find what's left.
 */

export const nav = [
  { href: "/", label: "Home" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/partnerships", label: "Partnerships" },
] as const;

// TODO: real profile URLs
export const socials = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "TikTok", href: "https://tiktok.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "X", href: "https://x.com/" },
];

export const beehiiv = {
  formId: "3c1ed599-bf7b-4214-9cdc-75dd38816315",
  loaderSrc: "https://subscribe-forms.beehiiv.com/v3/loader.js",
  attributionSrc: "https://subscribe-forms.beehiiv.com/attribution.js",
};

export const home = {
  eyebrow: "$ whoami",
  headline: "Hey, I'm Drew.",
  subhead:
    "I write digest.md — a weekly newsletter on AI news, tools worth trying, and my take on both. I'm a CS junior building AI infra at PayPal and shipping hackathon projects most weekends.",
  // TODO: real reader count and cadence
  statLine: "X readers every [day]",
  section: {
    label: "the newsletter",
    headline: "One email a week. AI news, tools, and what I actually think.",
    body: "No link dumps, no hype cycle. Just what happened this week in AI, the tools that are actually worth your time, and an honest read on why any of it matters.",
    cta: "Join Free",
  },
};

export const newsletter = {
  eyebrow: "$ cat digest.md",
  headline: "digest.md",
  subhead: "Weekly AI news, new tools, and what I think about them.",
  byline: "Drew — CS @ University of Oregon, building AI infra at PayPal.",
  // TODO: real subscriber count
  subscriberCount: "Join X readers. Free, weekly, unsubscribe anytime.",
  whyLabel: "// why this exists",
  // TODO: replace with real copy
  whyParagraphs: [
    "Most AI newsletters are either link dumps or hype. I wanted something in between — what happened this week, what's actually worth trying, and what I think about it.",
    "I read a lot of this stuff anyway. I'm a CS junior working on AI infrastructure at PayPal, and I spend most weekends building things at hackathons. Writing it down forces me to have an actual opinion instead of just bookmarking another launch post.",
    "So every week you get three things: the news that mattered, a couple of tools I've actually opened, and a short take on where it's going. If something is overhyped, I'll say so.",
    "It takes about four minutes to read. That's the whole pitch.",
  ],
  faq: [
    {
      // TODO: confirm answers
      q: "Is this free?",
      a: "Yes, completely. No paid tier, no paywalled archive.",
    },
    {
      q: "How often do you send it?",
      a: "Once a week. One email, same day each week, nothing in between.",
    },
    {
      q: "What if I'm not deep into AI?",
      a: "That's fine. I write for people who want to keep up without reading twenty newsletters, and I explain things rather than assuming you already follow every launch.",
    },
    {
      q: "Can I unsubscribe anytime?",
      a: "Anytime, one click at the bottom of any issue. No hard feelings.",
    },
  ],
};

export const partnerships = {
  eyebrow: "media kit",
  headline: "Partner with Drew",
  // TODO: finalize
  subhead:
    "I make short-form video and write a weekly newsletter about AI tools and news. The audience is mostly engineers, students, and early-career technical people who try new tools first.",
  // TODO: real numbers
  stats: [
    { value: "XX.XK", label: "Instagram followers" },
    { value: "X.X%", label: "Engagement rate" },
    { value: "XXXK", label: "Monthly impressions" },
    { value: "X,XXX", label: "Newsletter subscribers" },
  ],
  // TODO: add brands — empty array renders an empty state
  brands: [] as string[],
  offerings: [
    {
      title: "Sponsored video package",
      body: "A dedicated short-form video across Instagram and TikTok, scripted and edited by me to fit the feed rather than read like an ad.",
    },
    {
      title: "Link in bio placement",
      body: "Your link featured in my bio for the duration of the campaign, driving traffic from every post in that window.",
    },
    {
      title: "Newsletter feature",
      body: "A dedicated section in digest.md with my honest take on your product, written in the same voice as the rest of the issue.",
    },
    {
      title: "Raw video file",
      body: "Full usage rights to the raw footage and final cut, so you can repurpose it for paid ads or your own channels.",
    },
  ],
  // TODO: confirm these
  reasons: [
    "Technical audience that actually installs and tries new tools.",
    "I only take partnerships for products I'd use myself.",
    "Scripting, filming, and editing handled end to end — no lift on your side.",
    "Fast turnaround, usually under a week from brief to delivery.",
    "Clear reporting on reach, engagement, and clicks after every campaign.",
    "Honest takes, which is exactly why the audience trusts a recommendation.",
  ],
  closing: {
    headline: "Let's work together",
    body: "Send me a note with what you're building and what you have in mind. I reply to everything.",
    // TODO: real email
    email: "hello@digest.md",
  },
};

export const footer = {
  wordmark: "digest.md",
  copyright: "© 2026 digest.md. All rights reserved.",
};
