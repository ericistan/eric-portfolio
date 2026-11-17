import React from "react";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiFlask,
  SiPostgresql,
} from "react-icons/si";
import {
  Database,
  Palette,
  Microphone,
  YoutubeLogo,
  ChatsCircle,
  Gauge,
  Buildings,
  CalendarBlank,
  IdentificationBadge,
} from "@phosphor-icons/react";
import CaseStudyLayout from "../../components/CaseStudyLayout.jsx";
import CaseStudyImage from "../../components/CaseStudyImage.jsx";
import BentoHighlights from "../../components/BentoHighlights.jsx";
import Footer from "../../components/Footer.jsx";
import formjoHeroImage from "../../assets/case-study_formjo-hero.webp";
import formjoLofiWireframe from "../../assets/formjo-lofi-wireframe.webp";
import formjoDatabaseSchema from "../../assets/formjo-db-erd.webp";
import formjoPainPoints from "../../assets/formjo_pain-points.webp";
import formjoHowMightWe from "../../assets/formjo_how-might-we.webp";
import formjoStyleGuide from "../../assets/formjo-styleguide.webp";
import formjoCoachApp from "../../assets/formjo-coach-app.webp";
import formjoPinterest from "../../assets/formjo-pinterest.webp";
import formjoScreens from "../../assets/formjo-screens.webp";

const header = {
  heading: "Formjo",
  description:
    "Formjo is a platform for coaches to assign structured training, review athlete video submissions, and give personalised feedback. I designed and built it solo, from Figma wireframe to working app.",
  tags: [
    { label: "Coaching Platform" },
    { label: "Full-Stack Development" },
    { label: "Product Design" },
    { label: "UX Research" },
    { label: "Branding" },
    { label: "Solo Project" },
  ],
  details: [
    {
      label: "Client",
      description: "Independent Project",
      icon: <Buildings className="size-5" />,
    },
    {
      label: "Date",
      description: "2026",
      icon: <CalendarBlank className="size-5" />,
    },
    {
      label: "Role",
      description: "Solo Full-Stack Developer & Designer",
      icon: <IdentificationBadge className="size-5" />,
    },
  ],
  image: {
    src: formjoHeroImage,
    alt: "Formjo hero image",
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
    label: "JavaScript",
    icon: <SiJavascript className="size-10" style={{ color: "#F7DF1E" }} />,
  },
  {
    label: "Python",
    icon: <SiPython className="size-10" style={{ color: "#3776AB" }} />,
  },
  {
    label: "Flask",
    icon: <SiFlask className="size-10" style={{ color: "#FFFFFF" }} />,
  },
  {
    label: "PostgreSQL",
    icon: <SiPostgresql className="size-10" style={{ color: "#4169E1" }} />,
  },
];

const resultsItems = [
  {
    icon: <Database className="size-6" />,
    title: "Full CRUD Workflows",
    description:
      "Create, read, update and delete flows for lessons, modules, assignments, submissions, and feedback.",
  },
  {
    icon: <Palette className="size-6" />,
    title: "Deterministic Cover Art",
    description:
      "Gradient lesson covers generated from the module ID. Each lesson gets its own look with no image assets.",
  },
  {
    icon: <Microphone className="size-6" />,
    title: "In-Browser Voice Feedback",
    description:
      "Recorded with the Web Audio API and MediaRecorder, uploaded to Cloudinary, and gated by a localStorage consent flow.",
  },
  {
    icon: <YoutubeLogo className="size-6" />,
    title: "Universal YouTube Embeds",
    description:
      "A single regex turns any YouTube URL format into an embeddable video ID.",
  },
  {
    icon: <ChatsCircle className="size-6" />,
    title: "Threaded Submission Comments",
    description:
      "Back-and-forth commenting between coach and student on every submission.",
  },
  {
    icon: <Gauge className="size-6" />,
    title: "Automatic Progress Tracking",
    description:
      "Marking a lesson complete recalculates progress against the module. The assignment flips to completed once every lesson is done.",
  },
];

