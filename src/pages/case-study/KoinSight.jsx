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
import CaseStudyLayout from "../../components/CaseStudyLayout.jsx";
import CaseStudyImage from "../../components/CaseStudyImage.jsx";
import BentoHighlights from "../../components/BentoHighlights.jsx";
import Footer from "../../components/Footer.jsx";
import { useSafeReducedMotion } from "../../lib/useSafeReducedMotion";
import koinsightHeroImage from "../../assets/koinsight-hero-img.webp";
import koinsightInitialPlanningImage from "../../assets/koinsight-initial-planning.webp";
import koinsightStyleGuideImage from "../../assets/koinsight-style-guide.webp";
import koinsightBackendImage from "../../assets/koinsight-backend.webp";
import koinsightWatchlistMp4 from "../../assets/koinsight-watchlist.mp4";
import koinsightWatchlistWebm from "../../assets/koinsight-watchlist.webm";
import koinsightWatchlistPoster from "../../assets/koinsight-watchlist-poster.webp";
import koinsightTeamImage from "../../assets/koinsight-team.webp";
import koinsightOutcomesDashboardImage from "../../assets/koinsight-outcomes-dashboard.webp";
import koinsightOutcomesSelectCoinModalImage from "../../assets/koinsight-outcomes-select-coin-modal.webp";
import koinsightOutcomesAddTransactionModalImage from "../../assets/koinsight-outcomes-add-transaction-modal.webp";
import koinsightOutcomesTransactionHistoryImage from "../../assets/koinsight-outcomes-transaction-history.webp";
import koinsightOutcomesCoinDetailPageImage from "../../assets/koinsight-outcomes-coin-detail-page.webp";

const WatchlistVideo = () => {
  const prefersReducedMotion = useSafeReducedMotion();
  return (
    <div className="my-8! md:my-10!">
      <video
        autoPlay={!prefersReducedMotion}
        controls={prefersReducedMotion}
        muted
        loop
        playsInline
        preload="metadata"
        poster={koinsightWatchlistPoster}
        aria-label="KoinSight watchlist"
        width="960"
        height="576"
        className="h-auto w-full rounded-lg"
      >
        <source src={koinsightWatchlistMp4} type="video/mp4" />
        <source src={koinsightWatchlistWebm} type="video/webm" />
      </video>
    </div>
  );
};

const header = {
  heading: "KoinSight",
  description:
    "KoinSight is a crypto portfolio tracker. A team of three built it at General Assembly's Software Engineering Bootcamp in under two weeks. I was the frontend developer and UX engineer.",
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
      "Total value and asset allocation charted with Recharts. The dashboard refreshes every 5 minutes.",
  },
  {
    icon: <ArrowsLeftRight className="size-6" />,
    title: "Transaction Logging",
    description:
      "Buy, sell and transfer CRUD with live-computed totals, editable history, and cost basis for every asset.",
  },
  {
    icon: <Coins className="size-6" />,
    title: "Live Market Data",
    description:
      "Prices and market data for 250+ cryptocurrencies from CoinGecko, with a scrolling ticker on the landing page.",
  },
  {
    icon: <Sparkle className="size-6" />,
    title: "Text Reveal Animation",
    description:
      "A matrix-style decrypt effect for hero text and stat numbers, adapted from React Bits' DecryptedText. It reveals on hover, on click, or on scroll.",
  },
  {
    icon: <Cube className="size-6" />,
    title: "Shader Landing Page",
    description:
      "A raw Three.js and GLSL shader background of animated, mouse-reactive rings. It checks for WebGL support and falls back when it is missing.",
  },
  {
    icon: <Lock className="size-6" />,
    title: "Secure Authentication",
    description:
      "JWT-based sign-up and login with bcrypt-hashed passwords. Each user's holdings and transaction history sit behind it.",
  },
];

