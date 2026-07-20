import { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import formjoHeroImage from "../../assets/case-study_formjo-hero.png";
import koinSightHeroImage from "../../assets/case-study_koin-sight_portfolio-dashboard.png";
import startSearchHeroImage from "../../assets/case-study_start-search_portfolio-dashboard.png";
import raincityBoxingHeroImage from "../../assets/case-study_raincity-boxing-hero.jpg";

const buttonVariants = {
  primary: "bg-text-primary text-background-primary hover:bg-text-primary/90",
  secondary: "bg-accent text-background-primary hover:bg-accent/90",
  link: "text-text-primary underline-offset-4 hover:underline",
};

const buttonSizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-base",
  link: "gap-1 px-0 py-0 text-sm",
};

const Button = ({
  variant = "primary",
  size = "md",
  iconRight,
  url,
  className = "",
  children,
  ...props
}) => {
  const classes = `inline-flex items-center justify-center rounded-lg transition-colors ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`;

  if (url) {
    return (
      <Link to={url} className={classes} {...props}>
        {children}
        {iconRight}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {iconRight}
    </button>
  );
};

const CaseStudyCard = ({ study }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 0.9, 1],
    [0.9, 1, 1, 0.95, 0.9],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 0.9, 0.95],
    [0, 1, 1, 0.5, 0],
  );

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="grid grid-cols-1 gap-x-20 gap-y-6 rounded-lg border border-text-primary/10 bg-text-primary/5 p-6 md:grid-cols-[3fr_4fr] md:gap-y-20 md:p-8 lg:p-12"
    >
      <div className="flex flex-col justify-between">
        <div>
          <p className="mb-2 font-mono text-sm font-semibold">
            {study.tagline}
          </p>
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            {study.heading}
          </h3>
        </div>
        <p className="mt-6 md:mt-8 md:text-md">{study.description}</p>
        {study.tags?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {study.tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-full bg-text-primary/10 px-3 py-1.5 font-mono text-xs font-semibold"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          {study.buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <img
          src={study.image.src}
          alt={study.image.alt}
          className="aspect-[3/2] w-full object-cover"
        />
      </div>
    </motion.div>
  );
};

const CaseStudySection = (props) => {
  const { tagline, heading, description, studies } = {
    ...CaseStudySectionDefaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="page-container">
        <header className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-mono font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="text-md">{description}</p>
        </header>
        <div className="grid grid-cols-1 gap-6 md:gap-12 lg:gap-20">
          {studies.map((study, index) => (
            <CaseStudyCard key={index} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const CaseStudySectionDefaults = {
  tagline: "Case Studies",
  heading: "Selected work",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  studies: [
    {
      tagline: "Training Coach App",
      heading: "Formjo",
      description:
        "Coach Smarter. Train Better. Formjo is a platform for coaches to assign structured training, review athlete video submissions, and deliver personalised feedback. Built solo with React, Flask, and Postgres, from Figma wireframe to shipped product",
      tags: [
        "Coaching Platform",
        "Full-Stack Development",
        "Product Design",
        "UX Research",
        "Branding",
        "Solo Project",
      ],
      buttons: [
        {
          title: "Read Case Study",
          variant: "secondary",
          iconRight: <RxChevronRight />,
          url: "/case-study/formjo",
        },
      ],
      image: {
        src: formjoHeroImage,
        alt: "Formjo case study hero image",
      },
    },
    {
      tagline: "Crypto Portfolio Tracker",
      heading: "KoinSight",
      description:
        "A crypto portfolio tracker built with two teammates at General Assembly's Software Engineering Bootcamp. I was the frontend developer and UX engineer, building the landing page, dashboard, and component system in React and Three.js.",
      tags: [
        "Frontend Development",
        "UX Engineering",
        "Team Project",
        "Bootcamp Project",
      ],
      buttons: [
        {
          title: "Read Case Study",
          variant: "secondary",
          iconRight: <RxChevronRight />,
          url: "/case-study/koinsight",
        },
      ],
      image: {
        src: koinSightHeroImage,
        alt: "KoinSight case study hero image",
      },
    },
    {
      tagline: "AI Agent Dashboard",
      heading: "StartSearch",
      description:
        "Alumni Intelligence tracks every SMU IIE alumni startup from the outside, no founder opt-in required. Built with teammates during a hackathon using Manus AI, EXA, and Mem0 for persistent agent memory.",
      tags: ["AI Agents", "Hackathon", "Product Design", "Team Project"],
      buttons: [
        {
          title: "Read Case Study",
          variant: "secondary",
          iconRight: <RxChevronRight />,
          url: "/case-study/startsearch",
        },
      ],
      image: {
        src: startSearchHeroImage,
        alt: "StartSearch case study hero image",
      },
    },
    {
      tagline: "Web Design",
      heading: "Raincity Boxing",
      description:
        "A website for a Richmond, BC boxing gym and wellness studio, built to turn curious visitors into trial sign-ups with clear pricing, real member stories, and integrated booking.",
      tags: [
        "Web Design",
        "Branding",
        "UI/UX",
        "Local Business",
        "Solo Project",
      ],
      buttons: [
        {
          title: "Read Case Study",
          variant: "secondary",
          iconRight: <RxChevronRight />,
          url: "/case-study/raincityboxing",
        },
      ],
      image: {
        src: raincityBoxingHeroImage,
        alt: "Raincity Boxing case study hero image",
      },
    },
  ],
};

export default CaseStudySection;
