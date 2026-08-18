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
    "My natural instinct: get close to how the thing works best for users, then go build it.",
  milestones: [
    {
      year: "2015",
      label: "F&B Manufacturing",
      heading: "E-commerce, ERP & supply chain fundamentals",
      description:
        "Learned how a business actually moves: time on the ground with line workers, project management for a new ERP system with foreign vendors, and producing product photo and video for channels like Taobao. My first lesson in how supply chain, ops, and customer-facing work are all interconnected.",
    },
    {
      year: "2018",
      label: "Design Education",
      heading: "UX/UI at Red Academy & Vancouver Film School",
      description:
        "Went back to school for design, learning to see products through the user's eyes.",
    },
    {
      year: "2021",
      label: "Web3 & Chainlink",
      heading: "Shipped Web3 projects, then taught the space",
      description:
        "Led Web3 projects from concept to launch, then volunteered as a Chainlink Advocate, teaching others how the tech actually works.",
    },
    {
      year: "2022",
      label: "Freelance",
      heading: "Webflow designer, Culminate Security → acquired by Datadog",
      description:
        "Shipped end-to-end Webflow sites for founders, from Figma file to live site, including Culminate Security, later acquired by Datadog.",
    },
    {
      year: "2023–25",
      label: "Accelerators & Events",
      heading: "Silicon Valley accelerator training",
      description:
        "Learned to pitch and build through Hero Training and a Silicon Valley accelerator program, also planned and ran events for Metafyed at HK Fintech Week 2025 solo.",
    },
    {
      year: "2026",
      label: "Closing the Loop",
      heading: "General Assembly bootcamp",
      description:
        "After years of designing products and pitching startups, decided to close the loop myself: traded Figma files for pull requests, and built KoinSight as my full-stack capstone.",
    },
    {
      year: "2026",
      label: "Hackathons",
      heading: "SMU Prize, AI-building hackathon with StartSearch",
      description:
        "Also competing on the side: top 5 in design hackathons over the years, and this year, the SMU Prize with StartSearch.",
    },
    {
      year: null,
      label: "Today",
      heading: "Equally at home in the design file and the codebase.",
      description:
        "All of it shows up in how I build now: I move fast because I've had to, and I sweat the details because design was where I started.",
    },
  ],
};

export default AboutMeSection;
