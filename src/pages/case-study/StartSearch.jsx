import React from "react";
import {
  MagnifyingGlass,
  Brain,
  Eye,
  UsersFour,
  ChartBar,
  Presentation,
  Buildings,
  CalendarBlank,
  IdentificationBadge,
  Globe,
  Trophy,
} from "@phosphor-icons/react";
import Navbar from "../../components/Navbar.jsx";
import CaseStudyLayout from "../../components/CaseStudyLayout.jsx";
import CaseStudyImage from "../../components/CaseStudyImage.jsx";
import BentoHighlights from "../../components/BentoHighlights.jsx";
import Footer from "../../components/Footer.jsx";
import startsearchLandingImage from "../../assets/startsearch-landing.jpg";
import startsearchDropOffImage from "../../assets/startsearch-drop-off.jpg";
import startsearchManusDashboardImage from "../../assets/steartsearch-manus-dashboard.jpg";
import startsearchDarkAlumniImage from "../../assets/startsearch-dark-alumni.jpg";
import startsearchDesignAudienceImage from "../../assets/startsearch-design-audience.jpg";
import startsearchPainPointsImage from "../../assets/startsearch_pain-points.jpg";
import startsearchHowMightWeImage from "../../assets/startsearch_how-might-we.jpg";
import startsearchDesignPhilosophyImage from "../../assets/startsearch-design-philosophy.jpg";
import manusLogo from "../../assets/manus-logo.svg";
import exaLogo from "../../assets/exa-logo.png";
import mem0Logo from "../../assets/mem0-logo.svg";
import startsearchDataScrapeImage from "../../assets/startsearch_data-scrape.jpg";
import startsearchIntelligenceCohortImage from "../../assets/startsearch_intelligence-cohort.jpg";
import startsearchStartupProfileImage from "../../assets/startsearch_startup-profile.jpg";
import startsearchCheckInEmailImage from "../../assets/startsearch_check-in-email.jpg";
import startsearchCohortComparisonImage from "../../assets/startsearch_cohort-comparison.jpg";
import startsearchCohortInvestorImage from "../../assets/startsearch_cohort-investor.jpg";
import startsearchCohortManagementImage from "../../assets/startsearch_cohort-management.jpg";

const header = {
  heading: "StartSearch",
  description:
    "Alumni Intelligence is an AI agent dashboard built for accelerator programmes like SMU IIE, tracking every graduated startup from the outside. No founder opt-in, no spreadsheets, just persistent memory that gets smarter every run.",
  tags: [
    { label: "AI Agents" },
    { label: "Hackathon" },
    { label: "Product Design" },
    { label: "Team Project" },
  ],
  details: [
    {
      label: "Client",
      description: "SMU IIE (Hackathon)",
      icon: <Buildings className="size-5" />,
    },
    {
      label: "Date",
      description: "2026",
      icon: <CalendarBlank className="size-5" />,
    },
    {
      label: "Role",
      description: "Team of 3, AI Agent Design",
      icon: <IdentificationBadge className="size-5" />,
    },
    {
      label: "Website",
      description: "View Prototype",
      icon: <Globe className="size-5" />,
      url: "https://smiietrack-jfeh6whh.manus.space/",
    },
    {
      label: "Award",
      description: "SMU Prize: Best Startup Ecosystem Build",
      icon: <Trophy className="size-5" />,
    },
  ],
  image: {
    src: startsearchLandingImage,
    alt: "StartSearch landing page",
  },
};

const toolsUsed = [
  {
    label: "Manus AI",
    icon: <img src={manusLogo} alt="Manus AI logo" className="size-10 rounded-lg" />,
  },
  {
    label: "EXA",
    icon: <img src={exaLogo} alt="EXA logo" className="size-10 rounded-lg" />,
  },
  {
    label: "Mem0",
    icon: <img src={mem0Logo} alt="Mem0 logo" className="size-10 rounded-lg" />,
  },
];

