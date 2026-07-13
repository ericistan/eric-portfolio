import React from "react";
import Navbar from "../../components/Navbar.jsx";
import CaseStudyLayout from "../../components/CaseStudyLayout.jsx";
import Footer from "../../components/Footer.jsx";

const header = {
  heading: "Formjo",
  description:
    "A platform for coaches to assign structured training, review athlete video submissions, and deliver personalised feedback — designed and built solo, from Figma wireframe to shipped product.",
  tags: [{ label: "React" }, { label: "Flask" }, { label: "PostgreSQL" }, { label: "Figma" }],
  details: [
    { label: "Client", description: "Independent / Personal Project" },
    { label: "Date", description: "2024" },
    { label: "Role", description: "Solo Full-Stack Developer & Designer" },
    { label: "Website", description: "Live preview coming soon" },
  ],
  image: {
    src: "https://placehold.co/1600x900?text=Formjo+Hero",
    alt: "Formjo hero placeholder image",
  },
};

const sections = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <p>
          This case study showcases redesigning Formjo's core features to
          address key pain points, enhance user satisfaction, and support
          business growth.
        </p>
        <h3>About Formjo</h3>
        <p>
          Formjo is a platform for coaches to assign structured training, review
          athlete video submissions, and deliver personalised feedback. This
          case study covers the redesign of three key features:
        </p>
        <ul>
          <li>
            <strong>Training Builder</strong> — assign structured programs with
            reps, sets, and video demos.
          </li>
          <li>
            <strong>Video Review</strong> — coaches annotate athlete submissions
            with timestamped feedback.
          </li>
          <li>
            <strong>Progress Dashboard</strong> — a visual overview of athlete
            adherence and improvement.
          </li>
        </ul>
        <img
          src="https://placehold.co/800x500?text=Formjo"
          alt="Formjo placeholder image"
        />
        <p className="text-sm italic">
          * Placeholder caption — swap in a real screenshot or product shot
          here.
        </p>
        <h3>Problem</h3>
        <p>
          The initial MVP lacked structured feedback loops, making it hard for
          coaches to track athlete progress. User feedback confirmed these
          challenges, and metrics showed room for improvement in coach
          retention.
        </p>
      </>
    ),
  },
  {
    id: "research",
    label: "Research",
    content: (
      <p>
        Placeholder content — summarize the research methods used (interviews,
        surveys, analytics review) and the key insights that shaped the
        redesign.
      </p>
    ),
  },
  {
    id: "ideation",
    label: "Ideation",
    content: (
      <p>
        Placeholder content — walk through the exploration phase: sketches,
        wireframes, and the options considered before converging on a direction.
      </p>
    ),
  },
  {
    id: "design",
    label: "Design",
    content: (
      <p>
        Placeholder content — detail the final design decisions, key screens,
        and how they solved the problems identified in research.
      </p>
    ),
  },
  {
    id: "reflection",
    label: "Reflection",
    content: (
      <p>
        Placeholder content — reflect on the outcome, what shipped,
        results/metrics, and what you'd do differently next time.
      </p>
    ),
  },
  {
    id: "test",
    label: "test",
    content: (
      <p>
        Placeholder content — reflect on the outcome, what shipped,
        results/metrics, and what you'd do differently next time.
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
      title: "KoinSight",
      description:
        "A real-time portfolio tracker for crypto investors, with transaction management and historical performance analysis.",
      image: {
        src: "https://placehold.co/800x500?text=KoinSight",
        alt: "KoinSight placeholder image",
      },
      url: "/case-study/koinsight",
      tags: ["React", "Node.js", "MongoDB"],
    },
  ],
  button: {
    title: "View all",
    url: "/",
  },
};

const Formjo = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <CaseStudyLayout header={header} sections={sections} relatedProjects={relatedProjects} />
      <Footer />
    </div>
  );
};

export default Formjo;
