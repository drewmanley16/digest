/**
 * Every editable string, number, and URL on the site lives here.
 * Anything marked TODO is a placeholder — grep "TODO" to find what's left.
 */

export const nav = [
  { href: "/", label: "Home" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/partnerships", label: "Partnerships" },
] as const;

// `icon` maps to a glyph in components/SocialIcons.tsx.
export const socials = [
  {
    label: "Instagram",
    handle: "@drewisliving",
    href: "https://www.instagram.com/drewisliving/",
    icon: "instagram",
  },
  {
    label: "LinkedIn",
    handle: "drewmanley",
    href: "https://www.linkedin.com/in/drewmanley/",
    icon: "linkedin",
  },
  {
    label: "X",
    handle: "@drewbydoo05",
    href: "https://x.com/drewbydoo05",
    icon: "x",
  },
] as const;

export const beehiiv = {
  formId: "3c1ed599-bf7b-4214-9cdc-75dd38816315",
  loaderSrc: "https://subscribe-forms.beehiiv.com/v3/loader.js",
  attributionSrc: "https://subscribe-forms.beehiiv.com/attribution.js",
};

export const profile = {
  name: "Drew",
  wordmark: "drew",
  // Square crop of drew_headshot.JPG, optimized. Regenerate if the photo changes.
  avatarSrc: "/avatar.jpg" as string | null,
  monogram: "D",
  navCta: "Join free",
};

export const home = {
  eyebrow: "$ whoami",
  // The newsletter, framed as yours — not a standalone product.
  headline: "digest.md by Drew",
  byline: "CS @ University of Oregon · building AI infra at PayPal",
  subhead:
    "For people who want to keep up with AI without reading twenty newsletters. What actually happened this week, the tools worth opening, and an honest take on both — from someone building with them every day.",
  heroCta: "Join the newsletter →",
  subscribeHeading: "Join the newsletter",
  subscribeSupport: "Free, one email a week, unsubscribe anytime.",
  // TODO: real reader count and send day
  statLine: "Join X readers every [day]",
  letter: {
    heading: "A note to the reader",
    to: "YOU",
    // TODO: real from-address
    from: "DREW <HELLO@DIGEST.MD>",
    re: "WHY I WRITE THIS",
    // TODO: replace with your own words — this is the most personal thing on the site
    paragraphs: [
      "I got tired of reading about AI and never actually building anything with it. Every newsletter was either a wall of links or someone telling me the world was about to end. Neither helped me ship anything.",
      "So I started writing the email I wanted to get. I'm a CS junior at the University of Oregon, I work on AI infrastructure at PayPal, and I spend most weekends at hackathons putting these tools through their paces. When something is good, I've usually already broken it in three ways by the time I write about it.",
      "That's the whole angle. Not an analyst take, not a hype take — a builder's take. If a tool is overhyped I'll say so, and if I was wrong last week I'll say that too.",
      "It's free, it comes once a week, and it takes about four minutes to read. If that sounds useful, I'd love to have you.",
    ],
    signoff: "— Drew",
    stamp: {
      top: "SENT WITH LOVE",
      initials: "DM",
      // TODO: real send day + time
      bottom: "MONDAY 06:00",
    },
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
  // ALL FIGURES BELOW ARE PLACEHOLDERS. Fill from your own Instagram/LinkedIn
  // analytics and Beehiiv dashboard before sending this page to any brand.
  profile: {
    categories: ["AI & Tech", "Developer Tools", "Education"],
    totalFollowersLabel: "Total followers",
    totalFollowers: "—",
    platforms: [
      { icon: "instagram", label: "Instagram", value: "—" },
      { icon: "linkedin", label: "LinkedIn", value: "—" },
      { icon: "x", label: "X", value: "—" },
    ],
    ctaLabel: "View media kit →",
    aboutLabel: "About me",
    about:
      "I'm Drew, a CS student at the University of Oregon building AI infrastructure at PayPal. I make short-form video about AI tools and write digest.md, a weekly newsletter for people who build with this stuff rather than just read about it.",
  },

  // Drop logo files in public/brands/ and point `logo` at them.
  // With logo: null the name renders as a text tile instead.
  brandsLabel: "Brand partners",
  brands: [
    { name: "Higgsfield AI", logo: "/brands/higgsfield.png" as string | null },
    { name: "Devmaxx", logo: "/brands/devmaxx.png" as string | null },
  ],

  // One block per platform, same card grid for each.
  platformStats: [
    {
      name: "Instagram",
      icon: "instagram",
      handle: "@drewisliving",
      note: "Last 30 days",
      metrics: [
        { label: "Followers", value: "—" },
        { label: "Engagement", value: "—" },
        { label: "Follower engagement", value: "—" },
        { label: "Total impressions", value: "—" },
        { label: "30 day reach", value: "—" },
        { label: "Avg reels views", value: "—" },
      ],
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      handle: "drewmanley",
      note: "Last 30 days",
      metrics: [
        { label: "Followers", value: "—" },
        { label: "Engagement", value: "—" },
        { label: "Impressions", value: "—" },
        { label: "Total posts", value: "—" },
        { label: "Avg reactions", value: "—" },
        { label: "Avg comments", value: "—" },
      ],
    },
    {
      name: "X",
      icon: "x",
      handle: "@drewbydoo05",
      note: "Last 30 days",
      metrics: [
        { label: "Followers", value: "—" },
        { label: "Impressions", value: "—" },
        { label: "Engagement", value: "—" },
        { label: "Total posts", value: "—" },
        { label: "Avg likes", value: "—" },
        { label: "Avg reposts", value: "—" },
      ],
    },
  ],

  demographics: {
    label: "Audience demographics",
    ageLabel: "Age",
    // TODO: real split from Instagram insights
    age: [
      { range: "13-17", percent: 0 },
      { range: "18-24", percent: 0 },
      { range: "25-34", percent: 0 },
      { range: "35-44", percent: 0 },
      { range: "45-54", percent: 0 },
    ],
    genderLabel: "Gender",
    gender: [
      { label: "Male", percent: 0 },
      { label: "Female", percent: 0 },
    ],
  },

  // TODO: edit to match what you actually sell
  offerings: [
    {
      icon: "video",
      title: "Sponsored video package",
      body: "One reel cross-posted to Instagram, TikTok, and YouTube Shorts. Story-driven, built for the feed rather than read like an ad.",
    },
    {
      icon: "link",
      title: "Link in bio placement",
      body: "Dedicated link in bio across all platforms for one full week.",
    },
    {
      icon: "megaphone",
      title: "Paid ad usage",
      body: "Meta whitelisting and TikTok Spark Ads. Run my content as paid ads from your brand's account.",
    },
    {
      icon: "bolt",
      title: "Automated DM integration",
      body: "A ManyChat flow that sends followers straight to your product, landing page, or offer.",
    },
    {
      icon: "mail",
      title: "Newsletter feature",
      body: "A dedicated feature in digest.md, sent weekly to a tech-savvy audience with high open rates.",
    },
    {
      icon: "file",
      title: "Raw video file",
      body: "Full usage rights to the raw footage and final cut, to repurpose across your own channels and ads.",
    },
  ],
  reasonsLabel: "Why brands work with me",
  // TODO: confirm — the numeric claims must match the stats above
  reasons: [
    "Engaged audience across Instagram, LinkedIn, and X.",
    "Audience deeply engaged in AI and developer tools.",
    "I only take partnerships for products I'd use myself.",
    "Scripting, filming, and editing handled end to end.",
    "Trusted by AI startups like Higgsfield AI and Devmaxx.",
    "Clear reporting on reach, engagement, and clicks after every campaign.",
  ],
  faqLabel: "Questions brands ask",
  // TODO: confirm rates, turnaround, and exclusivity terms before sending to anyone
  faq: [
    {
      q: "What does a partnership cost?",
      a: "It depends on the deliverables and usage rights. Send me what you have in mind and I'll come back with a flat rate — no retainers, no hidden fees.",
    },
    {
      q: "How long does turnaround take?",
      a: "Usually under a week from approved brief to delivered video. Rush timelines are possible if you tell me up front.",
    },
    {
      q: "Do I get approval before it goes live?",
      a: "Yes. You see the script before I film and the cut before it posts. One round of revisions is included.",
    },
    {
      q: "Will you promote anything?",
      a: "No. I only take partnerships for products I'd actually use, because a recommendation my audience doesn't trust isn't worth anything to either of us.",
    },
  ],
  closing: {
    headline: "Let's work together",
    body: "Send me a note with what you're building and what you have in mind. I reply to everything.",
    // TODO: real email
    email: "hello@digest.md",
  },
};

export const mediaKit = {
  eyebrow: "$ cat mediakit.md",
  headline: "Media kit",
  subhead:
    "Full audience numbers across every platform, plus the brands I've worked with. Figures refresh when I pitch — ask if you need something more recent.",
  backLabel: "← Back to partnerships",
  closing: {
    headline: "Want the deck?",
    body: "Happy to send a PDF version or walk through the numbers on a call.",
  },
};

export const footer = {
  wordmark: "digest.md",
  copyright: "© 2026 digest.md. All rights reserved.",
};
