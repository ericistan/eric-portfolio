import MagicBento from "../MagicBento";

const WhyMeSection = (props) => {
  const { tagline, heading, description, highlights } = {
    ...WhyMeSectionDefaults,
    ...props,
  };

  const bentoItems = highlights.map((highlight, index) => ({
    label: String(index + 1).padStart(2, "0"),
    title: highlight.lead,
    description: highlight.text,
  }));

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="page-container">
        <div className="border border-border-primary px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3">{tagline}</p>
            <h2 className="mb-5">{heading}</h2>
            <p>{description}</p>
          </div>
          <div className="mt-10 flex justify-center md:mt-12">
            <MagicBento
              items={bentoItems}
              textAutoHide={false}
              enableStars={false}
              enableSpotlight={false}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={false}
              spotlightRadius={150}
              particleCount={10}
              glowColor="0, 0, 0"
            />
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
      lead: "Led functional & cross-functional product teams",
      text: "of up to 10 members.",
    },
    {
      lead: "Developed UX strategy and design",
      text: "process from scratch in 4 months.",
    },
    {
      lead: "Launched a monetization project",
      text: "(2.5 months, 5 teams of up to 12 members).",
    },
    {
      lead: "Mentored a junior designer",
      text: "to a middle position in 9 months.",
    },
  ],
};

export default WhyMeSection;
