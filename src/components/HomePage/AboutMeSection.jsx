import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutMeSection = (props) => {
  const { tagline, heading, description, milestones } = {
    ...AboutMeSectionDefaults,
    ...props,
  };

  const listRef = useRef(null);
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (listRef.current) {
      setLineHeight(listRef.current.getBoundingClientRect().height);
    }
  }, [milestones]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);
  const fillOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="page-container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-16 lg:mb-20">
          <p className="mb-3 font-mono font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="text-md">{description}</p>
        </div>
        <div ref={containerRef} className="mx-auto max-w-2xl">
          <ol ref={listRef} className="relative flex flex-col gap-10">
            <div
              style={{ height: lineHeight }}
              className="absolute left-[5px] top-1 w-px overflow-hidden bg-text-primary/10"
            >
              <motion.div
                style={{ height: fillHeight, opacity: fillOpacity }}
                className="absolute inset-x-0 top-0 w-px bg-gradient-to-b from-accent via-accent to-transparent"
              />
            </div>
            {milestones.map((milestone, index) => (
              <li key={index} className="relative flex gap-6">
                <span className="relative z-10 mt-1.5 size-2.5 shrink-0 rounded-full border-2 border-accent bg-background-primary" />
                <div>
                  <p className="mb-1 font-mono text-sm font-semibold text-accent">
                    {milestone.year ? `${milestone.year} · ` : ""}
                    {milestone.label}
                  </p>
                  <h3 className="mb-2 text-lg font-bold leading-[1.3] md:text-xl">
                    {milestone.heading}
                  </h3>
                  <p className="text-sm text-text-primary/70 md:text-md">
                    {milestone.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export const AboutMeSectionDefaults = {
  tagline: "About Me",
  heading: "How I got here.",
  description:
    "I like to get close to how a thing works for the people using it, then build it. I try new tools early and keep what helps me ship, which is how I moved from Figma to Paper.design.",
  milestones: [
    {
      year: "2025–now",
      label: "Zenko.gg",
      heading: "Part-time design engineer",
      description:
        "I joined on UX/UI and took on the front-end as well. I design in Paper.design, write the Storybook stories, and ship to production in React every week.",
    },
    {
      year: "2026",
      label: "General Assembly",
      heading: "Software Engineering Bootcamp",
      description:
        "I wanted to build what I design without waiting on a handoff. I built Formjo solo and KoinSight with two teammates.",
    },
    {
      year: "2023–25",
      label: "Metafyed",
      heading: "Co-founder and UX/UI designer",
      description:
        "I led UX/UI from zero to MVP and learned to pitch through Hero Training and a Silicon Valley accelerator program. I also planned and ran our events at HK Fintech Week 2025 on my own.",
    },
    {
      year: "2021–22",
      label: "Web3 & Freelance",
      heading: "Web3 launches and Webflow sites for founders",
      description:
        "I led Web3 projects from concept to launch and volunteered as a Chainlink Advocate. I also designed and shipped Webflow sites for founders. One of them was Culminate Security, later acquired by Datadog.",
    },
    {
      year: "2015–18",
      label: "Before design",
      heading: "F&B manufacturing, then design school",
      description:
        "I worked on the factory floor and ran an ERP rollout, which taught me how a business runs end to end. Then I studied UX/UI at Red Academy and Vancouver Film School.",
    },
  ],
};

export default AboutMeSection;
