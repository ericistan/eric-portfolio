import {
  PenNib,
  RocketLaunch,
  Handshake,
  GraduationCap,
} from "@phosphor-icons/react";
import BentoHighlights from "../BentoHighlights";
import SideRays from "../SideRays";

const WhyMeSection = (props) => {
  const { tagline, heading, description, highlights } = {
    ...WhyMeSectionDefaults,
    ...props,
  };

  const bentoItems = highlights.map((highlight) => ({
    icon: highlight.icon,
    title: highlight.lead,
    description: highlight.text,
  }));

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="page-container">
        <div className="relative overflow-hidden rounded-lg border border-text-primary/10 bg-text-primary/5 px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0 z-0">
            <SideRays
              speed={2.5}
              rayColor1="#39ff14"
              rayColor2="#96c8ff"
              intensity={2}
              spread={2}
              origin="top-right"
              tilt={0}
              saturation={1.5}
              blend={0.75}
              falloff={1.6}
              opacity={1}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-lg text-center">
            <p className="mb-3 font-mono font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="text-md">{description}</p>
          </div>
          <div className="relative z-10 mt-10 flex justify-center md:mt-12">
            <BentoHighlights items={bentoItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhyMeSectionDefaults = {
  tagline: "Why Me",
  heading: "Ownership and growth, built in.",
  description:
    "I take ideas from first sketch to shipped product, and own every step in between.",
  highlights: [
    {
      icon: <PenNib className="size-6" />,
      lead: "Designed and built end-to-end, solo",
      text: "No handoff gap. I own the interface from Figma file to shipped component.",
    },
    {
      icon: <RocketLaunch className="size-6" />,
      lead: "Co-founded a startup, shipped from zero to one",
      text: "Took many Web3 projects from concept to launch, wearing every hat along the way.",
    },
    {
      icon: <Handshake className="size-6" />,
      lead: "Trusted across founder, studio, and consulting work",
      text: "Brought in for both UX strategy and frontend execution, not just one or the other.",
    },
    {
      icon: <GraduationCap className="size-6" />,
      lead: "Always leveling up, by design",
      text: "From design to accelerator programs to full-stack code, each step chosen to close a real gap, not chase a trend.",
    },
  ],
};

export default WhyMeSection;
