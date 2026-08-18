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
import CaseStudyImage from "../../components/CaseStudyImage.jsx";
import BentoHighlights from "../../components/BentoHighlights.jsx";
import Footer from "../../components/Footer.jsx";
import koinsightHeroImage from "../../assets/koinsight-hero-img.webp";
import koinsightInitialPlanningImage from "../../assets/koinsight-initial-planning.webp";
import koinsightStyleGuideImage from "../../assets/koinsight-style-guide.webp";
import koinsightBackendImage from "../../assets/koinsight-backend.webp";
import koinsightWatchlistGif from "../../assets/koinsight-watchlist.gif";
import koinsightTeamImage from "../../assets/koinsight-team.webp";
import koinsightOutcomesDashboardImage from "../../assets/koinsight-outcomes-dashboard.webp";
import koinsightOutcomesSelectCoinModalImage from "../../assets/koinsight-outcomes-select-coin-modal.webp";
import koinsightOutcomesAddTransactionModalImage from "../../assets/koinsight-outcomes-add-transaction-modal.webp";
import koinsightOutcomesTransactionHistoryImage from "../../assets/koinsight-outcomes-transaction-history.webp";
import koinsightOutcomesCoinDetailPageImage from "../../assets/koinsight-outcomes-coin-detail-page.webp";

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
      description: "koinsight-tracker.netlify.app",
      icon: <Globe className="size-5" />,
      url: "https://koinsight-tracker.netlify.app/",
    },
  ],
  image: {
    src: koinsightHeroImage,
    alt: "KoinSight portfolio dashboard",
  },
};

