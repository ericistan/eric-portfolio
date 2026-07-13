import { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";

const buttonVariants = {
  primary: "bg-black text-white hover:bg-black/90",
  secondary: "border border-black bg-transparent text-black hover:bg-black/5",
  link: "text-black underline-offset-4 hover:underline",
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
  const classes = `inline-flex items-center justify-center rounded transition-colors ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`;

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

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.7, 0.9, 1], [0.9, 1, 1, 0.95, 0.9]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 0.9, 0.95],
    [0, 1, 1, 0.5, 0],
  );

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="grid grid-cols-1 gap-x-20 gap-y-6 border border-border-primary p-6 md:grid-cols-[3fr_4fr] md:gap-y-20 md:p-8 lg:p-12"
    >
      <div className="flex flex-col justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold">{study.tagline}</p>
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            {study.heading}
          </h3>
        </div>
        <p className="mt-6 md:mt-8 md:text-md">{study.description}</p>
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
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-5xl">{heading}</h2>
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
      buttons: [
        {
          title: "Read Case Study",
          variant: "secondary",
          iconRight: <RxChevronRight />,
          url: "/case-study/formjo",
        },
      ],
      image: {
        src: "https://placehold.co/800x600?text=Case+Study+1",
        alt: "Case study 1 placeholder image",
      },
    },
    {
      tagline: "Crypto Portfolio Tracker",
      heading: "KoinSight",
      description:
        "KoinSight gives crypto investors real-time portfolio tracking, transaction management, and historical performance analysis. Built full-stack with React, Node, Express, and MongoDB, with Recharts and Three.js powering the data visualizations.",
      buttons: [
        {
          title: "Read Case Study",
          variant: "secondary",
          iconRight: <RxChevronRight />,
          url: "/case-study/koinsight",
        },
      ],
      image: {
        src: "https://placehold.co/800x600?text=KoinSight",
        alt: "KoinSight placeholder image",
      },
    },
    {
      tagline: "Tagline",
      heading: "Medium length project heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      buttons: [
        {
          title: "Read Case Study",
          variant: "secondary",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        src: "https://placehold.co/800x600?text=Case+Study+2",
        alt: "Case study 2 placeholder image",
      },
    },
    {
      tagline: "Tagline",
      heading: "Medium length project heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      buttons: [
        {
          title: "Read Case Study",
          variant: "secondary",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        src: "https://placehold.co/800x600?text=Case+Study+2",
        alt: "Case study 2 placeholder image",
      },
    },
  ],
};

export default CaseStudySection;
