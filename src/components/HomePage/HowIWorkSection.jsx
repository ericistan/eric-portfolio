import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// Animated icons from Generative Icons by LottieFiles (generativeicons.com),
// exported as SMIL SVGs with `generative-icons export <id> --trigger js`.
import searchImageSvg from "../../assets/how-i-work/search-image.svg?raw";
import agentWorkflowSvg from "../../assets/how-i-work/agent-workflow.svg?raw";
import terminalAgentSvg from "../../assets/how-i-work/terminal-agent.svg?raw";
import searchMatchSvg from "../../assets/how-i-work/search-match.svg?raw";

export const HowIWorkSectionDefaults = {
  tagline: "Process",
  heading: "How I work",
  description:
    "I try new tools early and keep what helps me ship. Right now my process looks like this.",
  steps: [
    {
      title: "Explore",
      icon: { svg: searchImageSvg, id: "how_search_image" },
      description:
        "Before I design anything, I ask a few blunt questions. Should this exist? Who is it for, and is that a real person? What problem does it solve, and is it a real problem? Then I dig in with competitive research and user interviews, and pull UI patterns from Figma and Paper.design over MCP.",
    },
    {
      title: "Systemise",
      icon: { svg: agentWorkflowSvg, id: "how_agent_workflow" },
      description:
        "I frame the problem with the team and go back and forth on what the product needs. Together we map the edge cases, the features and the tech stack they call for. Once a design leaves Figma or Paper.design, I build its components in Storybook to prototype every state.",
    },
    {
      title: "Build",
      icon: { svg: terminalAgentSvg, id: "how_terminal_agent" },
      description:
        "I ship through an agent harness, with Claude Code or whichever model fits the job, balancing output quality against token cost. Agents work in parallel and smaller models write the code. I review the output myself before I open a PR, so the design and architecture calls stay with me.",
    },
    {
      title: "Check",
      icon: { svg: searchMatchSvg, id: "how_search_match" },
      description:
        "Before anything ships, my agents run design-review and dev-testing skills on it. I lean on Emil Kowalski's, gstack, Matt Pocock's and pstack. Then I ask the last question myself: does this make sense?",
    },
  ],
  footnote: "AI does the repetitive work. The taste calls are still mine.",
};

// Same hover as the case study "What I built" cards: a light tilt plus a
// pull toward the cursor. Off on small screens and with reduced motion.
const useHoverMotion = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      "(min-width: 769px) and (hover: hover) and (prefers-reduced-motion: no-preference)",
    );
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return enabled;
};

// Plays an exported icon's SMIL animation once, start to finish. One-shot
// icons have a single `_m` trigger. Stateful icons have `_a` (play) and `_b`
// (return), so we chain them to get a full cycle back to the rest pose.
const durationMs = (el) => parseFloat(el.getAttribute("dur")) * 1000 || 0;

const playIconOnce = (root, id) => {
  if (!root || root.dataset.playing) return;
  const oneShot = root.querySelector(`#${id}_m`);
  const forward = root.querySelector(`#${id}_a`);
  const back = root.querySelector(`#${id}_b`);
  const first = oneShot ?? forward;
  if (!first?.beginElement) return;

  root.dataset.playing = "true";
  first.beginElement();
  let total = durationMs(first);
  if (!oneShot && back?.beginElement) {
    setTimeout(() => back.beginElement(), total);
    total += durationMs(back);
  }
  setTimeout(() => delete root.dataset.playing, total);
};

const StepCard = ({ step, index, motionEnabled }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!motionEnabled) return;
    const el = cardRef.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    gsap.to(el, {
      rotateX: ((y - centerY) / centerY) * -10,
      rotateY: ((x - centerX) / centerX) * 10,
      duration: 0.1,
      ease: "power2.out",
      transformPerspective: 1000,
    });
    gsap.to(el, {
      x: (x - centerX) * 0.05,
      y: (y - centerY) * 0.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseEnter = () => {
    if (motionEnabled) playIconOnce(iconRef.current, step.icon.id);
  };

  const handleMouseLeave = () => {
    if (!motionEnabled) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <li
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="rounded-lg border border-text-primary/10 bg-text-primary/5 p-6 transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(224,224,224,0.15)]"
    >
      <div className="mb-6 flex items-center justify-between">
        <span
          ref={iconRef}
          aria-hidden="true"
          className="size-10 text-accent [&_svg]:size-full"
          dangerouslySetInnerHTML={{ __html: step.icon.svg }}
        />
        <span className="font-mono text-sm font-semibold text-text-primary/50">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
      <p className="text-text-primary/80">{step.description}</p>
    </li>
  );
};

const HowIWorkSection = (props) => {
  const { tagline, heading, description, steps, footnote } = {
    ...HowIWorkSectionDefaults,
    ...props,
  };
  const motionEnabled = useHoverMotion();

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="page-container">
        <div className="mb-12 max-w-lg md:mb-16">
          <p className="mb-3 font-mono font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
            {heading}
          </h2>
          <p className="text-md">{description}</p>
        </div>
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              step={step}
              index={index}
              motionEnabled={motionEnabled}
            />
          ))}
        </ol>
        <p className="mt-8 font-mono text-sm text-text-primary/60">{footnote}</p>
      </div>
    </section>
  );
};

export default HowIWorkSection;