const resultsItems = [
  {
    icon: <Eye className="size-6" />,
    title: "Dark Alumni Detection",
    description:
      "Automatically flags startups with no signal (no website update, no LinkedIn activity, no news) for 90 days, without founders needing to self-report.",
  },
  {
    icon: <MagnifyingGlass className="size-6" />,
    title: "Automated Web Signal Scraping",
    description:
      "Pulls in articles, LinkedIn activity, and funding announcements with EXA to gauge each startup's pulse on every refresh.",
  },
  {
    icon: <Brain className="size-6" />,
    title: "Persistent Agent Memory",
    description:
      "Mem0 keeps a memory timeline per startup, so the dashboard accumulates context and gets smarter with every run instead of starting fresh.",
  },
  {
    icon: <UsersFour className="size-6" />,
    title: "Cohort Intelligence",
    description:
      "A snapshot view of cohort health, what to celebrate and who's at risk, built for program managers to read at a glance.",
  },
  {
    icon: <ChartBar className="size-6" />,
    title: "Cohort Comparison",
    description:
      "Compares how different cohorts have performed over the years, not just a single point-in-time snapshot.",
  },
  {
    icon: <Presentation className="size-6" />,
    title: "Donor & Investor Reporting",
    description:
      "A snapshot overview report for sponsors, surfacing metrics like jobs created and successful exits.",
  },
];

