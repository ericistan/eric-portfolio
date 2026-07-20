import React from "react";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiThreedotjs,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import {
  Buildings,
  CalendarBlank,
  IdentificationBadge,
  Globe,
  ChartLineUp,
  ArrowsLeftRight,
  Coins,
  Sparkle,
  Cube,
  Lock,
} from "@phosphor-icons/react";
import Navbar from "../../components/Navbar.jsx";
import CaseStudyLayout from "../../components/CaseStudyLayout.jsx";
import BentoHighlights from "../../components/BentoHighlights.jsx";
import Footer from "../../components/Footer.jsx";

const header = {
  heading: "KoinSight",
  description:
    "Monitor your holdings, log every transaction, and understand your performance, all in one place. KoinSight is a crypto portfolio tracker built by a team of three at General Assembly's Software Engineering Bootcamp, in under two weeks. I was the frontend developer and UX engineer.",
  tags: [
    { label: "Frontend Development" },
    { label: "UX Engineering" },
    { label: "Team Project" },
    { label: "Bootcamp Project" },
  ],
  details: [
    {
      label: "Client",
      description: "Team Project (GA Bootcamp)",
      icon: <Buildings className="size-5" />,
    },
    {
      label: "Date",
      description: "May 2026",
      icon: <CalendarBlank className="size-5" />,
    },
    {
      label: "Role",
      description: "Frontend Developer, UX Engineer",
      icon: <IdentificationBadge className="size-5" />,
    },
    {
      label: "Website",
      description: "koinsight.netlify.app",
      icon: <Globe className="size-5" />,
      url: "https://koinsight.netlify.app/",
    },
  ],
  image: {
    src: "https://placehold.co/1600x900?text=KoinSight+Hero",
    alt: "KoinSight hero placeholder image",
  },
};

const techStack = [
  { label: "React", icon: <SiReact className="size-10" style={{ color: "#61DAFB" }} /> },
  { label: "Vite", icon: <SiVite className="size-10" style={{ color: "#646CFF" }} /> },
  {
    label: "Tailwind",
    icon: <SiTailwindcss className="size-10" style={{ color: "#38BDF8" }} />,
  },
  {
    label: "Three.js",
    icon: <SiThreedotjs className="size-10" style={{ color: "#FFFFFF" }} />,
  },
  { label: "Node.js", icon: <SiNodedotjs className="size-10" style={{ color: "#3C873A" }} /> },
  { label: "MongoDB", icon: <SiMongodb className="size-10" style={{ color: "#47A248" }} /> },
];

const resultsItems = [
  {
    icon: <ChartLineUp className="size-6" />,
    title: "Real-Time Portfolio Tracking",
    description:
      "Total value and asset allocation visualized with Recharts, auto-refreshing every 5 minutes so the dashboard stays current without a manual reload.",
  },
  {
    icon: <ArrowsLeftRight className="size-6" />,
    title: "Transaction Logging",
    description:
      "Full buy/sell/transfer CRUD with live-computed totals, editable history, and cost basis tied to every asset.",
  },
  {
    icon: <Coins className="size-6" />,
    title: "Live Market Data",
    description:
      "Prices and market data for 250+ cryptocurrencies pulled from CoinGecko, with a live scrolling ticker on the landing page.",
  },
  {
    icon: <Sparkle className="size-6" />,
    title: "Custom Text Reveal Animation",
    description:
      "A hand-built matrix-style decrypt effect for hero text and stat numbers, with hover, click, and scroll-triggered reveal modes.",
  },
  {
    icon: <Cube className="size-6" />,
    title: "Immersive Landing Page",
    description:
      "A raw Three.js and GLSL shader background of animated, mouse-reactive rings, with WebGL-capability detection and a graceful fallback.",
  },
  {
    icon: <Lock className="size-6" />,
    title: "Secure Authentication",
    description:
      "JWT-based sign-up and login with bcrypt-hashed passwords, protecting every user's holdings and transaction history.",
  },
];