const techStack = [
  {
    label: "React",
    icon: <SiReact className="size-10" style={{ color: "#61DAFB" }} />,
  },
  {
    label: "Vite",
    icon: <SiVite className="size-10" style={{ color: "#646CFF" }} />,
  },
  {
    label: "Tailwind",
    icon: <SiTailwindcss className="size-10" style={{ color: "#38BDF8" }} />,
  },
  {
    label: "Three.js",
    icon: <SiThreedotjs className="size-10" style={{ color: "#FFFFFF" }} />,
  },
  {
    label: "Node.js",
    icon: <SiNodedotjs className="size-10" style={{ color: "#3C873A" }} />,
  },
  {
    label: "MongoDB",
    icon: <SiMongodb className="size-10" style={{ color: "#47A248" }} />,
  },
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
          Assembly's Software Engineering Bootcamp, shipped in under two weeks.
          I was the frontend developer and UX engineer: the landing page, the
          portfolio dashboard, the component system, and the UI details all ran
          through me, while Lincoln architected the database schema, REST API,
          and CoinGecko integration, and Kenneth built the authentication system
          and transaction flow end-to-end.
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
            <strong>JWT Authentication</strong>: secure sign-up and login with
            bcrypt-hashed passwords.
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
        <CaseStudyImage src={koinsightTeamImage} alt="KoinSight team" />
        <CaseStudyImage
          src={koinsightInitialPlanningImage}
          alt="KoinSight initial planning and wireframes"
        />
        <h3>Problem & Ideation</h3>
        <p>
          Most crypto investors track their holdings across multiple exchanges
          and wallets, with no single source of truth for what they actually own
          or how it's performing. Exchange dashboards only show one account at a
          time, and spreadsheets don't update with live prices. KoinSight was
          built to solve that: one place to log every transaction and see real
          portfolio value and performance, synced against live market data.
        </p>
      </>
    ),
  },
  {
    id: "design",
    label: "Design",
    content: (
      <>
        <p>
          The design system, KoinSight-Dark, is built on a high-contrast dark
          aesthetic optimized for financial data and cryptocurrency tracking:
        </p>
        <ul>
          <li>
            <strong>Color Palette</strong>: A deep navy and slate foundation
            (slate-950) ensures readability for long sessions. Gains and losses
            are color-coded green and red throughout, both with glassmorphic
            backing for a modern feel.
          </li>
          <li>
            <strong>Typography</strong>: Inter carries the body copy and
            data-dense tables for its legibility, paired with Bruno Ace SC on
            headings for a bolder, more techy display voice.
          </li>
          <li>
            <strong>Visual Style</strong>: The "Cyber-Glassmorphism" approach
            uses soft borders, subtle background blurs, and elevation levels to
            create hierarchy without cluttering the screen.
          </li>
        </ul>
        <CaseStudyImage
          src={koinsightStyleGuideImage}
          alt="KoinSight style guide"
        />
      </>
    ),
  },
  {
    id: "build",
    label: "Build",
    content: (
      <>
        <p>
          My scope was the frontend end-to-end: the React/Vite/Tailwind build,
          the landing page, the portfolio dashboard, and the component system
          that ties them together. A few of the decisions behind that:
        </p>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-primary/40">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-6">
            {techStack.map((tech) => (
              <div
                key={tech.label}
                className="flex flex-col items-center gap-2"
              >
                {tech.icon}
                <span className="text-sm text-text-primary/70">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <CaseStudyImage src={koinsightBackendImage} alt="KoinSight backend" />

        <h3>Frontend Architecture</h3>
        <ul>
          <li>
            <strong>A hand-built shader background, not a stock effect.</strong>{" "}
            The landing page's ambient ring animation is raw Three.js and a
            custom GLSL fragment shader, gated behind a WebGL capability check
            so it degrades gracefully instead of breaking on unsupported
            devices.
          </li>
          <li>
            <strong>Polling over websockets.</strong> The portfolio chart
            refreshes on a 5-minute interval instead of a live socket
            connection, matching how the backend itself caches CoinGecko data on
            a schedule rather than proxying live requests.
          </li>
          <li>
            <strong>Fixing Lenis against a modal's own scroll.</strong> Our
            global smooth-scroll library was hijacking scrolling inside the
            coin-picker modal, solved by explicitly opting that modal out with a
            data attribute rather than disabling smooth scroll site-wide.
          </li>
        </ul>

        <h3>Feature Spotlight: Custom Text Reveal Animation</h3>
        <p>
          The hero heading, section titles, and live stat numbers all run
          through a text-reveal component I built from scratch, a matrix-style
          decrypt effect that can trigger on hover, on click, or on scroll into
          view, and can reveal sequentially or all at once, from the start, end,
          or center of the string. It's one component reused everywhere text
          needs to feel alive, not a one-off animation.
        </p>
        <CaseStudyImage src={koinsightWatchlistGif} alt="KoinSight watchlist" />
      </>
    ),
  },
  {
    id: "Outcomes",
    label: "Outcomes",
    content: (
      <>
        <div className="flex justify-center">
          <BentoHighlights items={resultsItems} />
        </div>
        <CaseStudyImage
          src={koinsightOutcomesDashboardImage}
          alt="KoinSight dashboard"
        />
        <CaseStudyImage
          src={koinsightOutcomesSelectCoinModalImage}
          alt="KoinSight select coin modal"
        />
        <CaseStudyImage
          src={koinsightOutcomesAddTransactionModalImage}
          alt="KoinSight add transaction modal"
        />
        <CaseStudyImage
          src={koinsightOutcomesTransactionHistoryImage}
          alt="KoinSight transaction history"
        />
        <CaseStudyImage
          src={koinsightOutcomesCoinDetailPageImage}
          alt="KoinSight coin detail page"
        />
      </>
    ),
  },
  {
    id: "what-id-do-differently",
    label: "What I'd Do Differently",
    content: (
      <>
        <p>
          We shipped a working crypto portfolio tracker with live prices, full
          transaction CRUD, and a polished landing page. Along the way, we hit a
          few real-world engineering challenges that sharpened our skills:
        </p>
        <ul>
          <li>
            <strong>
              CoinGecko's CORS policy and rate limits caught us early.
            </strong>{" "}
            We solved it by managing requests server-side and handling rate
            limits gracefully with scheduled cron jobs and caching, instead of
            proxying every request live.
          </li>
          <li>
            <strong>Merge conflicts, more than once.</strong> Three of us
            working across overlapping feature branches led to repeated git
            merge conflicts, a reminder to scope branches more narrowly and
            merge more often next time.
          </li>
          <li>
            <strong>Components grew before we broke them down.</strong>{" "}
            Refactoring UI into smaller, component-level pieces part-way through
            the build taught us how much easier that makes a codebase to read
            and maintain, a lesson we'd apply from day one next time.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "whats-next",
    label: "What's Next",
    content: (
      <>
        <p>
          With the MVP complete, these are the features we'd love to build next
          to make KoinSight even more useful for everyday crypto investors:
        </p>
        <ul>
          <li>
            <strong>Multi-currency support.</strong> Toggle between USD, SGD,
            and other fiat currencies.
          </li>
          <li>
            <strong>A crypto-to-fiat calculator.</strong> Quick conversion
            between crypto and fiat currencies, without leaving the dashboard.
          </li>
          <li>
            <strong>Price alerts.</strong> Notify users when a coin hits a
            target price.
          </li>
          <li>
            <strong>Mobile-responsive polish.</strong> An optimised experience
            for smaller screens.
          </li>
        </ul>
      </>
    ),
  },
];

const KoinSight = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <CaseStudyLayout
        header={header}
        sections={sections}
        githubUrl="https://github.com/ericistan/KoinSight-Tracker"
        liveUrl="https://koinsight-tracker.netlify.app/"
      />
      <Footer />
    </div>
  );
};

export default KoinSight;
