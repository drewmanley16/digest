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
  byline: "CS @ University of Oregon · SWE at PayPal",
  subhead:
    "Keep up with AI without reading twenty newsletters. What happened this week, the tools worth trying, and what I actually think.",
  heroCta: "Join the newsletter →",
  subscribeHeading: "Join the newsletter",
  subscribeSupport: "Free, one email a week, unsubscribe anytime.",
  letter: {
    heading: "A note to the reader",
    to: "YOU",
    from: "DREW <DREWMANLEY16@GMAIL.COM>",
    re: "WHY I WRITE THIS",
    // TODO: replace with your own words — this is the most personal thing on the site
    paragraphs: [
      "I got tired of reading about AI and never actually building anything with it. Every newsletter was either a wall of links or someone telling me the world was about to end. Neither helped me ship anything.",
      "So I started writing the email I wanted to get. I'm a CS junior at the University of Oregon, I work as a software engineer at PayPal, and I spend most weekends at hackathons putting these tools through their paces. When something is good, I've usually already broken it in three ways by the time I write about it.",
      "That's the whole angle. Not an analyst take or a hype take, just a builder's take. If a tool is overhyped I'll say so, and if I was wrong last week I'll say that too.",
      "It's free, it comes once a week, and it takes about four minutes to read. If that sounds useful, I'd love to have you.",
    ],
    signoff: "Drew",
  },
};

