import { Link } from "react-router";
import SideRays from "../SideRays";
import GradientWaves from "../GradientWaves";

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

const CtaSection = (props) => {
  const { heading, description, buttons, showRays } = {
    ...CtaSectionDefaults,
    ...props,
  };

  const content = (
    <>
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
    </>
  );

  if (showRays) {
    return (
      <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="page-container">
          <div className="relative overflow-hidden rounded-lg border border-text-primary/10 bg-text-primary/5 px-6 py-12 text-center md:px-12 md:py-16 lg:px-16 lg:py-20">
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
            <div className="relative z-10">{content}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
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
  description: "Let's build something great together.",
  buttons: [{ title: "Contact Me", url: "/contact" }],
  showRays: false,
};

export default CtaSection;
