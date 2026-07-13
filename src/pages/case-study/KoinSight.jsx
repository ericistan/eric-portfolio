import React from "react";
import Navbar from "../../components/Navbar.jsx";
import CaseStudyLayout from "../../components/CaseStudyLayout.jsx";
import Footer from "../../components/Footer.jsx";

const header = {
  heading: "KoinSight",
  description:
    "A cryptocurrency portfolio tracker that gives investors real-time holdings visibility, transaction management, and historical performance analysis — built end-to-end, from data model to dashboard.",
  tags: [
    { label: "React" },
    { label: "Node.js" },
    { label: "MongoDB" },
    { label: "Recharts" },
    { label: "Three.js" },
  ],
  details: [
    { label: "Client", description: "Independent / Personal Project" },
    { label: "Date", description: "2025" },
    { label: "Role", description: "Full-Stack Developer" },
    { label: "Website", description: "Live preview coming soon" },
  ],
  image: {
    src: "https://placehold.co/1600x900?text=KoinSight+Hero",
    alt: "KoinSight hero placeholder image",
  },
};

const sections = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <p>
          This case study covers KoinSight, a full-stack app that helps
          crypto investors track their portfolio, manage transactions, and
          understand performance over time — without juggling spreadsheets
          or trusting a black-box exchange dashboard.
        </p>
        <h3>About KoinSight</h3>
        <p>
          KoinSight is a secure, real-time portfolio tracker for
          cryptocurrency investors. I built the frontend with React, Tailwind
          CSS, and Recharts, and the backend with Node, Express, and MongoDB,
          syncing live market data from the CoinGecko API. Core features
          include:
        </p>
        <ul>
          <li>
            <strong>JWT Authentication</strong> — secure sign-up and login
            with bcrypt-hashed passwords.
          </li>
          <li>
            <strong>Transaction Management</strong> — full CRUD for buy,
            sell, and transfer transactions.
          </li>
          <li>
            <strong>Real-Time Portfolio Tracking</strong> — live holdings and
            performance visualized with Recharts.
          </li>
          <li>
            <strong>Live Market Data</strong> — current prices and historical
            data pulled from the CoinGecko API, refreshed on a schedule with
            node-cron.
          </li>
          <li>
            <strong>Responsive UI</strong> — a dashboard that works as well
            on mobile as it does on desktop.
          </li>
        </ul>
        <img
          src="https://placehold.co/800x500?text=KoinSight"
          alt="KoinSight placeholder image"
        />
        <p className="text-sm italic">
          * Placeholder caption — swap in a real dashboard screenshot here.
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
    id: "research",
    label: "Research",
    content: (
      <p>
        Placeholder content — summarize the research into how crypto
        investors currently track their portfolios (spreadsheets, exchange
        dashboards, existing tracker apps) and the gaps that shaped
        KoinSight's feature set.
      </p>
    ),
  },
  {
    id: "ideation",
    label: "Ideation",
    content: (
      <p>
        Placeholder content — walk through early data model decisions (how
        transactions and holdings are structured), API design choices, and
        the tradeoffs considered before settling on the CoinGecko
        integration and sync strategy.
      </p>
    ),
  },
  {
    id: "design",
    label: "Design",
    content: (
      <p>
        Placeholder content — detail the dashboard's key screens (portfolio
        overview, transaction history, performance charts) and the UI
        decisions that made real-time data easy to read at a glance.
      </p>
    ),
  },
  {
    id: "reflection",
    label: "Reflection",
    content: (
      <p>
        Placeholder content — reflect on what shipped, technical challenges
        (rate limits, keeping cached prices fresh, securing user data), and
        what you'd build next.
      </p>
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
    <div>
      <Navbar />
      <CaseStudyLayout header={header} sections={sections} relatedProjects={relatedProjects} />
      <Footer />
    </div>
  );
};

export default KoinSight;
