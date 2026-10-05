/**
 * Every editable string, number, and URL on the site lives here.
 * Anything marked TODO is a placeholder — grep "TODO" to find what's left.
 */

// No "Home" entry: the avatar + wordmark on the left already goes home, and a
// fourth item overflows the header at 375px.
export const nav = [
  { href: "/newsletter", label: "Newsletter" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/resources", label: "Resources" },
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

export const profile = {
  name: "Drew",
  wordmark: "drew",
  // Square crop of drew_headshot.JPG, optimized. Regenerate if the photo changes.
  avatarSrc: "/avatar.jpg" as string | null,
  monogram: "D",
  navCta: "Join free",
};

export const home = {
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
  // Anyone who read to the end of the letter is the warmest visitor on the
  // site, and the only form was back at the top.
  letterCta: {
    heading: "Sound useful?",
    body: "One email a week, about four minutes to read. Free, and you can leave whenever.",
    button: "Join the newsletter →",
  },
};

export const newsletter = {
  headline: "digest.md",
  subhead: "Weekly AI news, new tools, and what I think about them.",
  byline: "Drew · CS @ University of Oregon · SWE at PayPal",
  // Count-free on purpose. Add a number here once it flatters you (~500+);
  // below that, a real number reads worse than no number.
  subscriberCount: "Free, one email a week, unsubscribe anytime.",
  // Pulled live from beehiiv; see lib/beehiiv.server.ts.
  latestIssueLabel: "Latest issue",
  latestIssueCta: "Read it →",
  // Our own form now; the beehiiv iframe is gone.
  form: {
    placeholder: "you@example.com",
    button: "Join free",
    pendingButton: "Joining...",
    error: "That didn't go through. Try again in a moment.",
    invalidEmail: "Enter a valid email address.",
    doneTitle: "You're in.",
    doneBody:
      "Check your inbox for a hello from me. The next issue lands this week.",
  },
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
  // aggregate analytics export. Refresh both before pitching; the window label
  // lives on each block.
  profile: {
    categories: ["AI & Tech", "Developer Tools", "Education"],
    totalFollowersLabel: "Total followers",
    // Instagram 5,733 + LinkedIn 2,895.
    totalFollowers: "8,628",
    platforms: [
      { icon: "instagram", label: "Instagram", value: "5,733" },
      { icon: "linkedin", label: "LinkedIn", value: "2,895" },
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
    { name: "Jobright", logo: "/brands/jobright.jpeg" as string | null },
    { name: "Fish Audio", logo: "/brands/fish-audio.jpeg" as string | null },
  ],

  platformStats: [
    {
      name: "Instagram",
      icon: "instagram",
      handle: "@drewisliving",
      note: "Last 30 days",
      metrics: [
        { label: "Followers", value: "5,733" },
        { label: "Views", value: "1,032,857" },
        { label: "Viewers", value: "409,551" },
        { label: "Interactions", value: "100,047" },
        { label: "Accounts engaged", value: "52,852" },
        { label: "Profile activity", value: "14,567" },
        { label: "Profile visits", value: "12,947" },
        { label: "External link taps", value: "1,620" },
      ],
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      handle: "drewmanley",
      note: "Last 90 days · to 3 Sep 2026",
      metrics: [
        { label: "Followers", value: "2,895" },
        { label: "Impressions", value: "319,865" },
        { label: "Members reached", value: "152,387" },
        { label: "Out-of-network reach", value: "92%" },
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
    "864K views and 365K viewers on Instagram in the last 30 days.",
    "Audience concentrated in the SF Bay Area, Portland, and NYC. 19% work in software development.",
    "I only take partnerships for products I'd use myself.",
    "Scripting, filming, and editing handled end to end.",
    "Trusted by teams like Higgsfield AI, Devmaxx, Jobright, and Fish Audio.",
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
  eyebrow: "media kit",
  headline:
    "AI, CS, and tech-career content for students and early-career engineers.",
  subhead:
    "I run @drewisliving, where I make short-form videos about AI, CS, software engineering, tech careers, recruiting, and student opportunities. The account is at 5.7K+ followers and did over 1M views in the last 30 days.",
  updatedLabel: "Updated September 2026",
  primaryCta: "Email Drew",
  secondaryCta: "Partnership options",
  snapshotLabel: "Snapshot",
  snapshot: [
    { label: "Instagram followers", value: "5.7K+" },
    { label: "LinkedIn impressions", value: "319,865" },
    { label: "30-day views", value: "1,032,857" },
    { label: "30-day interactions", value: "100,047" },
    { label: "Accounts engaged", value: "52,852" },
    { label: "External link taps", value: "1,620" },
  ],
  audienceLabel: "Audience",
  audienceIntro:
    "The audience is made up of students, early-career engineers, AI builders, and technical job seekers who are actively trying tools, applying to roles, and building projects.",
  audienceHighlights: [
    "87.1% of Instagram followers are 18-34.",
    "40.0% United States and 23.4% India on Instagram.",
    "LinkedIn audience clusters in the SF Bay Area, Eugene/Portland, NYC, LA, and Austin.",
    "Top LinkedIn industry is software development, followed by technology and internet.",
  ],
  sponsorFitLabel: "Best-fit sponsors",
  sponsorFit: [
    "AI developer tools",
    "Coding platforms",
    "Interview prep and career platforms",
    "Developer infrastructure and APIs",
    "Student productivity and education tools",
    "AI hardware and wearables",
  ],
  contentProofLabel: "Recent content proof",
  contentProof: [
    {
      title: "SWE prep resource Reel",
      metric: "168K views",
      videoSrc: null as string | null,
      posterSrc: null as string | null,
      href: null as string | null,
      detail:
        "A direct student pain-point hook tied to a practical resource people could comment for.",
    },
    {
      title: "Student career advice Reel",
      metric: "114K views",
      videoSrc: null as string | null,
      posterSrc: null as string | null,
      href: null as string | null,
      detail:
        "Advice-first format that translated a recruiting problem into a simple next step.",
    },
    {
      title: "Technical interview Reel",
      metric: "67.4K views",
      videoSrc: null as string | null,
      posterSrc: null as string | null,
      href: null as string | null,
      detail:
        "Interview prep framed around what candidates should do differently right now.",
    },
    {
      title: "Internship recruiting Reel",
      metric: "40.7K views",
      videoSrc: null as string | null,
      posterSrc: null as string | null,
      href: null as string | null,
      detail:
        "Timely internship-season content built for saves, shares, and comments.",
    },
  ],
  formatsLabel: "Partnership formats",
  processLabel: "Working process",
  process: [
    "Brief alignment and campaign goal",
    "Script approval before filming",
    "Filming and editing by Drew",
    "One revision round before posting",
    "Post-campaign analytics report",
  ],
  ratesNote:
    "Campaigns are quoted based on deliverables, timeline, usage rights, exclusivity, revision expectations, and reporting needs.",
  contactLabel: "Contact",
  contactHeadline: "Want to put your product in front of technical students?",
  contactBody:
    "Send over what you're building, the campaign window, target deliverables, usage needs, and whether there is creator budget available. I'll reply with a scoped partnership option.",
};

/**
 * Email-gated resources. The real file link never lives here — it would ship
 * to the browser with the rest of this file. Each item names an env var
 * (`urlEnv`) that holds the link; only lib/resources.server.ts reads it.
 * Adding a resource = one entry here + one env var, locally and on Vercel.
 */
export const resources = {
  headline: "Resources",
  subhead:
    "Everything I've put together, free. Enter your email once and every one of them unlocks.",
  indexLabel: "Available now",
  gate: {
    label: "// locked",
    heading: "Enter your email to unlock it",
    // {noun} is filled from each item's `noun` field.
    support:
      "Type your email below and the {noun} opens. You'll also get digest.md, my weekly email on AI news and tools. Free, one a week, unsubscribe anytime.",
    placeholder: "you@example.com",
    button: "Unlock the {noun} →",
    pendingButton: "Unlocking...",
    error: "That didn't go through. Try again in a moment.",
    invalidEmail: "Enter a valid email address.",
  },
  unlocked: {
    label: "// unlocked",
    heading: "You're in",
    note: "Click below to open it. It stays unlocked on this device, so you can come back anytime.",
    // Used when an item bundles several links instead of one.
    multiNote:
      "All of it is yours. Everything stays unlocked on this device, so you can come back anytime.",
    button: "Open the {noun} →",
    newTabNote: "Opens in a new tab.",
  },
  backLabel: "← All resources",
  // Every item carries a `links` array. One link renders as a single button;
  // several render as a list, which is how one card can hold a whole guide.
  items: [
    {
      slug: "projects-by-major",
      icon: "tracks",
      title: "Projects by major",
      eyebrow: "What to build based on what you're studying",
      noun: "project list",
      blurb:
        "Three projects each for econ, AI, CS, data science, and security, with a one-line pitch and the tech stack to build it with.",
      format: "15 projects",
      links: [],
      tracks: {
        intro:
          "The best project is one that sounds like your major. A recruiter reading an econ resume wants to see data and markets; a security team wants to see you've broken something on purpose. Pick the one that excites you most and ship it end to end.",
        items: [
          {
            major: "Economics",
            projects: [
              {
                title: "Recession probability dashboard",
                pitch:
                  "Pull the yield curve, unemployment, and jobless claims from FRED, fit a probit model, and chart the odds of a recession over the next 12 months, updated weekly.",
                stack: "Python, pandas, statsmodels, FRED API, Streamlit",
              },
              {
                title: "Fed speech sentiment tracker",
                pitch:
                  "Score every FOMC statement and Fed speech as hawkish or dovish with an LLM, then test whether the score moves 2-year Treasury yields on release day.",
                stack: "Python, BeautifulSoup, Claude or OpenAI API, pandas, Plotly",
              },
              {
                title: "Rent vs buy calculator for real cities",
                pitch:
                  "Use Zillow and Census data to show, city by city, how many years it takes for buying to beat renting, with sliders for mortgage rates and appreciation.",
                stack: "Next.js, TypeScript, Postgres, Zillow Research data, Recharts",
              },
            ],
          },
          {
            major: "AI",
            projects: [
              {
                title: "Chat with your syllabus",
                pitch:
                  "Upload course PDFs and lecture notes, then ask questions and get answers that cite the exact page they came from. Grade it with an eval set of real exam questions.",
                stack: "Next.js, Vercel AI SDK, Claude or OpenAI, Postgres with pgvector",
              },
              {
                title: "Agent that applies to internships",
                pitch:
                  "An agent that reads a job posting, tailors your resume bullets to it, drafts the cover note, and fills the form, pausing for your approval before submitting.",
                stack: "Python or TypeScript, Claude tool calling, Playwright, SQLite",
              },
              {
                title: "Fine-tuned small model vs a frontier model",
                pitch:
                  "Fine-tune a small open model on one narrow task (like classifying support tickets), then publish a cost, speed, and accuracy comparison against a frontier API.",
                stack: "Python, Hugging Face Transformers, LoRA, Modal or Colab, Weights & Biases",
              },
            ],
          },
          {
            major: "Computer Science",
            projects: [
              {
                title: "Build your own key-value database",
                pitch:
                  "A persistent key-value store with a write-ahead log, crash recovery, and a TCP server that speaks the Redis protocol, so real Redis clients can talk to it.",
                stack: "Go or Rust, TCP sockets, benchmarks with redis-benchmark",
              },
              {
                title: "Real-time collaborative editor",
                pitch:
                  "Google Docs-style editing where several people type in the same doc at once without overwriting each other, using CRDTs to merge changes.",
                stack: "TypeScript, Yjs, WebSockets, Next.js, Redis",
              },
              {
                title: "Mini container runtime",
                pitch:
                  "Run a process in its own isolated filesystem, process tree, and network using Linux namespaces and cgroups. A small Docker you actually understand.",
                stack: "Go or C, Linux namespaces, cgroups, chroot",
              },
            ],
          },
          {
            major: "Data Science",
            projects: [
              {
                title: "Spotify listening habits analysis",
                pitch:
                  "Request your full Spotify data export, cluster your listening into moods by time of day and season, and build a model that predicts what you'll skip.",
                stack: "Python, pandas, scikit-learn, Spotify Web API, Plotly",
              },
              {
                title: "NYC rideshare demand forecaster",
                pitch:
                  "Forecast hourly pickups by neighborhood from the public NYC taxi and rideshare trip data, factoring in weather and holidays, and map the predictions.",
                stack: "Python, DuckDB, LightGBM, Prophet, Kepler.gl or Streamlit",
              },
              {
                title: "A/B test analyzer",
                pitch:
                  "Upload experiment results and get the lift, confidence interval, required sample size, and a plain-English verdict, with both frequentist and Bayesian views.",
                stack: "Python, SciPy, PyMC, FastAPI, Next.js",
              },
            ],
          },
          {
            major: "Security",
            projects: [
              {
                title: "Home network intrusion detector",
                pitch:
                  "Capture traffic on your own network, learn what normal looks like, and flag anomalies like port scans or a device phoning home somewhere new.",
                stack: "Python, Scapy, Zeek, scikit-learn (Isolation Forest), Grafana",
              },
              {
                title: "Phishing URL classifier extension",
                pitch:
                  "A browser extension that scores links before you click, using URL features, domain age, and certificate data, and explains why it flagged each one.",
                stack: "JavaScript, Chrome Extensions API, Python, XGBoost, FastAPI",
              },
              {
                title: "Vulnerable app plus the writeup",
                pitch:
                  "Build a small web app with deliberate SQL injection, XSS, and broken auth, exploit each one, then patch it and publish the before and after as a writeup.",
                stack: "Node.js, Express, SQLite, Burp Suite, OWASP ZAP",
              },
            ],
          },
        ],
      },
    },
    {
      slug: "premier-league-projects",
      icon: "pitch",
      title: "Premier League coding projects",
      eyebrow: "5 resume-worthy projects for football fans",
      noun: "project list",
      blurb:
        "The three from the video plus two more, each written out with what to build, the tech stack, and the extra step that makes it stand out in an interview.",
      format: "5 projects",
      links: [],
      projects: {
        intro:
          "Pick one and actually ship it. A deployed project with real users (even ten mates in your FPL league) beats five half-finished repos. Each one below lists where to get the data, what to build, a stack that fits, and the bonus that turns it into a good interview story.",
        items: [
          {
            title: "Premier League match predictor",
            pitch:
              "Predict win, draw, or loss for every upcoming fixture, then put it online so people can make their own picks against your model.",
            build: [
              "Pull historical results and betting odds from football-data.co.uk, and team xG from Understat or FBref.",
              "Engineer features per fixture: rolling form over the last 5 and 10 games, home and away splits, xG for and against, rest days, and injured or suspended starters.",
              "Train a baseline (logistic regression) first, then a gradient-boosted model, and judge both on log loss and accuracy against the bookmakers' implied probabilities.",
              "Serve predictions through an API and build a site where users log in, lock in picks before kickoff, and see a leaderboard of humans vs the model.",
            ],
            stack: [
              { label: "Data", value: "Python, pandas, football-data.co.uk, Understat" },
              { label: "Model", value: "scikit-learn, XGBoost" },
              { label: "Backend", value: "FastAPI, Postgres" },
              { label: "Frontend", value: "Next.js, deployed on Vercel" },
              { label: "Jobs", value: "Weekly cron to pull new results and retrain" },
            ],
            bonus:
              "Track how well the model is calibrated over the season and show it publicly. \"My model beat 70% of users\" is a much better interview line than \"I got 55% accuracy\".",
          },
          {
            title: "Fantasy Premier League AI assistant",
            pitch:
              "Plug in your FPL team ID and get transfer, captain, and lineup recommendations that fit your budget, with an AI agent explaining every call.",
            build: [
              "Use the public FPL API (bootstrap-static for players and prices, fixtures for difficulty, entry/{id} for a user's squad).",
              "Build an expected points model per player per gameweek from form, minutes, fixture difficulty, and xG and xA.",
              "Pick the best XI and transfers with an optimizer that respects the real rules: budget, 3 players per club, formation limits, and the -4 hit for extra transfers.",
              "Add an LLM agent with tools (get squad, get projections, run optimizer) that explains its reasoning and answers follow-ups like \"should I wildcard?\".",
            ],
            stack: [
              { label: "Data", value: "FPL API, Python, pandas" },
              { label: "Optimizer", value: "PuLP (linear programming)" },
              { label: "AI", value: "Claude or OpenAI with tool calling, Vercel AI SDK" },
              { label: "App", value: "Next.js, Postgres for caching gameweek data" },
            ],
            bonus:
              "Backtest it: replay last season week by week and report the total points your assistant would have scored. That one number carries the whole project.",
          },
          {
            title: "Live Premier League analytics dashboard",
            pitch:
              "Watch possession, shots, xG, player stats, momentum, and the live league table update while games are actually being played.",
            build: [
              "Poll a live football API (API-Football or football-data.org both have free tiers) on a schedule during match windows.",
              "Normalize events into your own schema and store them, so you only hit the API once no matter how many people are watching.",
              "Push updates to the browser over WebSockets or Server-Sent Events, and recompute the \"as it stands\" table on every goal.",
              "Chart xG timelines and a momentum graph per match, plus a player view with live ratings.",
            ],
            stack: [
              { label: "Ingestion", value: "Node or Python worker, Redis for pub/sub" },
              { label: "Storage", value: "Postgres (or TimescaleDB for match events)" },
              { label: "Realtime", value: "WebSockets or Server-Sent Events" },
              { label: "Frontend", value: "Next.js, Recharts or D3" },
            ],
            bonus:
              "Send push notifications for goals, and generate a post-match summary with an LLM straight from the stored event data.",
          },
          {
            title: "Transfer scout: find the cheaper version of any player",
            pitch:
              "Type in a player, like \"Declan Rice\", and get back statistically similar players who cost a fraction of the price, with a breakdown of exactly why they match.",
            build: [
              "Scrape per-90 stats for players across Europe's top leagues from FBref, and market values from Transfermarkt.",
              "Build a feature vector per player by position: progressive passes, tackles, xG, xA, pressures, and so on. Normalize everything within each position group.",
              "Find similar players with cosine similarity or k-nearest neighbors, then filter by age, league, and max transfer value.",
              "Show results as radar charts that compare the target against each suggestion, plus a short AI-written scouting report for each player.",
            ],
            stack: [
              { label: "Data", value: "Python, BeautifulSoup or soccerdata, pandas" },
              { label: "Similarity", value: "scikit-learn (PCA plus nearest neighbors) or Postgres with pgvector" },
              { label: "Backend", value: "FastAPI" },
              { label: "Frontend", value: "Next.js, Recharts radar charts" },
            ],
            bonus:
              "Validate it against reality. Look up players who actually got big moves last summer and check whether your model had them in the top 10 a year earlier.",
          },
          {
            title: "Ask the Prem: a natural-language stats agent",
            pitch:
              "A chat interface where you can ask things like \"which team has scored the most goals after the 80th minute this season?\" and get a correct answer with a chart.",
            build: [
              "Load a few seasons of match and event data into Postgres (StatsBomb open data, FBref, or your data from project 3).",
              "Give an LLM your schema and a tool that runs SQL through a read-only database user, so it can query but never modify or drop anything.",
              "Have it pick a chart type and return the data, then render the chart next to the written answer and show the SQL it ran.",
              "Write an eval set of around 50 questions with known answers, and track accuracy every time you change the prompt or model.",
            ],
            stack: [
              { label: "Data", value: "Postgres, StatsBomb open data or FBref" },
              { label: "AI", value: "Claude or OpenAI with tool calling, Vercel AI SDK" },
              { label: "App", value: "Next.js with streaming responses" },
              { label: "Charts", value: "Recharts" },
              { label: "Evals", value: "A simple test script, or Braintrust or promptfoo" },
            ],
            bonus:
              "The eval set is the real resume line. \"I built an eval suite and took text-to-SQL accuracy from 62% to 91%\" is exactly what AI teams hire for right now.",
          },
        ],
      },
    },
    {
      slug: "system-design",
      icon: "layers",
      title: "30 Days of Learning System Design",
      // Sits above the title on the resource page, in place of the format tag.
      eyebrow: "All the resources I used during my 30 day series",
      noun: "doc",
      // TODO: swap for your own words if you want a different pitch
      blurb:
        "Every link, video, and course I worked through, in the order I hit them, plus the notes I took along the way.",
      format: "Google Doc",
      links: [
        {
          label: "30 Days of Learning System Design",
          note: "",
          urlEnv: "RESOURCE_URL_SYSTEM_DESIGN",
        },
      ],
    },
    {
      slug: "leetcode-guide",
      icon: "route",
      title: "LeetCode interview guide",
      eyebrow: "How I'd actually prep for the algorithms round",
      noun: "guide",
      blurb:
        "Three things, in order: learn the patterns, watch the data structures move, then go get the theory. Everything I would hand someone starting from zero.",
      format: "3 links",
      links: [
        {
          label: "NeetCode",
          note: "Start here. A LeetCode roadmap grouped by pattern, with a video walkthrough for every problem.",
          urlEnv: "RESOURCE_URL_NEETCODE",
        },
        {
          label: "VisuAlgo",
          note: "Animated data structures and algorithms, for the intuition that will not click from reading code.",
          urlEnv: "RESOURCE_URL_VISUALGO",
        },
        {
          label: "MIT 6.046J",
          note: "Full lectures, notes, and problem sets, free. The theory under the patterns.",
          urlEnv: "RESOURCE_URL_MIT_ALGORITHMS",
        },
      ],
    },
    {
      slug: "tech-interview-prep",
      icon: "interview",
      title: "Tech interview prep",
      eyebrow: "What I read before a loop",
      noun: "guide",
      blurb:
        "How the loop actually works, what to drill, and what specific companies ask. The three I keep open in tabs during prep season.",
      format: "3 links",
      links: [
        {
          label: "Hello Interview",
          note: "Writeups on how interviews are really scored, from people who ran the loops at big tech.",
          urlEnv: "RESOURCE_URL_HELLO_INTERVIEW",
        },
        {
          label: "NeetCode",
          note: "The pattern roadmap for the coding round, with a video walkthrough for every problem.",
          urlEnv: "RESOURCE_URL_NEETCODE",
        },
        {
          label: "Tech OA & Interview Questions",
          note: "Real online assessment questions sorted by company, for when you know where you are applying.",
          urlEnv: "RESOURCE_URL_TECH_OA",
        },
      ],
    },
    {
      slug: "swe-interview-stack",
      icon: "interview",
      title: "SWE interview stack",
      eyebrow: "The three resources I would use first",
      noun: "guide",
      blurb:
        "Most SWE loops come down to coding, system design, and behavioral. These are the three resources I would start with before overcomplicating prep.",
      format: "3 links",
      links: [
        {
          label: "Hello Interview",
          note: "System design explained by ex-Meta engineers, with the concepts and expectations interviewers actually care about.",
          urlEnv: "RESOURCE_URL_HELLO_INTERVIEW",
        },
        {
          label: "NeetCode",
          note: "The clearest roadmap for LeetCode patterns, with walkthroughs for hundreds of coding interview problems.",
          urlEnv: "RESOURCE_URL_NEETCODE",
        },
        {
          label: "Austin McDonald behavioral prep",
          note: "Behavioral interview advice from a former Meta hiring committee chair on what interviewers are looking for.",
          urlEnv: "RESOURCE_URL_BEHAVIORAL_INTERVIEW",
        },
      ],
    },
    {
      slug: "tech-oa-questions",
      icon: "terminal",
      title: "Tech OA & Interview Questions",
      eyebrow: "The question bank I point people to",
      noun: "repo",
      // TODO: swap for your own words if you want a different pitch
      blurb:
        "Online assessment and interview questions from real company loops, sorted by company, so you can practice against what actually gets asked.",
      format: "GitHub repo",
      links: [
        {
          label: "Tech OA & Interview Questions",
          note: "",
          urlEnv: "RESOURCE_URL_TECH_OA",
        },
      ],
    },
    {
      slug: "internship-email-list",
      icon: "inbox",
      title: "Internship email list",
      eyebrow: "New internship postings, straight to your inbox",
      noun: "list",
      // TODO: swap for your own words if you want a different pitch
      blurb:
        "Sign up once and new software internship postings land in your email as they go up, instead of you refreshing job boards.",
      format: "Website",
      links: [
        {
          label: "Internship email list",
          note: "",
          urlEnv: "RESOURCE_URL_INTERNSHIP_EMAIL_LIST",
        },
      ],
    },
    {
      slug: "internship-outreach-template",
      icon: "inbox",
      title: "Internship outreach template",
      eyebrow: "A cleaner cold message for finding roles before they post",
      noun: "template",
      blurb:
        "A copy-ready DM/email framework for reaching recruiters, founders, and employees without sounding stiff or desperate.",
      format: "Template",
      links: [],
      document: {
        intro:
          "Use this when someone posts that their team is hiring, when you find a recruiter, or when you want a warm pointer into a company.",
        template: {
          title: "Template",
          body: [
            "Hi [Name],",
            "",
            "I saw [specific signal: your post / the team’s work / an open role] and wanted to reach out. I’m a [year/major/background] interested in [specific area], and I’ve been building [short proof point].",
            "",
            "I was wondering if there are any upcoming internship opportunities on [team/company], or if there’s someone you’d recommend I connect with to learn more.",
            "",
            "Either way, I’d really appreciate any direction. Thanks!",
            "",
            "[Your name]",
          ],
        },
        examples: [
          {
            title: "Zendesk internships",
            body: [
              "Hi [Name],",
              "",
              "I saw your message about Zendesk hiring and wanted to reach out. I’m currently a college student passionate about AI and building products that make technical work easier.",
              "",
              "I was wondering if there might be any upcoming internship opportunities, or if you could point me toward someone on the team I could connect with to learn more.",
              "",
              "Either way, I’d appreciate any direction. Thanks!",
              "",
              "Drew",
            ],
          },
          {
            title: "Recruiter follow-up",
            body: [
              "Hi [Name],",
              "",
              "I came across your profile while looking into internship opportunities at [Company]. I’m a CS student focused on AI and full-stack engineering, and I’ve been building projects around [specific project/area].",
              "",
              "Are there any upcoming software engineering internship roles I should keep an eye on, or is there a better person on the recruiting team to reach out to?",
              "",
              "Thanks for any help.",
              "",
              "[Your name]",
            ],
          },
          {
            title: "Engineer referral ask",
            body: [
              "Hi [Name],",
              "",
              "I saw your work on [team/product/project] at [Company] and thought it looked really interesting. I’m a [year] studying CS and I’ve been building [short relevant project], so your team stood out to me.",
              "",
              "If internship roles are opening soon, would you be open to pointing me toward the right application or someone I could talk to about the team?",
              "",
              "Really appreciate it.",
              "",
              "[Your name]",
            ],
          },
        ],
      },
    },
    {
      slug: "internship-list",
      icon: "checklist",
      title: "Internship list",
      eyebrow: "The internship board I actually check",
      noun: "list",
      // TODO: swap for your own words if you want a different pitch
      blurb:
        "A running list of software internships with application links, updated as roles open and close through the season.",
      format: "GitHub repo",
      links: [
        {
          label: "Internship list",
          note: "",
          urlEnv: "RESOURCE_URL_INTERNSHIP_LIST",
        },
      ],
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
