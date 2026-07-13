import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BiEnvelope, BiLogoLinkedinSquare } from "react-icons/bi";

const linkRowClasses =
  "flex w-full items-center justify-center gap-x-4 border border-border-primary p-3";

const CopyLink = ({ link }) => {
  const [copied, setCopied] = useState(false);
  const email = link.url.slice("mailto:".length);

  const handleClick = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button type="button" onClick={handleClick} className={linkRowClasses}>
      {link.icon}
      <p>{copied ? "Copied!" : link.title}</p>
    </button>
  );
};

const Category = ({ heading, links }) => (
  <div className="flex flex-col items-center gap-4">
    {heading && (
      <h3 className="text-md font-bold leading-[1.4] md:text-xl">{heading}</h3>
    )}
    {links.map((link, index) =>
      link.url.startsWith("mailto:") ? (
        <CopyLink key={index} link={link} />
      ) : (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className={linkRowClasses}
        >
          {link.icon}
          <p>{link.title}</p>
        </a>
      ),
    )}
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
      src: "https://placehold.co/200x200?text=Eric",
      alt: "Eric Tan avatar",
    },
    fullName: "Eric Tan",
    position: "Full-Stack Engineer",
  },
  categories: [
    {
      links: [
        {
          url: "mailto:eric.tanms@gmail.com",
          title: "eric.tanms@gmail.com",
          icon: <BiEnvelope className="size-8" />,
        },
      ],
    },
    {
      heading: "Connect",
      links: [
        {
          url: "https://www.linkedin.com/in/ericistan",
          title: "LinkedIn",
          icon: <BiLogoLinkedinSquare className="size-8" />,
        },
        {
          url: "https://x.com/ericistan",
          title: "X",
          icon: <FaXTwitter className="size-6 p-1" />,
        },
      ],
    },
  ],
};

export default ContactLinks;
