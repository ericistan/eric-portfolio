import { useEffect, useMemo, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { Link } from "react-router";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import LineSidebar from "./LineSidebar/LineSidebar";
import PageLoader from "./PageLoader";
import CtaSection from "./HomePage/CtaSection.jsx";
import CaseStudyImage from "./CaseStudyImage.jsx";

const ProjectCard = ({ title, description, image, url, tags }) => (
  <Link
    to={url}
    className="block overflow-hidden rounded-lg border border-text-primary/10 transition-colors hover:border-text-primary/30"
  >
    <img src={image.src} alt={image.alt} className="w-full object-cover" />
    <div className="p-5 sm:p-6">
      <h3 className="mb-2 text-xl font-bold text-text-primary md:text-2xl">{title}</h3>
      <p className="text-text-primary/70">{description}</p>
      {tags?.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-text-primary/10 px-2 py-1 font-mono text-sm font-semibold text-text-primary/80"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
      <span className="mt-5 inline-flex items-center gap-1 font-mono text-sm font-semibold text-accent md:mt-6">
        View project
        <RxChevronRight />
      </span>
    </div>
  </Link>
);

const CaseStudyLayout = ({ header, sections, relatedProjects }) => {
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const lenis = useLenis();

  const items = useMemo(
    () => sections.map((section) => section.label),
    [sections],
  );

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

      {relatedProjects?.projects?.length > 0 && (
        <section className="bg-background-primary px-[5%] py-16 text-text-primary md:py-24 lg:py-28">
          <div className="page-container">
            <div className="mx-auto mb-12 max-w-lg text-center md:mb-16 lg:mb-20">
              <p className="mb-3 font-mono font-semibold text-text-primary/70">
                {relatedProjects.tagline}
              </p>
              <h2 className="mb-5 text-4xl font-bold text-accent md:text-5xl">
                {relatedProjects.heading}
              </h2>
              <p className="text-text-primary/70">{relatedProjects.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-12">
              {relatedProjects.projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
            {relatedProjects.button && (
              <div className="mt-12 flex justify-center md:mt-16 lg:mt-20">
                <Link
                  to={relatedProjects.button.url}
                  className="inline-flex items-center justify-center rounded-lg border border-text-primary/20 px-6 py-3 text-base transition-colors hover:bg-text-primary/10"
                >
                  {relatedProjects.button.title}
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
      <CtaSection />
    </>
  );
};

export default CaseStudyLayout;
