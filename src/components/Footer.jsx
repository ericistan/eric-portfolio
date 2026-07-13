import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { Link } from "react-router";

const Footer = (props) => {
  const { footerText, columnLinks, socialMediaLinks } = {
    ...FooterDefaults,
    ...props,
  };

  return (
    <footer id="relume" className="mt-auto px-[5%] py-12 md:py-18 lg:py-20">
      <div className="page-container">
        <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <p>{footerText}</p>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
            {columnLinks.map((column, index) => (
              <ul key={index} className="flex flex-wrap items-center justify-center gap-6">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="font-semibold">
                    <Link to={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            ))}
            <div className="flex items-center gap-x-3">
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const FooterDefaults = {
  columnLinks: [
    {
      links: [
        { title: "Home", url: "/" },
        { title: "About", url: "/about" },
        { title: "Contact", url: "/contact" },
      ],
    },
  ],
  socialMediaLinks: [
    { url: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
    { url: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
  ],
  footerText: "Built with ❤️ by Eric Tan. © 2026 All rights reserved.",
};

export default Footer;
