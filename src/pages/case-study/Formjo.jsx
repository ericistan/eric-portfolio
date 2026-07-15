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
  Globe,
} from "@phosphor-icons/react";
import Navbar from "../../components/Navbar.jsx";
import CaseStudyLayout from "../../components/CaseStudyLayout.jsx";
import CaseStudyImage from "../../components/CaseStudyImage.jsx";
import BentoHighlights from "../../components/BentoHighlights.jsx";
import Footer from "../../components/Footer.jsx";
import formjoHeroImage from "../../assets/case-study_formjo-hero.png";
import formjoLofiWireframe from "../../assets/formjo-lofi-wireframe.jpg";
import formjoDatabaseSchema from "../../assets/formjo-db-erd.png";
import formjoPainPoints from "../../assets/formjo_pain-points.jpg";
import formjoHowMightWe from "../../assets/formjo_how-might-we.jpg";
import formjoStyleGuide from "../../assets/formjo-styleguide.jpg";
import formjoCoachApp from "../../assets/formjo-coach-app.jpg";
import formjoPinterest from "../../assets/formjo-pinterest.jpg";
import formjoScreens from "../../assets/formjo-screens.jpg";

const header = {
  heading: "Formjo",
  description:
    "Coach Smarter. Train Better. Formjo is a platform for coaches to assign structured training, review athlete video submissions, and deliver personalised feedback. Designed and built solo, from Figma wireframe to shipped product.",
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
    {
      label: "Website",
      description: "Live preview coming soon",
      icon: <Globe className="size-5" />,
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
      "Complete create/read/update/delete flows for lessons, modules, assignments, submissions, and feedback.",
  },
  {
    icon: <Palette className="size-6" />,
    title: "Deterministic Cover Art",
    description:
      "Gradient lesson covers generated from module ID, giving each lesson a unique visual identity with zero image assets.",
  },
  {
    icon: <Microphone className="size-6" />,
    title: "In-Browser Voice Feedback",
    description:
      "Recorded via the Web Audio API and MediaRecorder, uploaded to Cloudinary, gated behind a localStorage consent flow.",
  },
  {
    icon: <YoutubeLogo className="size-6" />,
    title: "Universal YouTube Embeds",
    description:
      "A single regex normalizes any YouTube URL format into an embeddable video ID.",
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
      "Marking a lesson complete recalculates progress against the module and auto-flips the assignment to completed once every lesson is done, with no manual status updates.",
  },
];

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
            <strong>Training Builder</strong>: assign structured programs with
            reps, sets, and video demos.
          </li>
          <li>
            <strong>Video and audio recording Review</strong>: coaches annotate
            athlete submissions with timestamped feedback.
          </li>
          <li>
            <strong>Progress Dashboard</strong>: a visual overview of athlete
            adherence and improvement.
          </li>
        </ul>
        <h3>Problem & Ideation</h3>
        <p>
          The idea for Formjo came from training at a boxing gym, where I
          noticed several coaches who do personal training were struggling to
          keep track of their clients' progress. The usual workflow was to share
          and track progress over messaging apps like WhatsApp.
        </p>
        <p>
          That broke down over time, old videos and recordings got buried as
          conversation histories grew, with no easy way to look back on a
          client's progress. One of the coaches eventually asked me if there was
          a better way to handle it.
        </p>
        <p>
          My first suggestion was to use something like Notion, but it was soon
          clear that was too complex for their workflow. Coaches would forget to
          check in, clients would forget to log updates, and without a simple,
          structured feedback loop, neither side had real accountability ,
          leaving athletes without the consistent guidance they needed to
          improve.
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
          Formjo is built on three Japanese concepts that map directly to the
          product's core behaviours, a reflection on my experience at a boxing
          gym managed by a coach who treats their students with respect through
          Asian philosophy. The colour palette and typography reflect the spirit
          of a dojo, where student and master train and grow.
        </p>
        <ul>
          <li>
            <strong>Amber Fire #D46A1A</strong>:is the primary accent. Warm and
            energetic without being aggressive, the colour of a candle in a dojo
            rather than a warning signal.
          </li>
          <li>
            <strong>Washi #F5F0E8 and Parchment #E8E0D0</strong>: replace cold
            grey or pure white as backgrounds. Under gym fluorescent lighting,
            warm off-whites are significantly easier on the eye than neutral
            greys.
          </li>
          <li>
            <strong>Bamboo #3D6B45</strong>: appears only for success states. A
            single semantic colour keeps meaning clear and avoids visual noise
            across an already warm palette.
          </li>
          <li>
            <strong>Bebas Neue & Dm Sans</strong>: A condensed all-caps display
            face with roots in athletic and sports branding. DM Sans pair for
            offering warmth and legibility at small sizes.
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
          lo-fi wireframes into a 13-table Postgres schema before writing a
          single line of frontend code: the coach/student data model,
          lesson-to-module relationships, and assignment tracking all needed to
          hold together before anything else could be built on top.
        </p>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
            Stack & Architecture
          </p>
          <p>
            Formjo is a Flask REST API talking to a React/Vite frontend over
            JWT, with Postgres as the source of truth. A few of the decisions
            behind that were deliberate tradeoffs, not defaults:
          </p>
          <br />
          <div className="flex flex-wrap gap-x-8 gap-y-6">
            {techStack.map((tech) => (
              <div
                key={tech.label}
                className="flex flex-col items-center gap-2"
              >
                {tech.icon}
                <span className="text-sm text-white/70">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
        <ul>
          <li>
            <strong>No ORM.</strong> I reached for raw SQL via psycopg2
            (RealDictCursor, so rows come back as plain dicts) instead of
            SQLAlchemy. With 13 tables and a handful of multi-table joins for
            assignment progress, I wanted to see and control the exact query
            being run rather than reason through an abstraction on top of it.
          </li>
          <br />
          <li>
            <strong>Uploads bypass the backend entirely.</strong> Video and
            voice submissions go straight from the browser to Cloudinary via the
            Upload Widget for file/YouTube uploads, and a raw <code>fetch</code>{" "}
            + <code>FormData</code> POST for the in-browser voice recordings,
            since those exist only as an in-memory <code>Blob</code>.
          </li>
          <br />
          <li>
            <strong>Theming is role-based, not user-selectable.</strong> Coach
            defaults to dark mode, student to light, toggled by flipping a class
            on <code>&lt;html&gt;</code> from <code>AuthContext</code> on login.
            It's a small thing, but it's the design system's "student and
            master" framing actually showing up in code, not just the style
            guide. In fugure iterations, I would add a theme toggle for user
            choice.
          </li>
          <br />
          <li>
            <strong>Voice Feedback</strong> Coaches needed a faster way to leave
            feedback than typing, so comments can carry a voice note as an
            option. It records in-browser with <code>getUserMedia</code> and{" "}
            <code>MediaRecorder</code>, The recorder itself just hands a{" "}
            <code>Blob</code> back to the parent component, which owns the
            preview and upload.
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
        <CaseStudyImage src={formjoScreens} alt="Formjo how might we" />
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
      </>
    ),
  },
];

// const relatedProjects = {
//   tagline: "Portfolio",
//   heading: "More case studies",
//   description: "Take a look at some of my other work.",
//   projects: [
//     {
//       title: "KoinSight",
//       description:
//         "A real-time portfolio tracker for crypto investors, with transaction management and historical performance analysis.",
//       image: {
//         src: "https://placehold.co/800x500?text=KoinSight",
//         alt: "KoinSight placeholder image",
//       },
//       url: "/case-study/koinsight",
//       tags: ["React", "Node.js", "MongoDB"],
//     },
//     {
//       title: "KoinSight",
//       description:
//         "A real-time portfolio tracker for crypto investors, with transaction management and historical performance analysis.",
//       image: {
//         src: "https://placehold.co/800x500?text=KoinSight",
//         alt: "KoinSight placeholder image",
//       },
//       url: "/case-study/koinsight",
//       tags: ["React", "Node.js", "MongoDB"],
//     },
//   ],
// };

const Formjo = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <CaseStudyLayout
        header={header}
        sections={sections}
        // relatedProjects={relatedProjects}
      />
      <Footer />
    </div>
  );
};

export default Formjo;
