import { useEffect, useMemo, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { Link } from "react-router";
import { RxChevronLeft } from "react-icons/rx";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import LineSidebar from "./LineSidebar/LineSidebar";
import PageLoader from "./PageLoader";
import CtaSection from "./HomePage/CtaSection.jsx";
import CaseStudyImage from "./CaseStudyImage.jsx";
import BackToTopButton from "./BackToTopButton.jsx";

const CaseStudyLayout = ({
  header,
  sections,
  githubUrl,
  githubLabel = "GitHub Repo",
  githubIcon = <GithubLogo className="size-5" weight="fill" />,
  liveUrl,
}) => {
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const lenis = useLenis();

  const items = useMemo(
    () => sections.map((section) => section.label),
    [sections],
  );

  const ctaButtons = useMemo(() => {
    const buttons = [];
    if (githubUrl) {
      buttons.push({
        title: githubLabel,
        href: githubUrl,
        target: "_blank",
        rel: "noreferrer",
        variant: "secondary",
        iconLeft: githubIcon,
      });
    }
    if (liveUrl) {
      buttons.push({
        title: "Live Website",
        href: liveUrl,
        target: "_blank",
        rel: "noreferrer",
        variant: "secondary",
        iconLeft: <ArrowSquareOut className="size-5" />,
      });
    }
    buttons.push({ title: "Contact Me", url: "/contact" });
    return buttons;
  }, [githubUrl, githubLabel, githubIcon, liveUrl]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = sectionRefs.current.indexOf(entry.target);
          if (index !== -1) setActiveIndex(index);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const handleItemClick = (index) => {
    const target = sectionRefs.current[index];
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target, { offset: -100 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {header && <PageLoader title={header.heading} />}

      <div className="bg-background-primary px-[5%] pt-8 text-text-primary">
        <div className="page-container">
          <Link
            to="/"
            className="inline-flex items-center gap-1 font-mono text-sm text-text-primary/60 transition-colors hover:text-text-primary"
          >
            <RxChevronLeft className="size-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {header && (
        <section className="bg-background-primary px-[5%] py-16 text-text-primary md:py-24 lg:py-28">
          <div className="page-container">
            <div className="mb-12 grid grid-cols-1 items-start gap-12 lg:mb-20 lg:grid-cols-[1.5fr_1fr] lg:gap-x-20">
              <header>
                <h1 className="mb-5 text-5xl font-semibold md:mb-6 md:text-7xl lg:text-8xl">
                  {header.heading}
                </h1>
                <p className="text-md text-text-primary/70">{header.description}</p>
                {header.tags?.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2 md:mt-6">
                    {header.tags.map((tag, index) => (
                      <li key={index} className="flex">
                        {tag.url ? (
                          <a
                            href={tag.url}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-text-primary/10 px-2 py-1 font-mono text-sm font-semibold text-text-primary/80 transition-colors hover:bg-text-primary/20"
                          >
                            {tag.label}
                          </a>
                        ) : (
                          <span className="bg-text-primary/10 px-2 py-1 font-mono text-sm font-semibold text-text-primary/80">
                            {tag.label}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </header>
              <div className="grid grid-cols-2 gap-8">
                {header.details.map((detail, index) => (
                  <div key={index}>
                    <h3 className="mb-2 flex items-center gap-2 text-base font-bold leading-[1.4] text-text-primary md:text-xl">
                      {detail.icon}
                      {detail.label}
                    </h3>
                    {detail.url ? (
                      <a
                        href={detail.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-text-primary/70 underline underline-offset-2 hover:text-text-primary"
                      >
                        {detail.description}
                      </a>
                    ) : (
                      <p className="text-text-primary/70">{detail.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <CaseStudyImage
                src={header.image.src}
                alt={header.image.alt}
                className="object-cover"
                spacing={false}
              />
            </div>
          </div>
        </section>
      )}

      <section className="bg-background-primary px-[5%] py-16 text-text-primary md:py-24">
        <div className="page-container flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <aside className="top-32 hidden shrink-0 lg:sticky lg:block lg:w-56">
            <LineSidebar
              items={items}
              activeIndex={activeIndex}
              onItemClick={handleItemClick}
              accentColor="var(--color-accent)"
              textColor="var(--color-text-primary)"
              markerColor="color-mix(in srgb, var(--color-text-primary) 30%, transparent)"
              showIndex
              showMarker
              markerLength={40}
              itemGap={20}
              fontSize={1}
            />
          </aside>
          <div className="min-w-0 flex-1 space-y-16">
            {sections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="scroll-mt-28"
              >
                <h2 className="mb-5 text-4xl font-medium text-accent md:text-5xl">
                  {section.label}
                </h2>
                <div className="space-y-4 text-text-primary/70 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-text-primary [&_img]:w-full [&_img]:max-w-xl [&_img]:object-cover [&_li]:ml-5 [&_li]:list-disc [&_p:first-of-type]:text-lg [&_p:first-of-type]:text-text-primary [&_strong]:font-semibold [&_strong]:text-text-primary">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="Want to see more?"
        description="Check out the code, try it live, or get in touch if you'd like to work together."
        buttons={ctaButtons}
      />

      <BackToTopButton />
    </>
  );
};

export default CaseStudyLayout;
