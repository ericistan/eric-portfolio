import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFigma,
  SiWebflow,
  SiClaude,
  SiStorybook,
  SiGithub,
  SiFlask,
  SiPostgresql,
  SiThreedotjs,
  SiFramer,
  SiGreensock,
} from "react-icons/si";
import FallingText from "../FallingText";
import NousResearchIcon from "../icons/NousResearchIcon";

const TechStack = (props) => {
  const { tagline, heading, items } = {
    ...TechStackDefaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="page-container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-16">
          <p className="mb-3 font-mono font-semibold">{tagline}</p>
          <h2 className="text-4xl font-bold md:text-5xl">{heading}</h2>
        </div>
        <div className="h-[360px] overflow-hidden rounded-lg border border-text-primary/10 bg-text-primary/5 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] md:h-[440px]">
          <FallingText
            items={items}
            trigger="click"
            hint="Click to drop"
            gravity={0.6}
            fontSize="clamp(0.9rem, 4vw, 2rem)"
            mouseConstraintStiffness={0.9}
          />
        </div>
      </div>
    </section>
  );
};

const iconClass = "size-4 md:size-6";

export const TechStackDefaults = {
  tagline: "Tech Stack",
  heading: "Tools I work with",
  items: [
    { label: "React", icon: <SiReact className={iconClass} />, highlight: true, color: "#61DAFB" },
    { label: "JavaScript", icon: <SiJavascript className={iconClass} />, highlight: true, color: "#F7DF1E" },
    { label: "Tailwind", icon: <SiTailwindcss className={iconClass} />, highlight: true, color: "#38BDF8" },
    { label: "Figma", icon: <SiFigma className={iconClass} />, highlight: true, color: "#F24E1E" },
    { label: "Framer Motion", icon: <SiFramer className={iconClass} />, color: "#FFFFFF" },
    { label: "GSAP", icon: <SiGreensock className={iconClass} />, color: "#88CE02" },
    { label: "Three.js", icon: <SiThreedotjs className={iconClass} />, color: "#FFFFFF" },
    { label: "Storybook", icon: <SiStorybook className={iconClass} />, color: "#FF4785" },
    { label: "Node.js", icon: <SiNodedotjs className={iconClass} />, color: "#3C873A" },
    { label: "Express", icon: <SiExpress className={iconClass} />, color: "#FFFFFF" },
    { label: "MongoDB", icon: <SiMongodb className={iconClass} />, color: "#47A248" },
    { label: "Flask", icon: <SiFlask className={iconClass} />, color: "#FFFFFF" },
    { label: "PostgreSQL", icon: <SiPostgresql className={iconClass} />, color: "#4169E1" },
    { label: "Webflow", icon: <SiWebflow className={iconClass} />, color: "#146EF5" },
    { label: "GitHub", icon: <SiGithub className={iconClass} />, color: "#FFFFFF" },
    { label: "Claude Code", icon: <SiClaude className={iconClass} />, color: "#D97757" },
    { label: "Hermes", icon: <NousResearchIcon className={iconClass} />, color: "#FFFFFF" },
  ],
};

export default TechStack;
