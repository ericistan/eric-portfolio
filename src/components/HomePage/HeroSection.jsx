import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Briefcase, Code } from "@phosphor-icons/react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import StrokeText from "../StrokeText";
import sfProfileImage from "../../assets/sf-profile.webp";
import fbProfileImage from "../../assets/fb-profile-pic.webp";
import etDesignerProfileImage from "../../assets/eric-designer-profile.webp";
import ericProfileMic from "../../assets/eric-speaking.webp";

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

// Picks one font size that fits every heading in `headings` on a single
// line within `containerRef`'s rendered width, so every tab renders its
// heading at the exact same size instead of each shrinking independently.
const useUniformHeadingSize = (headings, containerRef) => {
  const [size, setSize] = useState(getHeadingSize);

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
  className = "",
  children,
  ...props
}) => {
  const classes = `inline-flex items-center justify-center rounded-lg transition-colors ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`;

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

const TabsContext = createContext(null);

const Tabs = ({ defaultValue, children }) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      {children}
    </TabsContext.Provider>
  );
};

const TabsList = ({ className = "", children }) => (
  <div role="tablist" className={`flex ${className}`}>
    {children}
  </div>
);

const TabsTrigger = ({ value, icon, className = "", children }) => {
  const { value: activeValue, setValue } = useContext(TabsContext);
  const isActive = activeValue === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      onClick={() => setValue(value)}
      className={`inline-flex items-center gap-2 border-0 border-b-[1.5px] border-text-primary/20 px-0 py-2 text-text-primary/50 transition-colors data-[state=active]:border-border-primary data-[state=active]:text-text-primary ${className}`}
    >
      {icon}
      {children}
    </button>
  );
};

const TabsContent = ({ tabs, allHeadings, className = "" }) => {
  const { value } = useContext(TabsContext);
  const activeTab = tabs.find((tab) => tab.value === value);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={value}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={className}
      >
        {activeTab?.content.map((feature, featureIndex) => (
          <Feature key={featureIndex} {...feature} allHeadings={allHeadings} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

const Feature = (feature) => {
  const containerRef = useRef(null);
  const headingSize = useUniformHeadingSize(feature.allHeadings, containerRef);

  return (
    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
      <div className="max-w-lg" ref={containerRef}>
        <p className="mb-3 font-mono font-semibold md:mb-4">
          {feature.tagline}
        </p>
        <div className="mb-5 md:mb-6">
          <StrokeText
            text={feature.heading}
            strokeColor="#4ade80"
            fillColor="#4ade80"
            strokeWidth={headingSize.strokeWidth}
            drawDuration={0.5}
            fillDelay={0.5}
            stagger={0.025}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            fontSize={headingSize.fontSize}
            fontWeight={HEADING_FONT_WEIGHT}
            letterSpacing={headingSize.letterSpacing}
            reverse={false}
          />
        </div>
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
        className="w-full rounded-lg object-cover"
        alt={feature.image.alt}
      />
    </div>
  );
};

const HeroSection = (props) => {
  const { defaultTabValue, tabs } = {
    ...HeroSectionDefaults,
    ...props,
  };

  const allHeadings = useMemo(
    () => tabs.flatMap((tab) => tab.content.map((feature) => feature.heading)),
    [tabs],
  );

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="page-container">
        <Tabs defaultValue={defaultTabValue}>
          <TabsList className="mb-12 gap-6 overflow-x-auto whitespace-nowrap md:mb-16">
            {tabs.map((tab, index) => (
              <TabsTrigger key={index} value={tab.value} icon={tab.icon}>
                {tab.trigger}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent tabs={tabs} allHeadings={allHeadings} />
        </Tabs>
      </div>
    </section>
  );
};

export const HeroSectionDefaults = {
  defaultTabValue: "anyone",
  tabs: [
    {
      value: "anyone",
      trigger: "For Anyone",
      icon: <Globe className="size-4" />,
      content: [
        {
          tagline: "Design & Code built in one",
          heading: "Design led. Code shipped.",
          description:
            "I design and build products end to end. Four years shaping user experience, now writing the code that brings it to life.",
          buttons: [
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
        },
      ],
    },
    {
      value: "recruiters",
      trigger: "Recruiters",
      icon: <Briefcase className="size-4" />,
      content: [
        {
          tagline: "Open to Opportunities",
          heading: "Frontend engineer with a design background.",
          description:
            "4+ years designing products before I learned to build them. Now I ship frontend features fast, and I know why they should look right too.",
          buttons: [
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
            src: ericProfileMic,
            alt: "Eric Tan speaking at a conference",
          },
        },
      ],
    },
    {
      value: "engineers",
      trigger: "Designer x Engineer",
      icon: <Code className="size-4" />,
      content: [
        {
          tagline: "Design-Minded Engineer",
          heading: "I bring UX instincts to every line I write.",
          description:
            "I've been the designer who loves to tinker with code. Now I build what I design myself, pixel to production, with the same eye for structure and detail I learned from design systems.",
          buttons: [
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
            src: fbProfileImage,
            alt: "Eric at Facebook HQ",
          },
        },
      ],
    },
  ],
};

export default HeroSection;
