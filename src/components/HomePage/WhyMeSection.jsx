import { UsersThree, PenNib, RocketLaunch, ChalkboardTeacher } from "@phosphor-icons/react";
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
            <p className="mb-3 font-mono">{tagline}</p>
            <h2 className="mb-5">{heading}</h2>
            <p>{description}</p>
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
  heading: "Leadership",
  description:
    "Fostering growth through collaboration, where everyone learns and grows together.",
  highlights: [
    {
      icon: <UsersThree className="size-6" />,
      lead: "Led functional & cross-functional product teams",
      text: "of up to 10 members.",
    },
    {
      icon: <PenNib className="size-6" />,
      lead: "Developed UX strategy and design",
      text: "process from scratch in 4 months.",
    },
    {
      icon: <RocketLaunch className="size-6" />,
      lead: "Launched a monetization project",
      text: "(2.5 months, 5 teams of up to 12 members).",
    },
    {
      icon: <ChalkboardTeacher className="size-6" />,
      lead: "Mentored a junior designer",
      text: "to a middle position in 9 months.",
    },
  ],
};

export default WhyMeSection;
