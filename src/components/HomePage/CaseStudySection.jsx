import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router";
import { work } from "../../data/work";
import WorkLinks from "../Work/WorkLinks.jsx";

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
  return (
    <div className="grid grid-cols-1 gap-x-20 gap-y-6 rounded-lg border border-text-primary/10 bg-text-primary/5 p-6 md:grid-cols-[3fr_4fr] md:gap-y-20 md:p-8 lg:p-12">
      <div className="contents md:flex md:flex-col md:justify-between">
        <div>
          <p className="mb-2 font-mono text-sm font-semibold">
            {study.tagline}
          </p>
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            {study.heading}
          </h3>
          {study.result && (
            <p className="mt-3 font-mono text-sm font-semibold text-accent">
              {study.result}
            </p>
          )}
        </div>
        <p className="md:mt-8 md:text-md">{study.description}</p>
        {study.tags?.length > 0 && (
          <ul className="flex flex-wrap gap-2 md:mt-4">
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
        <div className="order-3 flex flex-wrap items-center gap-4 md:order-none md:mt-8">
          {study.buttons.map((button, index) => (
            <Button key={index} {...button} className="w-full md:w-auto">
              {button.title}
            </Button>
          ))}
          <WorkLinks title={study.heading} links={study.links} />
        </div>
      </div>
      <div className="order-2 md:order-none">
        <img
          src={study.image.src}
          alt={study.image.alt}
          loading="lazy"
          decoding="async"
          className="aspect-[3/2] w-full object-cover"
        />
      </div>
    </div>
  );
};

const CaseStudySection = (props) => {
  const { tagline, heading, description, studies } = {
    ...CaseStudySectionDefaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
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
        <div className="mt-12 flex justify-center md:mt-16">
          <Button
            variant="link"
            size="link"
            url="/work"
            iconRight={<RxChevronRight />}
            className="min-h-11"
          >
            See all work
          </Button>
        </div>
      </div>
    </section>
  );
};

export const CaseStudySectionDefaults = {
  tagline: "Work",
  heading: "Selected work",
  studies: work
    .filter((item) => item.home)
    .map((item) => ({
      tagline: item.tagline,
      heading: item.title,
      description: item.summary,
      result: item.result,
      links: item.links,
      tags: item.tags,
      buttons: [
        {
          title: "Read Case Study",
          variant: "secondary",
          iconRight: <RxChevronRight />,
          url: item.href,
        },
      ],
      image: item.image,
    })),
};

export default CaseStudySection;