const sections = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <p>
          KoinSight is a full-stack crypto portfolio tracker. I built it with
          two teammates, Lincoln and Kenneth, as our capstone project at General
          Assembly's Software Engineering Bootcamp, in under two weeks. I was
          the frontend developer and UX engineer. I built the landing page, the
          portfolio dashboard, the component system, and the UI details.
          Lincoln designed the database schema, REST API, and CoinGecko
          integration. Kenneth built the authentication system and the
          transaction flow end to end.
        </p>
        <h3>About KoinSight</h3>
        <p>
          KoinSight lets crypto investors monitor their holdings, log every
          transaction, and see their performance in one place. Core features
          include:
        </p>
        <ul>
          <li>
            <strong>JWT Authentication.</strong> Sign-up and login with
            bcrypt-hashed passwords.
          </li>
          <li>
            <strong>Transaction Management.</strong> CRUD for buy, sell, and
            transfer transactions.
          </li>
          <li>
            <strong>Portfolio Tracking.</strong> Holdings and performance charted
            with Recharts.
          </li>
          <li>
            <strong>Live Market Data.</strong> Current prices and history for
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
          Many crypto investors hold assets across multiple exchanges and
          wallets. There is no single place to see what they own or how it's
          performing. Exchange dashboards show one account at a time, and
          spreadsheets don't update with live prices. KoinSight gives them one
          place to log every transaction and see portfolio value and
          performance against live market data.
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
          The design system, KoinSight-Dark, uses a high-contrast dark theme
          for financial data and cryptocurrency tracking.
        </p>
        <ul>
          <li>
            <strong>Color Palette.</strong> A deep navy and slate base
            (slate-950) keeps text readable over long sessions. Gains are green
            and losses are red throughout, both on glassmorphic backings.
          </li>
          <li>
            <strong>Typography.</strong> Inter carries the body copy and
            data-dense tables. Bruno Ace SC sets the headings.
          </li>
          <li>
            <strong>Visual Style.</strong> The "Cyber-Glassmorphism" approach
            uses soft borders, subtle background blurs, and elevation levels to
            set hierarchy.
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
          My scope was the whole frontend. That covered the React/Vite/Tailwind
          build, the landing page, the portfolio dashboard, and the component
          system behind them. A few decisions stood out.
        </p>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-primary/60">
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
            <strong>A custom shader background.</strong>{" "}
            The landing page's ambient ring animation is raw Three.js and a
            custom GLSL fragment shader. A WebGL capability check gates it, so
            unsupported devices skip it.
          </li>
          <li>
            <strong>Polling over websockets.</strong> The portfolio chart
            refreshes on a 5-minute interval. That matches the backend, which
            caches CoinGecko data on a schedule.
          </li>
          <li>
            <strong>Fixing Lenis against a modal's own scroll.</strong> Our
            global smooth-scroll library was hijacking scrolling inside the
            coin-picker modal. We opted that modal out with a data attribute and
            kept smooth scroll on everywhere else.
          </li>
        </ul>

        <h3>Feature Spotlight: Text Reveal Animation</h3>
        <p>
          The hero heading, section titles, and live stat numbers all use one
          text-reveal component. It's based on DecryptedText from React Bits, a
          matrix-style decrypt effect. It triggers on hover, on click, or on
          scroll into view. It can reveal sequentially or all at once, from the start, end,
          or center of the string. One component is reused wherever text
          animates.
        </p>
        <WatchlistVideo />
      </>
    ),
  },
  {
    id: "Outcomes",
    label: "What We Built",
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
          We built a working crypto portfolio tracker with live prices, full
          transaction CRUD, and a shader landing page. We hit a few engineering
          problems along the way.
        </p>
        <ul>
          <li>
            <strong>
              CoinGecko's CORS policy and rate limits caught us early.
            </strong>{" "}
            We moved requests server-side and handled rate limits with
            scheduled cron jobs and caching. The backend doesn't proxy every
            request live.
          </li>
          <li>
            <strong>Merge conflicts, more than once.</strong> Three of us
            worked across overlapping feature branches, which caused repeated
            git merge conflicts. Next time we'd scope branches more narrowly
            and merge more often.
          </li>
          <li>
            <strong>Components grew before we broke them down.</strong>{" "}
            We split the UI into smaller components part-way through the build.
            That made the codebase easier to read and maintain. Next time we'd
            do it from day one.
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
          With the MVP done, these are the features we'd build next.
        </p>
        <ul>
          <li>
            <strong>Multi-currency support.</strong> Toggle between USD, SGD,
            and other fiat currencies.
          </li>
          <li>
            <strong>A crypto-to-fiat calculator.</strong> Convert between crypto and fiat
            currencies on the dashboard.
          </li>
          <li>
            <strong>Price alerts.</strong> Notify users when a coin hits a target
            price.
          </li>
          <li>
            <strong>Mobile layout.</strong> A version tuned for smaller screens.
          </li>
        </ul>
      </>
    ),
  },
];

const KoinSight = () => {
  return (
    <div className="flex min-h-dvh flex-col">
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
