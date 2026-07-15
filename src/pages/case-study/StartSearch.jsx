import React from "react";
import {
  Robot,
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
} from "@phosphor-icons/react";
import Navbar from "../../components/Navbar.jsx";
import CaseStudyLayout from "../../components/CaseStudyLayout.jsx";
import BentoHighlights from "../../components/BentoHighlights.jsx";
import Footer from "../../components/Footer.jsx";

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
  ],
  image: {
    src: "https://placehold.co/1600x900?text=StartSearch",
    alt: "StartSearch hero placeholder image",
  },
};

const toolsUsed = [
  { label: "Manus AI", icon: <Robot className="size-10 text-white" /> },
  { label: "EXA", icon: <MagnifyingGlass className="size-10 text-white" /> },
  { label: "Mem0", icon: <Brain className="size-10 text-white" /> },
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
          teammates Jin and Jiraum during a hackathon, tracking every
          graduated startup from the outside, no founder opt-in, no
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
        <img
          src="https://placehold.co/800x500?text=StartSearch"
          alt="StartSearch placeholder image"
        />
        <p className="text-sm italic">
          * Placeholder caption: swap in a real dashboard screenshot here.
        </p>
        <h3>Problem</h3>
        <p>
          Founders rarely self-report to programme managers once a cohort
          graduates, which makes it difficult to track who's doing well and
          who's struggling. That leaves programme managers flying blind,
          sponsors with no ROI story to point to, and at-risk founders
          without a safety net, since nobody knows to check in until it's
          too late.
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
          The core design bet is treating silence as the signal, instead of
          asking founders to report in, the dashboard surfaces the absence
          of activity as the thing worth acting on.
        </p>
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
          Built in a hackathon window with Jin and Jiraum, under real time
          pressure to have something working, not just designed. That
          shaped how we built it as much as what we built.
        </p>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
            Tools & Services
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-6">
            {toolsUsed.map((tool) => (
              <div key={tool.label} className="flex flex-col items-center gap-2">
                {tool.icon}
                <span className="text-sm text-white/70">{tool.label}</span>
              </div>
            ))}
          </div>
        </div>

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

const StartSearch = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <CaseStudyLayout header={header} sections={sections} relatedProjects={relatedProjects} />
      <Footer />
    </div>
  );
};

export default StartSearch;
