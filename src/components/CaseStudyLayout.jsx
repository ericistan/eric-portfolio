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
    className="block border border-white/10 transition-colors hover:border-white/30"
  >
    <img src={image.src} alt={image.alt} className="w-full object-cover" />
    <div className="p-5 sm:p-6">
      <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">{title}</h3>
      <p className="text-white/70">{description}</p>
      {tags?.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-white/10 px-2 py-1 text-sm font-semibold text-white/80"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-500 md:mt-6">
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

      <div className="bg-black px-[5%] pt-8 text-white">
        <div className="page-container">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
          >
            <RxChevronLeft className="size-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {header && (
        <section className="bg-black px-[5%] py-16 text-white md:py-24 lg:py-28">
          <div className="page-container">
            <div className="mb-12 grid grid-cols-1 items-start gap-12 lg:mb-20 lg:grid-cols-[1.5fr_1fr] lg:gap-x-20">
              <header>
                <h1 className="mb-5 text-5xl font-semibold md:mb-6 md:text-7xl lg:text-8xl">
                  {header.heading}
                </h1>
                <p className="text-md text-white/70">{header.description}</p>
                {header.tags?.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2 md:mt-6">
                    {header.tags.map((tag, index) => (
                      <li key={index} className="flex">
                        {tag.url ? (
                          <a
                            href={tag.url}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white/10 px-2 py-1 text-sm font-semibold text-white/80 transition-colors hover:bg-white/20"
                          >
                            {tag.label}
                          </a>
                        ) : (
                          <span className="bg-white/10 px-2 py-1 text-sm font-semibold text-white/80">
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
                    <h3 className="mb-2 flex items-center gap-2 text-base font-bold leading-[1.4] text-white md:text-xl">
                      {detail.icon}
                      {detail.label}
                    </h3>
                    {detail.url ? (
                      <a
                        href={detail.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/70 underline underline-offset-2 hover:text-white"
                      >
                        {detail.description}
                      </a>
                    ) : (
                      <p className="text-white/70">{detail.description}</p>
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

      <section className="bg-black px-[5%] py-16 text-white md:py-24">
        <div className="page-container flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <aside className="top-32 hidden shrink-0 lg:sticky lg:block lg:w-56">
            <LineSidebar
              items={items}
              activeIndex={activeIndex}
              onItemClick={handleItemClick}
              accentColor="#3b82f6"
              textColor="#e5e5e5"
              markerColor="#4b5563"
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
                <h2 className="mb-5 text-4xl font-medium text-blue-500 md:text-5xl">
                  {section.label}
                </h2>
                <div className="space-y-4 text-white/70 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_img]:w-full [&_img]:max-w-xl [&_img]:object-cover [&_li]:ml-5 [&_li]:list-disc [&_p:first-of-type]:text-lg [&_p:first-of-type]:text-white [&_strong]:font-semibold [&_strong]:text-white">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedProjects?.projects?.length > 0 && (
        <section className="bg-black px-[5%] py-16 text-white md:py-24 lg:py-28">
          <div className="page-container">
            <div className="mx-auto mb-12 max-w-lg text-center md:mb-16 lg:mb-20">
              <p className="mb-3 font-semibold text-white/70">
                {relatedProjects.tagline}
              </p>
              <h2 className="mb-5 text-4xl font-bold text-blue-500 md:text-5xl">
                {relatedProjects.heading}
              </h2>
              <p className="text-white/70">{relatedProjects.description}</p>
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
                  className="inline-flex items-center justify-center rounded border border-white/20 px-6 py-3 text-base transition-colors hover:bg-white/10"
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
