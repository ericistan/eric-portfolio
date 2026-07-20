import { Link } from "react-router";

const buttonVariants = {
  primary: "bg-text-primary text-background-primary hover:bg-text-primary/90",
  secondary:
    "border border-text-primary bg-transparent text-text-primary hover:bg-text-primary/5",
};

const buttonSizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-base",
};

const Button = ({
  variant = "primary",
  size = "md",
  href,
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
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

const CtaSection = (props) => {
  const { heading, description, buttons } = {
    ...CtaSectionDefaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="page-container max-w-full text-center">
        <h2 className="mb-5 text-2xl font-bold text-accent md:mb-6 md:text-3xl lg:text-4xl">
          {heading}
        </h2>
        <p className="text-md">{description}</p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CtaSectionDefaults = {
  heading: "Like what you see? Let's work together.",
  description: "Let's build something great together.",
  buttons: [{ title: "Contact Me", url: "/contact" }],
};

export default CtaSection;