const sections = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <>
        <p>
          This case study covers how I designed and built Formjo's core
          features around the pain points I saw at a boxing gym.
        </p>
        <h3>About Formjo</h3>
        <p>
          Formjo is a platform for coaches to assign structured training, review
          athlete video submissions, and give personalised feedback. It has
          three core features:
        </p>
        <ul>
          <li>
            <strong>Training Builder.</strong> Coaches assign structured programs
            with reps, sets, and video demos.
          </li>
          <li>
            <strong>Video and Audio Review.</strong> Coaches annotate athlete
            submissions with timestamped feedback.
          </li>
          <li>
            <strong>Progress Dashboard.</strong> A visual overview of athlete
            adherence and improvement.
          </li>
        </ul>
        <h3>Problem & Ideation</h3>
        <p>
          The idea for Formjo came from training at a boxing gym. Several
          coaches who do personal training were struggling to keep track of
          their clients' progress. They shared and tracked progress over
          messaging apps like WhatsApp.
        </p>
        <p>
          That broke down over time. Old videos and recordings got buried as
          conversation histories grew, and there was no easy way to look back on
          a client's progress. One of the coaches eventually asked me if there
          was a better way to handle it.
        </p>
        <p>
          My first suggestion was Notion, but it was too complex for their
          workflow. Coaches forgot to check in and clients forgot to log
          updates. Without a simple feedback loop, neither side was
          accountable, and athletes went without steady guidance.
        </p>
        <CaseStudyImage src={formjoPainPoints} alt="Formjo pain points" />
        <CaseStudyImage src={formjoHowMightWe} alt="Formjo how might we" />
      </>
    ),
  },

  {
    id: "design",
    label: "Design",
    content: (
      <>
        <p>
          Kata (型) Deliberate Repetition | Shoshin (初心) Beginner's Mind | Ma
          (間) Negative Space
        </p>
        <p>
          Formjo is built on three Japanese concepts that map to the product's
          core behaviours. They come from my time at a boxing gym where the
          coach treats students with respect through Asian philosophy. The
          colour palette and typography reflect the spirit of a dojo, where
          student and master train and grow.
        </p>
        <ul>
          <li>
            <strong>Amber Fire #D46A1A</strong> is the primary accent. It's
            warm and energetic, the colour of a candle in a dojo.
          </li>
          <li>
            <strong>Washi #F5F0E8 and Parchment #E8E0D0</strong> are the
            backgrounds. Under gym fluorescent lighting, warm off-whites are
            easier on the eye than neutral greys.
          </li>
          <li>
            <strong>Bamboo #3D6B45</strong> appears only for success states. One
            semantic colour keeps the meaning clear across an already warm
            palette.
          </li>
          <li>
            <strong>Bebas Neue & DM Sans</strong> are the typefaces. Bebas Neue
            is a condensed all-caps display face with roots in athletic and
            sports branding. DM Sans adds warmth and stays legible at small
            sizes.
          </li>
        </ul>
        <CaseStudyImage src={formjoPinterest} alt="Formjo Pinterest board" />
        <CaseStudyImage src={formjoStyleGuide} alt="Formjo style guide" />
      </>
    ),
  },

  {
    id: "build",
    label: "Build",
    content: (
      <>
        <p>
          With the product direction and visual language settled, I moved from
          lo-fi wireframes into a 13-table Postgres schema before writing any
          frontend code. The coach/student data model, lesson-to-module
          relationships, and assignment tracking all had to hold together
          first.
        </p>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-primary/60">
            Stack & Architecture
          </p>
          <p>
            Formjo is a Flask REST API talking to a React/Vite frontend over
            JWT, with Postgres as the source of truth. A few decisions behind
            that were deliberate tradeoffs.
          </p>
          <br />
          <div className="flex flex-wrap gap-x-8 gap-y-6">
            {techStack.map((tech) => (
              <div
                key={tech.label}
                className="flex flex-col items-center gap-2"
              >
                {tech.icon}
                <span className="text-sm text-text-primary/70">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
        <ul>
          <li>
            <strong>Raw SQL.</strong> I used psycopg2 with RealDictCursor, so
            rows come back as plain dicts. With 13 tables and a handful of
            multi-table joins for assignment progress, I wanted to see and
            control the exact query being run.
          </li>
          <br />
          <li>
            <strong>Uploads go straight to Cloudinary.</strong> Video and voice
            submissions skip the backend. File and YouTube uploads use the
            Upload Widget. In-browser voice recordings use a raw{" "}
            <code>fetch</code> + <code>FormData</code> POST, since they exist
            only as an in-memory <code>Blob</code>.
          </li>
          <br />
          <li>
            <strong>Role-based theming.</strong> Coaches get dark mode and
            students get light. <code>AuthContext</code> flips a class on{" "}
            <code>&lt;html&gt;</code> on login. It's a small thing, but it puts
            the design system's "student and master" framing into the code as
            well as the style guide. In a future iteration, I would add a theme
            toggle.
          </li>
          <br />
          <li>
            <strong>Voice feedback.</strong> Coaches needed a faster way to
            leave feedback than typing, so comments can carry a voice note. It
            records in the browser with <code>getUserMedia</code> and{" "}
            <code>MediaRecorder</code>. The recorder hands a <code>Blob</code>{" "}
            back to the parent component, which owns the preview and upload.
          </li>
        </ul>
        <CaseStudyImage
          src={formjoDatabaseSchema}
          alt="Formjo database schema"
        />
        <CaseStudyImage
          src={formjoLofiWireframe}
          alt="Formjo lo-fi wireframe"
        />
        <CaseStudyImage src={formjoCoachApp} alt="Formjo coach app" />
        <CaseStudyImage src={formjoScreens} alt="Formjo app screens" />
      </>
    ),
  },
  {
    id: "Outcomes",
    label: "What I Built",
    content: (
      <>
        <div className="flex justify-center">
          <BentoHighlights items={resultsItems} />
        </div>
      </>
    ),
  },
];

const Formjo = () => {
  return (
    <div className="flex min-h-dvh flex-col">
      <CaseStudyLayout
        header={header}
        sections={sections}
        githubUrl="https://github.com/ericistan/Formjo"
      />
      <Footer />
    </div>
  );
};

export default Formjo;