const sections = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <p>
          KoinSight is a full-stack crypto portfolio tracker I built with two
          teammates, Lincoln and Kenneth, as our capstone project at General
          Assembly's Software Engineering Bootcamp, shipped in under two
          weeks. I was the frontend developer and UX engineer: the landing
          page, the portfolio dashboard, the component system, and the UI
          details all ran through me, while Lincoln architected the database
          schema, REST API, and CoinGecko integration, and Kenneth built the
          authentication system and transaction flow end-to-end.
        </p>
        <h3>About KoinSight</h3>
        <p>
          KoinSight lets crypto investors monitor their holdings, log every
          transaction, and understand their performance, all in one place,
          instead of juggling spreadsheets or a single exchange's dashboard.
          Core features include:
        </p>
        <ul>
          <li>
            <strong>JWT Authentication</strong>: secure sign-up and login
            with bcrypt-hashed passwords.
          </li>
          <li>
            <strong>Transaction Management</strong>: full CRUD for buy, sell,
            and transfer transactions.
          </li>
          <li>
            <strong>Real-Time Portfolio Tracking</strong>: live holdings and
            performance visualized with Recharts.
          </li>
          <li>
            <strong>Live Market Data</strong>: current prices and history for
            250+ cryptocurrencies, synced from the CoinGecko API.
          </li>
        </ul>
        <img
          src="https://placehold.co/800x500?text=KoinSight"
          alt="KoinSight placeholder image"
        />
        <p className="text-sm italic">
          * Placeholder caption: swap in a real dashboard screenshot here.
        </p>
        <h3>Problem</h3>
        <p>
          Most crypto investors track their holdings across multiple
          exchanges and wallets, with no single source of truth for what
          they actually own or how it's performing. Exchange dashboards only
          show one account at a time, and spreadsheets don't update with
          live prices. KoinSight was built to solve that: one place to log
          every transaction and see real portfolio value and performance,
          synced against live market data.
        </p>
      </>
    ),
  },
  {
    id: "design",
    label: "Design",
    content: (
      <p>
        The visual language is a dark glassmorphism look, translucent white
        panels, backdrop blur, and subtle borders, paired with a deliberate
        typography split: a clean sans body font against a bold, techy
        display face on every heading. Green and red carry all the profit
        and loss meaning throughout the dashboard. On the landing page, that
        restraint gives way to two custom effects I built specifically to
        make the first impression memorable: a matrix-style text reveal on
        the hero copy and stat numbers, and an ambient, mouse-reactive ring
        animation rendered with a hand-written shader behind the whole page.
      </p>
    ),
  },
  {
    id: "build",
    label: "Build",
    content: (
      <>
        <p>
          My scope was the frontend end-to-end: the React/Vite/Tailwind
          build, the landing page, the portfolio dashboard, and the
          component system that ties them together. A few of the decisions
          behind that:
        </p>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-primary/40">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-6">
            {techStack.map((tech) => (
              <div key={tech.label} className="flex flex-col items-center gap-2">
                {tech.icon}
                <span className="text-sm text-text-primary/70">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

        <h3>Frontend Architecture</h3>
        <ul>
          <li>
            <strong>A hand-built shader background, not a stock effect.</strong>{" "}
            The landing page's ambient ring animation is raw Three.js and a
            custom GLSL fragment shader, gated behind a WebGL capability
            check so it degrades gracefully instead of breaking on
            unsupported devices.
          </li>
          <li>
            <strong>Polling over websockets.</strong> The portfolio chart
            refreshes on a 5-minute interval instead of a live socket
            connection, matching how the backend itself caches CoinGecko
            data on a schedule rather than proxying live requests.
          </li>
          <li>
            <strong>Fixing Lenis against a modal's own scroll.</strong> Our
            global smooth-scroll library was hijacking scrolling inside the
            coin-picker modal, solved by explicitly opting that modal out
            with a data attribute rather than disabling smooth scroll
            site-wide.
          </li>
        </ul>

        <h3>Feature Spotlight: Custom Text Reveal Animation</h3>
        <p>
          The hero heading, section titles, and live stat numbers all run
          through a text-reveal component I built from scratch, a
          matrix-style decrypt effect that can trigger on hover, on click,
          or on scroll into view, and can reveal sequentially or all at
          once, from the start, end, or center of the string. It's one
          component reused everywhere text needs to feel alive, not a
          one-off animation.
        </p>

        <h3>What I'd Do Differently</h3>
        <p>Given the two-week timeline, a few things worth naming honestly:</p>
        <ul>
          <li>
            <strong>A loading state that never loads.</strong> On the main
            portfolio view, the loading flag is only ever set to false, so
            the "Loading..." branch is dead code. Data just pops in once it
            arrives, no spinner, no skeleton.
          </li>
          <li>
            <strong>Status colors, defined four times.</strong> The
            green/red profit-and-loss color logic is copy-pasted across
            four different components instead of pulled into one shared
            constant.
          </li>
          <li>
            <strong>The landing page promises a Watchlist we didn't ship.</strong>{" "}
            It's listed as a feature in the marketing copy, but there's no
            watchlist route or component behind it yet, a gap between the
            pitch and what's actually built.
          </li>
          <li>
            <strong>No responsive polish on the dashboard.</strong> The
            landing page is carefully responsive; the portfolio tables and
            charts are still fixed-width and don't hold up well on small
            screens.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "Outcomes",
    label: "Outcomes",
    content: (
      <div className="flex justify-center">
        <BentoHighlights items={resultsItems} />
      </div>
    ),
  },
];

const relatedProjects = {
  tagline: "Portfolio",
  heading: "More case studies",
  description: "Take a look at some of my other work.",
  projects: [
    {
      title: "Formjo",
      description:
        "A platform for coaches to assign structured training, review athlete video submissions, and deliver personalised feedback.",
      image: {
        src: "https://placehold.co/800x500?text=Formjo",
        alt: "Formjo placeholder image",
      },
      url: "/case-study/formjo",
      tags: ["React", "Flask", "PostgreSQL"],
    },
  ],
  button: {
    title: "View all",
    url: "/",
  },
};

const KoinSight = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <CaseStudyLayout header={header} sections={sections} relatedProjects={relatedProjects} />
      <Footer />
    </div>
  );
};

export default KoinSight;
