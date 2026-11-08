import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import StrokeText from "../StrokeText";
import etDesignerProfileImage from "../../assets/eric-designer-profile.webp";

const HEADING_SIZES = {
  base: { fontSize: 28, strokeWidth: 0.85, letterSpacing: -0.9 },
  md: { fontSize: 42, strokeWidth: 1.2, letterSpacing: -1.3 },
  lg: { fontSize: 56, strokeWidth: 1.45, letterSpacing: -1.6 },
};

const getHeadingSize = () => {
  if (typeof window === "undefined") return HEADING_SIZES.base;
  if (window.matchMedia("(min-width: 1024px)").matches) return HEADING_SIZES.lg;
  if (window.matchMedia("(min-width: 768px)").matches) return HEADING_SIZES.md;
  return HEADING_SIZES.base;
};

const HEADING_FONT_WEIGHT = 600;

// Picks a font size that fits every heading in `headings` on a single
// line within `containerRef`'s rendered width.
const useUniformHeadingSize = (headings, containerRef) => {
  const [size, setSize] = useState(HEADING_SIZES.base);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !headings?.length) return undefined;

    const compute = () => {
      const target = getHeadingSize();
      const containerWidth = container.getBoundingClientRect().width;
      if (!containerWidth) {
        setSize(target);
        return;
      }

      const fontFamily =
        window.getComputedStyle(container).fontFamily || "sans-serif";
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.font = `${HEADING_FONT_WEIGHT} ${target.fontSize}px ${fontFamily}`;

      const widest = headings.reduce((max, heading) => {
        const charCount = Array.from(heading).length;
        const width =
          ctx.measureText(heading).width +
          target.letterSpacing * Math.max(charCount - 1, 0);
        return Math.max(max, width);
      }, 0);

      const scale =
        widest > containerWidth ? (containerWidth / widest) * 0.97 : 1;
      setSize({
        fontSize: target.fontSize * scale,
        strokeWidth: target.strokeWidth * scale,
        letterSpacing: target.letterSpacing * scale,
      });
    };

    compute();

    const resizeObserver = new ResizeObserver(compute);
    resizeObserver.observe(container);
    const mdQuery = window.matchMedia("(min-width: 768px)");
    const lgQuery = window.matchMedia("(min-width: 1024px)");
    mdQuery.addEventListener("change", compute);
    lgQuery.addEventListener("change", compute);

    return () => {
      resizeObserver.disconnect();
      mdQuery.removeEventListener("change", compute);
      lgQuery.removeEventListener("change", compute);
    };
  }, [headings, containerRef]);

  return size;
};

const buttonVariants = {
  primary: "bg-text-primary text-background-primary hover:bg-text-primary/90",
  secondary:
    "border border-text-primary bg-transparent text-text-primary hover:bg-text-primary/5",
  link: "text-text-primary underline-offset-4 hover:underline",
  linkedin: "bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90",
};

const buttonSizes = {
  sm: "gap-1.5 px-5 py-2 text-sm",
  md: "gap-2 px-6 py-3 text-base",
  link: "gap-1 px-0 py-0 text-sm",
};

const Button = ({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
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
        {iconLeft}
        {children}
        {iconRight}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {iconLeft}
        {children}
        {iconRight}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
};

const INTRO_KEY = "hero-intro-played";

// The heading draws itself on the first visit of a session only; after that
// it renders finished, so returning to the home page doesn't replay it.
const useIntroOnce = () => {
  const [playIntro] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      return sessionStorage.getItem(INTRO_KEY) !== "1";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      // Storage unavailable (private mode); the intro just replays.
    }
  }, []);

  return playIntro;
};

const Feature = (feature) => {
  const containerRef = useRef(null);
  const playIntro = useIntroOnce();
  const headings = useMemo(() => [feature.heading], [feature.heading]);
  const headingSize = useUniformHeadingSize(headings, containerRef);

  return (
    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
      <div className="max-w-lg" ref={containerRef}>
        <p className="mb-3 font-mono font-semibold md:mb-4">
          {feature.tagline}
        </p>
        <h1 className="mb-5 font-sans md:mb-6">
          <span className="sr-only">{feature.heading}</span>
          <StrokeText
            decorative
            text={feature.heading}
            strokeColor="#4ade80"
            fillColor="#4ade80"
            strokeWidth={headingSize.strokeWidth}
            drawDuration={0.5}
            fillDelay={0.5}
            stagger={0.025}
            ease="power2.out"
            trigger={playIntro ? "mount" : "static"}
            fillMode="wipe"
            fontSize={headingSize.fontSize}
            fontWeight={HEADING_FONT_WEIGHT}
            letterSpacing={headingSize.letterSpacing}
            reverse={false}
          />
        </h1>
        <p className="text-md">{feature.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          {feature.buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <img
        src={feature.image.src}
        className="aspect-square w-full rounded-lg object-cover"
        alt={feature.image.alt}
        fetchPriority="high"
        decoding="async"
      />
    </div>
  );
};

const HeroSection = (props) => {
  const feature = {
    ...HeroSectionDefaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="page-container">
        <Feature {...feature} />
      </div>
    </section>
  );
};

export const HeroSectionDefaults = {
  tagline: "Design Engineer · Singapore",
  heading: "Design led. Code shipped.",
  description:
    "Design engineer at Zenko.gg, a gaming platform, where I started in UX/UI and now build the front-end too. Before that, I co-founded Metafyed as its UX/UI designer and built Webflow sites for founders, including Culminate Security (acquired by Datadog).",
  buttons: [
    {
      title: "See my work",
      url: "/work",
      variant: "primary",
      iconRight: <RxChevronRight />,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/ericistan",
      target: "_blank",
      rel: "noreferrer",
      variant: "linkedin",
      iconLeft: <BiLogoLinkedinSquare className="size-6" />,
    },
  ],
  image: {
    src: etDesignerProfileImage,
    alt: "Eric Tan's designer profile picture",
  },
};

export default HeroSection;
