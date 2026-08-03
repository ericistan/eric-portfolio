import { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Briefcase, Code } from "@phosphor-icons/react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import sfProfileImage from "../../assets/sf-profile.jpg";
import fbProfileImage from "../../assets/fb-profile-pic.png";
import etDesignerProfileImage from "../../assets/eric-designer-profile.jpg";
import etNFT from "../../assets/coolPetsMyNFT.png";
import ericProfileMic from "../../assets/eric-speaking.jpg";

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

const TabsContent = ({ tabs, className = "" }) => {
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
          <Feature key={featureIndex} {...feature} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

const Feature = (feature) => {
  return (
    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
      <div className="max-w-lg">
        <p className="mb-3 font-mono font-semibold md:mb-4">
          {feature.tagline}
        </p>
        <h2 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl">
          {feature.heading}
        </h2>
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
          <TabsContent tabs={tabs} />
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
            "I design and build products end to end. Three years shaping user experience, now writing the code that brings it to life.",
          buttons: [
            {
              title: "LinkedIn",
              href: "#",
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
            "3+ years designing products before I learned to build them. Now I ship frontend features fast, and I know why they should look right too.",
          buttons: [
            {
              title: "LinkedIn",
              href: "#",
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
          heading: "I bring design instincts to every line I write.",
          description:
            "I've been the designer who loves to tinker with code. Now I build what I design myself, pixel to production, with the same eye for structure and detail I learned from design systems.",
          buttons: [
            {
              title: "LinkedIn",
              href: "#",
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
