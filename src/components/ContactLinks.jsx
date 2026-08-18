import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import {
  BiEnvelope,
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiCopy,
  BiCheck,
} from "react-icons/bi";
import ericLinkedinProfileImage from "../assets/eric-linkedin-profile.jpeg";

const linkRowClasses =
  "flex w-full items-center gap-x-4 rounded-lg border border-border-primary p-3 transition-colors";

const brandStyle = (link) =>
  link.bgColor
    ? {
        backgroundColor: link.bgColor,
        borderColor: link.bgColor,
        color: link.textColor ?? "#ffffff",
      }
    : undefined;

const CopyLink = ({ link }) => {
  const [copied, setCopied] = useState(false);
  const email = link.url.slice("mailto:".length);

  const handleClick = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${linkRowClasses} justify-between`}
    >
      <span className="flex items-center gap-x-4">
        {link.icon}
        <p>{copied ? "Copied!" : link.title}</p>
      </span>
      {copied ? (
        <BiCheck className="size-5 shrink-0 text-accent" />
      ) : (
        <BiCopy className="size-5 shrink-0 text-text-primary/50" />
      )}
    </button>
  );
};

const Category = ({ heading, links, layout = "stack" }) => (
  <div className="flex flex-col items-center gap-4">
    {heading && (
      <h3 className="text-md font-bold leading-[1.4] md:text-xl">{heading}</h3>
    )}
    <div
      className={
        layout === "row"
          ? "flex items-center justify-center gap-4"
          : "flex w-full flex-col gap-4"
      }
    >
      {links.map((link, index) =>
        link.url.startsWith("mailto:") ? (
          <CopyLink key={index} link={link} />
        ) : (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            aria-label={link.title}
            className={
              layout === "row"
                ? "flex size-14 items-center justify-center rounded-full border border-border-primary transition-opacity hover:opacity-90"
                : `${linkRowClasses} justify-center ${link.bgColor ? "hover:opacity-90" : ""}`
            }
            style={brandStyle(link)}
          >
            {link.icon}
            {layout !== "row" && <p>{link.title}</p>}
          </a>
        ),
      )}
    </div>
  </div>
);

const ContactLinks = (props) => {
  const { author, categories } = {
    ...ContactLinksDefaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="page-container">
        <div className="mx-auto max-w-md text-center">
          <div className="mb-10 flex flex-col items-center gap-4 md:mb-14 lg:mb-16">
            <img
              src={author.avatar.src}
              alt={author.avatar.alt}
              className="size-24 rounded-full object-cover"
            />
            <div>
              <h2 className="mb-2 text-xl font-bold md:text-2xl">
                {author.fullName}
              </h2>
              <p>{author.position}</p>
              <p className="mt-2 text-text-primary/70">{author.bio}</p>
            </div>
          </div>
          <div className="space-y-8">
            {categories.map((category, index) => (
              <Category key={index} {...category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactLinksDefaults = {
  author: {
    avatar: {
      src: ericLinkedinProfileImage,
      alt: "Eric Tan avatar",
    },
    fullName: "Eric Tan",
    position: "Design-Minded Design Engineer",
    bio: "Designing and building products end to end, Singapore 🇸🇬.",
  },
  categories: [
    {
      links: [
        {
          url: "mailto:eric.tanms@gmail.com",
          title: "eric.tanms@gmail.com",
          icon: <BiEnvelope className="size-8" />,
        },
        {
          url: "https://www.linkedin.com/in/ericistan",
          title: "LinkedIn",
          icon: <BiLogoLinkedinSquare className="size-8" />,
          bgColor: "#0A66C2",
          textColor: "#ffffff",
        },
      ],
    },
    {
      heading: "Connect",
      layout: "row",
      links: [
        {
          url: "https://github.com/ericistan",
          title: "GitHub",
          icon: <BiLogoGithub className="size-7" />,
          bgColor: "#ffffff",
          textColor: "#000000",
        },
        {
          url: "https://x.com/ericistan",
          title: "X",
          icon: <FaXTwitter className="size-6" />,
          bgColor: "#ffffff",
          textColor: "#000000",
        },
      ],
    },
  ],
};

export default ContactLinks;