const sections = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <p>
          After Demo Day, startups go dark. Accelerator programmes like SMU
          IIE graduate cohort after cohort, but lose visibility into who
          raised, pivoted, or quietly shut down the moment founders stop
          reporting in.
        </p>
        <h3>About StartSearch</h3>
        <p>
          Alumni Intelligence is an AI agent dashboard I built with my
          teammates Gin and Jerome at Build Club's Go-to-Market Builders AI
          Build Lab, a Singapore evening hackathon where teams had one
          three-hour window to turn a manual workflow into a working AI
          prototype using Manus AI, EXA, and Mem0. We took home the{" "}
          <strong>SMU Prize: Best Startup Ecosystem Build</strong>, tracking
          every graduated startup from the outside, no founder opt-in, no
          spreadsheets. Core features include:
        </p>
        <ul>
          <li>
            <strong>Dark Alumni Detection</strong>: flags startups with no
            signal for 90 days, automatically.
          </li>
          <li>
            <strong>Automated Web Signal Scraping</strong>: pulls in news
            articles, LinkedIn activity, and funding announcements to gauge
            each startup's pulse.
          </li>
          <li>
            <strong>Persistent Agent Memory</strong>: a memory timeline logs
            what's changed for each startup over time.
          </li>
          <li>
            <strong>Cohort Intelligence</strong>: a snapshot of cohort
            health, plus cohort-to-cohort comparison across years.
          </li>
        </ul>
        <CaseStudyImage
          src={startsearchDropOffImage}
          alt="Startup drop-off tracked after Demo Day"
        />
        <h3>Problem</h3>
        <p>
          Founders rarely self-report to programme managers once a cohort
          graduates, which makes it difficult to track who's doing well and
          who's struggling. That leaves programme managers flying blind,
          sponsors with no ROI story to point to, and at-risk founders
          without a safety net, since nobody knows to check in until it's
          too late.
        </p>
        <CaseStudyImage
          src={startsearchPainPointsImage}
          alt="StartSearch pain points"
        />
        <CaseStudyImage
          src={startsearchHowMightWeImage}
          alt="StartSearch how might we"
        />
      </>
    ),
  },
  {
    id: "design",
    label: "Design",
    content: (
      <>
        <p>
          The core design bet is treating silence as the signal, instead of
          asking founders to report in, the dashboard surfaces the absence
          of activity as the thing worth acting on.
        </p>
        <CaseStudyImage
          src={startsearchDesignAudienceImage}
          alt="StartSearch dashboard views for each audience"
        />
        <CaseStudyImage
          src={startsearchDesignPhilosophyImage}
          alt="StartSearch design philosophy"
        />
        <p>
          The dashboard is built around three audiences, each served by a
          different view: programme managers get a cohort health snapshot
          (who to celebrate, who's at risk) and a check-in prompt for
          at-risk founders; individual startups get a memory timeline so
          context isn't lost between check-ins; and sponsors/donors get a
          snapshot report with metrics like jobs created and successful
          exits, an ROI story they didn't have before.
        </p>
      </>
    ),
  },
  {
    id: "build",
    label: "Build",
    content: (
      <>
        <p>
          Built in a hackathon window with Gin and Jerome, under real time
          pressure to have something working, not just designed. That
          shaped how we built it as much as what we built.
        </p>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-primary/40">
            Tools & Services
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-6">
            {toolsUsed.map((tool) => (
              <div key={tool.label} className="flex flex-col items-center gap-2">
                {tool.icon}
                <span className="text-sm text-text-primary/70">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>

        <CaseStudyImage
          src={startsearchManusDashboardImage}
          alt="StartSearch dashboard built with Manus AI"
        />

        <h3>Stack & Architecture</h3>
        <ul>
          <li>
            <strong>Manus AI as the build layer.</strong> With a hackathon
            clock running, we used Manus AI to generate the working
            dashboard app itself, so the team's limited hours went into the
            agent logic and data sources, not UI boilerplate.
          </li>
          <li>
            <strong>EXA for signal gathering.</strong> EXA does the actual
            web search behind each refresh, scraping for articles, LinkedIn
            activity, and funding announcements per startup.
          </li>
          <li>
            <strong>Mem0 for persistent memory.</strong> Instead of each
            refresh starting from zero, Mem0 keeps what the agent has
            already learned about a startup, so the memory timeline builds
            up over time rather than resetting.
          </li>
        </ul>

        <h3>Feature Spotlight: Dark Alumni Detection</h3>
        <p>
          The standout feature is the 90-day silence detector. On refresh,
          the agent checks each startup's public footprint, website
          changes, LinkedIn updates, news mentions, funding announcements,
          via EXA, and flags anyone with no detected activity in 90 days as
          a "dark alumni." No founder has to fill out a form for this to
          surface; the absence of signal is the signal.
        </p>

        <CaseStudyImage
          src={startsearchDarkAlumniImage}
          alt="Dark Alumni Detection feature in StartSearch"
        />

        <h3>What I'd Do Differently</h3>
        <p>A few things worth naming honestly, given the timeline:</p>
        <ul>
          <li>
            <strong>The 90-day threshold is fixed.</strong> It isn't
            configurable per cohort or startup stage, a pre-seed startup
            and a Series A company probably shouldn't share the same
            silence threshold.
          </li>
          <li>
            <strong>Cohort data upload is basic.</strong> There's no
            import/export or CRM sync yet, a programme manager has to
            enter new cohort data by hand.
          </li>
          <li>
            <strong>Signal coverage is unproven at scale.</strong> EXA and
            Mem0 worked well for the demo, but we haven't stress-tested how
            coverage and memory accuracy hold up across hundreds of
            startups over months, not just a hackathon weekend.
          </li>
        </ul>
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
          src={startsearchDataScrapeImage}
          alt="Automated web signal scraping"
        />
        <CaseStudyImage
          src={startsearchIntelligenceCohortImage}
          alt="Cohort intelligence snapshot"
        />
        <CaseStudyImage
          src={startsearchStartupProfileImage}
          alt="Startup profile and memory timeline"
        />
        <CaseStudyImage
          src={startsearchCheckInEmailImage}
          alt="At-risk founder check-in email"
        />
        <CaseStudyImage
          src={startsearchCohortComparisonImage}
          alt="Cohort comparison view"
        />
        <CaseStudyImage
          src={startsearchCohortInvestorImage}
          alt="Investor and donor cohort report"
        />
        <CaseStudyImage
          src={startsearchCohortManagementImage}
          alt="Cohort management view"
        />
      </>
    ),
  },
];

const StartSearch = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <CaseStudyLayout
        header={header}
        sections={sections}
        githubUrl="https://campus.buildclub.ai/projects/019ebb87-9e86-7539-998c-3af3695d9444"
        githubLabel="View Project"
        githubIcon={<Presentation className="size-5" />}
        liveUrl="https://smiietrack-jfeh6whh.manus.space/"
      />
      <Footer />
    </div>
  );
};

export default StartSearch;
