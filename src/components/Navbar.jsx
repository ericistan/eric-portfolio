import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiLogoLinkedinSquare, BiLogoGithub } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useLocation } from "react-router";
import { useLenis } from "lenis/react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = () => setMatches(mediaQueryList.matches);
    listener();
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

export const Navbar = (props) => {
  const { logo, navLinks, linkedinUrl, xUrl, githubUrl } = {
    ...Navbar1Defaults,
    ...props,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1199px)");
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSamePageClick = (url) => (e) => {
    if (location.pathname !== url) return;
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  };

  return (
    <header
      className="sticky top-0 z-[999] flex w-full items-center border-b border-text-primary/10 bg-background-primary lg:min-h-18"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="page-container size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between md:min-h-18 lg:min-h-full">
          <Link
            to={logo.url}
            onClick={handleSamePageClick(logo.url)}
            className="font-heading text-xl font-bold"
          >
            {logo.text}
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="site-menu"
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-text-primary"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={topLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-text-primary"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={middleLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-text-primary"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={bottomLineVariants}
            />
          </button>
        </div>
        <motion.div
          id="site-menu"
          inert={isMobile && !isMobileMenuOpen}
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          initial="close"
          exit="close"
          animate={isMobileMenuOpen ? "open" : "close"}
          transition={{ duration: 0.25 }}
          className="overflow-hidden lg:flex lg:items-center lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <nav aria-label="Primary" className="contents">
            {navLinks.map((navLink, index) => (
              <Link
                key={index}
                to={navLink.url}
                onClick={handleSamePageClick(navLink.url)}
                className="block py-3 font-mono text-md text-text-primary transition-colors duration-300 ease-in-out first:pt-7 hover:text-accent lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
              >
                {navLink.title}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex items-center justify-center gap-4 lg:ml-4 lg:mt-0">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="-m-2 inline-flex items-center justify-center p-2 text-text-primary transition-colors duration-300 ease-in-out hover:text-accent"
            >
              <BiLogoGithub className="size-7" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="-m-2 inline-flex items-center justify-center p-2 text-text-primary transition-colors duration-300 ease-in-out hover:text-accent"
            >
              <BiLogoLinkedinSquare className="size-7" />
            </a>
            <a
              href={xUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="-m-2 inline-flex items-center justify-center p-2 text-text-primary transition-colors duration-300 ease-in-out hover:text-accent"
            >
              <FaXTwitter className="size-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export const Navbar1Defaults = {
  logo: {
    url: "/",
    text: "Eric Tan",
  },
  navLinks: [
    { title: "Home", url: "/" },
    { title: "Contact", url: "/contact" },
  ],
  linkedinUrl: "https://www.linkedin.com/in/ericistan",
  xUrl: "https://x.com/ericistan",
  githubUrl: "https://github.com/ericistan",
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

export default Navbar;
