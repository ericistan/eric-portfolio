import { Link, useLocation } from "react-router";
import { RxChevronRight } from "react-icons/rx";
import { work } from "../data/work";

const caseStudies = work.filter((entry) => entry.href?.startsWith("/case-study/"));

// Ends every case study with the others, so a reader who finished one has
// somewhere to go before the contact CTA.
const MoreCaseStudies = () => {
  const { pathname } = useLocation();
  const others = caseStudies.filter((entry) => entry.href !== pathname.replace(/\/$/, ""));

  if (others.length === 0) return null;

  return (
    <section aria-labelledby="more-case-studies" className="px-[5%] pt-16 md:pt-24 lg:pt-28">
      <div className="page-container">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10">
          <div>
            <p className="mb-3 font-mono font-semibold">Keep reading</p>
            <h2 id="more-case-studies" className="text-3xl font-bold md:text-4xl">
              More case studies
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex min-h-10 items-center gap-1 font-semibold text-accent underline decoration-transparent underline-offset-4 transition-[text-decoration-color] hover:decoration-current"
          >
            See all work
            <RxChevronRight aria-hidden="true" />
          </Link>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {others.map((entry) => (
            <li key={entry.slug}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border-subtle bg-surface-primary transition-colors hover:border-border-strong">
                {entry.image && (
                  <img
                    src={entry.image.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover object-top"
                  />
                )}
                <div className="flex flex-1 flex-col p-6">
                  {entry.tagline && (
                    <p className="mb-2 font-mono text-sm font-semibold">{entry.tagline}</p>
                  )}
                  <h3 className="mb-3 text-2xl font-bold leading-[1.2]">
                    {/* The title link stretches over the card so the whole card is clickable
                        without wrapping it in one big <a>. */}
                    <Link
                      to={entry.href}
                      className="after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
                    >
                      {entry.title}
                    </Link>
                  </h3>
                  <p className="line-clamp-3 text-text-primary/80">{entry.summary}</p>
                  <p
                    aria-hidden="true"
                    className="mt-auto inline-flex items-center gap-1 pt-6 font-semibold text-accent underline decoration-transparent underline-offset-4 transition-[text-decoration-color] group-hover:decoration-current"
                  >
                    Read case study
                    <RxChevronRight />
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MoreCaseStudies;