export const newsletter = {
  eyebrow: "$ cat digest.md",
  headline: "digest.md",
  subhead: "Weekly AI news, new tools, and what I think about them.",
  byline: "Drew · CS @ University of Oregon · SWE at PayPal",
  // TODO: real subscriber count
  subscriberCount: "Join X readers. Free, weekly, unsubscribe anytime.",
  whyLabel: "// why this exists",
  // TODO: replace with real copy
  whyParagraphs: [
    "Most AI newsletters are either link dumps or hype. I wanted something in between: what happened this week, what's actually worth trying, and what I think about it.",
    "I read a lot of this stuff anyway. I'm a CS junior working as a software engineer at PayPal, and I spend most weekends building things at hackathons. Writing it down forces me to have an actual opinion instead of just bookmarking another launch post.",
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
  // Instagram figures from the professional dashboard, LinkedIn from the
  // aggregate analytics export. Window: 21 Jul - 17 Aug 2026.
  // Refresh both before pitching; the window label lives on each block.
  profile: {
    categories: ["AI & Tech", "Developer Tools", "Education"],
    totalFollowersLabel: "Total followers",
    // Instagram 3,123 + LinkedIn 2,379.
    totalFollowers: "5,502",
    platforms: [
      { icon: "instagram", label: "Instagram", value: "3,123" },
      { icon: "linkedin", label: "LinkedIn", value: "2,379" },
    ],
    ctaLabel: "View media kit →",
    aboutLabel: "About me",
    about:
      "I'm Drew, a CS student at the University of Oregon and a software engineer at PayPal. I make short-form video about AI tools and write digest.md, a weekly newsletter for people who build with this stuff rather than just read about it.",
  },

  // Drop logo files in public/brands/ and point `logo` at them.
  // With logo: null the name renders as a text tile instead.
  brandsLabel: "Brand partners",
  brands: [
    { name: "Higgsfield AI", logo: "/brands/higgsfield.png" as string | null },
    { name: "Devmaxx", logo: "/brands/devmaxx.png" as string | null },
  ],

  statsWindow: "21 Jul – 17 Aug 2026",

  // One block per platform, same card grid for each.
  platformStats: [
    {
      name: "Instagram",
      icon: "instagram",
      handle: "@drewisliving",
      note: "21 Jul – 17 Aug 2026",
      metrics: [
        { label: "Followers", value: "3,123" },
        { label: "Views", value: "602K" },
        { label: "Viewers", value: "252,675" },
        { label: "Interactions", value: "39.4K" },
        { label: "Profile visits", value: "10,831" },
        { label: "Bio link taps", value: "1,164" },
      ],
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      handle: "drewmanley",
      note: "21 Jul – 17 Aug 2026",
      metrics: [
        { label: "Followers", value: "2,379" },
        { label: "Impressions", value: "54,137" },
        { label: "Members reached", value: "29,013" },
        { label: "Engagements", value: "931" },
        { label: "Engagement rate", value: "1.7%" },
        { label: "New followers", value: "+203" },
      ],
    },
  ],

  // LinkedIn breakdown from the analytics export, Instagram from the
  // Insights > Audience tab. Both windows: 21 Jul - 17 Aug 2026.
  demographics: {
    label: "Audience demographics",
    note: "LinkedIn + Instagram · 21 Jul – 17 Aug 2026",
    groups: [
      {
        label: "Age (Instagram)",
        items: [
          { name: "18-24", percent: 45.6, display: "45.6%" },
          { name: "25-34", percent: 41.5, display: "41.5%" },
          { name: "35-44", percent: 6.8, display: "6.8%" },
          { name: "45-54", percent: 3.1, display: "3.1%" },
          { name: "65+", percent: 1.3, display: "1.3%" },
          { name: "55-64", percent: 1.0, display: "1.0%" },
        ],
      },
      {
        label: "Country (Instagram)",
        items: [
          { name: "United States", percent: 40.0, display: "40.0%" },
          { name: "India", percent: 23.4, display: "23.4%" },
          { name: "Canada", percent: 4.6, display: "4.6%" },
          { name: "United Kingdom", percent: 2.9, display: "2.9%" },
          { name: "Pakistan", percent: 1.6, display: "1.6%" },
        ],
      },
      {
        label: "Gender (Instagram)",
        items: [
          { name: "Men", percent: 81.1, display: "81.1%" },
          { name: "Women", percent: 18.9, display: "18.9%" },
        ],
      },
      {
        label: "Location (LinkedIn)",
        items: [
          { name: "San Francisco Bay Area", percent: 24, display: "24%" },
          { name: "Greater Eugene-Springfield", percent: 12, display: "12%" },
          { name: "Portland, Oregon Metro", percent: 9, display: "9%" },
          { name: "New York City Metro", percent: 5, display: "5%" },
          { name: "Los Angeles Metro", percent: 4, display: "4%" },
          { name: "Austin, Texas Metro", percent: 4, display: "4%" },
        ],
      },
      {
        label: "Seniority (LinkedIn)",
        items: [
          { name: "Entry", percent: 32, display: "32%" },
          { name: "Senior", percent: 24, display: "24%" },
          { name: "Training", percent: 9, display: "9%" },
          { name: "Director", percent: 4, display: "4%" },
          { name: "Owner", percent: 4, display: "4%" },
          { name: "Manager", percent: 3, display: "3%" },
        ],
      },
      {
        label: "Industry (LinkedIn)",
        items: [
          { name: "Software Development", percent: 19, display: "19%" },
          { name: "Technology & Internet", percent: 10, display: "10%" },
          { name: "Financial Services", percent: 6, display: "6%" },
          { name: "IT Services & Consulting", percent: 6, display: "6%" },
          { name: "Higher Education", percent: 5, display: "5%" },
          { name: "Business Consulting", percent: 5, display: "5%" },
        ],
      },
      {
        label: "Company (LinkedIn)",
        items: [
          { name: "Zendesk", percent: 8, display: "8%" },
          { name: "PayPal", percent: 6, display: "6%" },
          { name: "University of Oregon", percent: 2, display: "2%" },
          { name: "Deloitte", percent: 0.5, display: "<1%" },
          { name: "Apple", percent: 0.5, display: "<1%" },
          { name: "Amazon", percent: 0.5, display: "<1%" },
        ],
      },
    ],
  },

  // TODO: edit to match what you actually sell
  offerings: [
    {
      icon: "video",
      title: "Sponsored video package",
      body: "A dedicated reel on Instagram, scripted and edited by me. Story-driven, built for the feed rather than read like an ad.",
    },
    {
      icon: "link",
      title: "Link in bio placement",
      body: "Your link in my Instagram and LinkedIn bios for one full week.",
    },
    {
      icon: "megaphone",
      title: "Paid ad usage",
      body: "Meta whitelisting. Run my content as paid ads from your brand's own account.",
    },
    {
      icon: "bolt",
      title: "Automated DM integration",
      body: "A ManyChat flow on Instagram that sends commenters straight to your product, landing page, or offer.",
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
    "602K views and 252K viewers on Instagram in the last 30 days.",
    "Audience concentrated in the SF Bay Area, Portland, and NYC. 19% work in software development.",
    "I only take partnerships for products I'd use myself.",
    "Scripting, filming, and editing handled end to end.",
    "Trusted by AI startups like Higgsfield AI and Devmaxx.",
    "Clear reporting on reach, engagement, and clicks after every campaign, straight from platform analytics.",
  ],
  faqLabel: "Questions brands ask",
  // TODO: confirm rates, turnaround, and exclusivity terms before sending to anyone
  faq: [
    {
      q: "What does a partnership cost?",
      a: "It depends on the deliverables and usage rights. Send me what you have in mind and I'll come back with a flat rate. No retainers, no hidden fees.",
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
    email: "drewmanley16@gmail.com",
  },
};

export const mediaKit = {
  eyebrow: "$ cat mediakit.md",
  headline: "Media kit",
  subhead:
    "Full audience numbers across every platform, plus the brands I've worked with. Figures refresh when I pitch. Ask if you need something more recent.",
};

/**
 * Email-gated resources. The real file link never lives here — it would ship
 * to the browser with the rest of this file. Each item names an env var
 * (`urlEnv`) that holds the link; only lib/resources.server.ts reads it.
 * Adding a resource = one entry here + one env var, locally and on Vercel.
 */
export const resources = {
  eyebrow: "$ ls resources/",
  headline: "Resources",
  subhead:
    "Everything I've put together, free. Enter your email once and every one of them unlocks.",
  indexLabel: "Available now",
  // Set expectations on the card, so the email box is never a surprise.
  indexGateHint: "Email required",
  gate: {
    label: "// locked",
    heading: "Enter your email to unlock it",
    support:
      "Type your email below and the doc opens. You'll also get digest.md, my weekly email on AI news and tools. Free, one a week, unsubscribe anytime.",
    placeholder: "you@example.com",
    button: "Unlock the doc →",
    pendingButton: "Unlocking...",
    error: "That didn't go through. Try again in a moment.",
    invalidEmail: "Enter a valid email address.",
  },
  unlocked: {
    label: "// unlocked",
    heading: "You're in",
    note: "Click below to open it. It stays unlocked on this device, so you can come back anytime.",
    button: "Open the doc →",
    newTabNote: "Opens in a new tab.",
  },
  backLabel: "← All resources",
  items: [
    {
      slug: "system-design",
      title: "30 Days of Learning System Design",
      // TODO: swap for your own words if you want a different pitch
      blurb:
        "My 30-day run at learning system design: what I studied each day, the resources worth your time, and the notes I took along the way.",
      format: "Google Doc",
      urlEnv: "RESOURCE_URL_SYSTEM_DESIGN",
    },
  ],
} as const;

export const footer = {
  wordmark: "digest.md",
  // Resources is deliberately not in the top nav — a fourth item overflows the
  // header on a narrow phone. Beacons links straight to /resources anyway.
  links: [{ href: "/resources", label: "Resources" }],
  copyright: "© 2026 digest.md. All rights reserved.",
};
