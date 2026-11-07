import formjoHeroImage from "../assets/case-study_formjo-hero.webp";
import koinSightHeroImage from "../assets/case-study_koin-sight_portfolio-dashboard.webp";
import startSearchHeroImage from "../assets/case-study_start-search_portfolio-dashboard.webp";
import raincityHeroImage from "../assets/case-study_raincity-boxing-hero.webp";

/**
 * Single source of truth for everything listed on /work (and the case study
 * cards on the home page). To add a project, append an object to `work`.
 *
 * Entry schema (all fields optional unless marked required):
 *   slug      string, required. Unique, kebab-case.
 *   type      string, required. One of the WORK_TYPES ids below.
 *   title     string, required.
 *   summary   string, required. One or two sentences.
 *   year      string, e.g. "2026".
 *   role      string, e.g. "Solo designer and developer".
 *   tags      string[].
 *   image     { src, alt }. Import the file at the top of this file. Side
 *             quest rows show it as a thumbnail; without one they show the
 *             title's initials, so add a screenshot where you can.
 *   href      string. Internal route, used by case studies ("/case-study/x").
 *   links     { live, repo, devpost }. External URLs; only present ones render.
 *   client    string. Client entries. May be anonymised ("Fintech startup").
 *   kind      string. Side quests: "Hackathon", "Side project", "Experiment"...
 *   event     string. Hackathons, e.g. the event name.
 *   result    string. Hackathons, e.g. "Finalist". Only state what is true.
 *   outcome   string. Client entries, what changed for the client.
 *   learned   string. One sentence on what you took away.
 *   tagline   string. Short mono label used on case study cards.
 *   home      boolean. Show on the home page "Selected work" cards (any type
 *             with an href and tagline).
 *
 * A type's section and filter chip appear automatically once it has an entry.
 */

export const WORK_TYPES = [
  { id: "case-study", label: "Case studies", tier: "featured" },
  { id: "client", label: "Client", tier: "standard" },
  { id: "side-quest", label: "Side quests", tier: "compact" },
];

export const work = [
  {
    slug: "formjo",
    type: "case-study",
    tagline: "Coach Training App",
    title: "Formjo",
    year: "2026",
    role: "Solo Full-Stack Developer & Designer",
    summary:
      "Coach Smarter. Train Better. Formjo is a platform for coaches to assign structured training, review athlete video submissions, and deliver personalised feedback. Built solo with React, Flask, and Postgres, from Figma wireframe to shipped product",
    tags: [
      "Coaching Platform",
      "Full-Stack Development",
      "Product Design",
      "UX Research",
      "Branding",
      "Solo Project",
    ],
    image: {
      src: formjoHeroImage,
      alt: "Formjo case study hero image",
    },
    href: "/case-study/formjo",
    home: true,
  },
  {
    slug: "koinsight",
    type: "case-study",
    tagline: "Crypto Portfolio Tracker",
    title: "KoinSight",
    year: "May 2026",
    role: "Frontend Developer, UX Engineer",
    summary:
      "A crypto portfolio tracker built with two teammates at General Assembly's Software Engineering Bootcamp. I was the frontend developer and UX engineer, building the landing page, dashboard, and component system in React and Three.js.",
    tags: [
      "Frontend Development",
      "UX Engineering",
      "Team Project",
      "Bootcamp Project",
    ],
    image: {
      src: koinSightHeroImage,
      alt: "KoinSight case study hero image",
    },
    href: "/case-study/koinsight",
    home: true,
  },
  {
    slug: "startsearch",
    type: "side-quest",
    kind: "Hackathon",
    event: "Build Club Go-to-Market Builders AI Build Lab",
    result: "SMU Prize: Best Startup Ecosystem Build",
    tagline: "AI Agent Dashboard",
    title: "StartSearch",
    year: "2026",
    role: "UX Research & Design, Lead Builder (Manus AI)",
    summary:
      "Alumni Intelligence tracks every SMU IIE alumni startup from the outside, no founder opt-in required. Built with teammates during a hackathon using Manus AI, EXA, and Mem0 for persistent agent memory.",
    tags: ["AI Agents", "Product Design", "Team Project"],
    image: {
      src: startSearchHeroImage,
      alt: "StartSearch case study hero image",
    },
    href: "/case-study/startsearch",
    links: { live: "https://smiietrack-jfeh6whh.manus.space/" },
    home: true,
  },
  {
    slug: "raincityboxing",
    type: "client",
    tagline: "Client Website",
    title: "Raincity Boxing",
    summary:
      "A website for a Richmond, BC boxing gym and wellness studio, built to turn curious visitors into trial sign-ups with clear pricing, real member stories, and a fast path to booking.",
    year: "2026",
    role: "Solo Designer & Developer",
    tags: [
      "Web Design",
      "Branding",
      "UI/UX",
      "Local Business",
      "Solo Project",
    ],
    image: {
      src: raincityHeroImage,
      alt: "Raincity Boxing website hero",
    },
    href: "/case-study/raincityboxing",
    links: { live: "https://www.raincityboxing.com/" },
    home: false,
  },
];
