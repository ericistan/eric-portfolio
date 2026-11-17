import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiWebflow,
  SiClaude,
  SiStorybook,
  SiThreedotjs,
  SiFramer,
  SiGreensock,
  SiTypescript,
  SiVite,
  SiNetlify,
  SiLottiefiles,
  SiMeta,
  SiVercel,
  SiDeepseek,
  SiMoonshotai,
} from "react-icons/si";
import { useState } from "react";
import { RiGrokAiFill, RiOpenaiFill } from "react-icons/ri";
import FallingText from "../FallingText";
import PaperIcon from "../icons/PaperIcon";

const TechStack = (props) => {
  const { tagline, heading, groups } = {
    ...TechStackDefaults,
    ...props,
  };
  // One click on any box drops all three.
  const [dropped, setDropped] = useState(false);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="page-container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-16">
          <p className="mb-3 font-mono font-semibold">{tagline}</p>
          <h2 className="text-4xl font-bold md:text-5xl">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="mb-3 font-mono text-sm font-semibold text-text-primary/70">
                {group.label}
              </p>
              <div className="h-[240px] overflow-hidden rounded-lg border border-text-primary/10 bg-text-primary/5 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] md:h-[400px]">
                <FallingText
                  items={group.items}
                  trigger="click"
                  started={dropped}
                  onTrigger={() => setDropped(true)}
                  hint="Click to drop"
                  gravity={0.6}
                  fontSize="clamp(0.85rem, 3.5vw, 1.15rem)"
                  mouseConstraintStiffness={0.9}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const iconClass = "size-4 md:size-5";

export const TechStackDefaults = {
  tagline: "Tech Stack",
  heading: "Tools I work with",
  groups: [
    {
      label: "Design",
      items: [
        { label: "Paper.design", icon: <PaperIcon className={iconClass} />, highlight: true, color: "#81ACEC" },
        { label: "Figma", icon: <SiFigma className={iconClass} />, highlight: true, color: "#F24E1E" },
        { label: "Storybook", icon: <SiStorybook className={iconClass} />, color: "#FF4785" },
        { label: "Framer Motion", icon: <SiFramer className={iconClass} />, color: "#FFFFFF" },
        { label: "LottieFiles Creator", icon: <SiLottiefiles className={iconClass} />, color: "#00DDB3" },
        { label: "Mobbin", color: "#FFFFFF" },
      ],
    },
    {
      label: "Build",
      items: [
        { label: "React", icon: <SiReact className={iconClass} />, highlight: true, color: "#61DAFB" },
        { label: "JavaScript", icon: <SiJavascript className={iconClass} />, highlight: true, color: "#F7DF1E" },
        { label: "TypeScript", icon: <SiTypescript className={iconClass} />, color: "#3178C6" },
        { label: "Tailwind", icon: <SiTailwindcss className={iconClass} />, highlight: true, color: "#38BDF8" },
        { label: "GSAP", icon: <SiGreensock className={iconClass} />, color: "#88CE02" },
        { label: "Three.js", icon: <SiThreedotjs className={iconClass} />, color: "#FFFFFF" },
        { label: "Vite", icon: <SiVite className={iconClass} />, color: "#646CFF" },
        { label: "Netlify", icon: <SiNetlify className={iconClass} />, color: "#00C7B7" },
        { label: "Webflow", icon: <SiWebflow className={iconClass} />, color: "#146EF5" },
        { label: "Vercel", icon: <SiVercel className={iconClass} />, color: "#FFFFFF" },
      ],
    },
    {
      label: "AI",
      items: [
        { label: "Claude Code", icon: <SiClaude className={iconClass} />, highlight: true, color: "#D97757" },
        { label: "Grok", icon: <RiGrokAiFill className={iconClass} />, color: "#FFFFFF" },
        { label: "Muse", icon: <SiMeta className={iconClass} />, color: "#0866FF" },
        { label: "Codex", icon: <RiOpenaiFill className={iconClass} />, color: "#FFFFFF" },
        { label: "DeepSeek", icon: <SiDeepseek className={iconClass} />, color: "#4D6BFE" },
        { label: "Kimi", icon: <SiMoonshotai className={iconClass} />, color: "#FFFFFF" },
        { label: "Emil Kowalski skills", color: "#FFFFFF" },
        { label: "gstack", color: "#FFFFFF" },
        { label: "Matt Pocock skills", color: "#FFFFFF" },
        { label: "pstack", color: "#FFFFFF" },
      ],
    },
  ],
};

export default TechStack;
