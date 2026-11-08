import { useEffect, useState } from "react";
import { Link } from "react-router";
import { BiCheck, BiCopy, BiLogoLinkedinSquare } from "react-icons/bi";
import GradientWaves from "../GradientWaves";

const EMAIL = "eric.tanms@gmail.com";

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
  iconLeft,
  href,
  url,
  className = "",
  children,
  ...props
}) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg transition-colors ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`;

  if (url) {
    return (
      <Link to={url} className={classes} {...props}>
        {iconLeft}
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {iconLeft}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {iconLeft}
      {children}
    </button>
  );
};

const CopyEmailButton = ({ className }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {copied ? <BiCheck className="size-5" /> : <BiCopy className="size-5" />}
      {copied ? "Copied" : EMAIL}
      <span aria-live="polite" className="sr-only">
        {copied ? "Email copied" : ""}
      </span>
    </button>
  );
};

const CtaSection = (props) => {
  const { heading, description, buttons } = {
    ...CtaSectionDefaults,
    ...props,
  };

  const content = (
    <>
      <h2 className="mb-5 text-2xl font-bold text-accent md:mb-6 md:text-3xl lg:text-4xl">
        {heading}
      </h2>
      <p className="text-md">{description}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
        <CopyEmailButton
          className={`inline-flex min-w-64 items-center justify-center gap-2 rounded-lg transition-colors ${buttonVariants.primary} ${buttonSizes.md}`}
        />
        {buttons.map((button, index) => (
          <Button key={index} {...button}>
            {button.title}
          </Button>
        ))}
      </div>
    </>
  );

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="page-container max-w-full">
        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-lg text-center md:min-h-[520px]">
          <div className="absolute inset-0 z-0">
            <GradientWaves
              horizonColor="#000000"
              waveColor="#4ade80"
              crestColor="#96c8ff"
              speed={0.4}
              amplitude={2.5}
              waveScale={0.6}
              waveRatio={0.9}
              swell={35}
              turbulence={20}
              tilt={1.11}
              zoom={1}
              height={5.5}
              fogDepth={15}
              detail="medium"
              brightness={1}
              opacity={1}
              mouseInteraction
              parallaxStrength={0.5}
              grain
              grainIntensity={0.05}
            />
          </div>
          <div className="relative z-10 px-6 md:px-12">{content}</div>
        </div>
      </div>
    </section>
  );
};

export const CtaSectionDefaults = {
  heading: "Like what you see? Let's work together.",
  description:
    "Open to design engineer roles. Email or LinkedIn is fastest: click to copy my address.",
  buttons: [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/ericistan",
      target: "_blank",
      rel: "noreferrer",
      variant: "secondary",
      iconLeft: <BiLogoLinkedinSquare className="size-5" />,
    },
  ],
};

export default CtaSection;
