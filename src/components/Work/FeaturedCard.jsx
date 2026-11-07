import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router";
import TagList from "./TagList";

const FeaturedCard = ({ entry, eager = false }) => (
  <Link
    to={entry.href}
    className="group flex h-full flex-col gap-6 rounded-lg border border-text-primary/10 bg-text-primary/5 p-6 transition-colors hover:border-text-primary/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:p-8"
  >
    {entry.image && (
      <img
        src={entry.image.src}
        alt={entry.image.alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        decoding="async"
        className="aspect-[3/2] w-full object-cover"
      />
    )}
    <div className="flex flex-1 flex-col">
      {entry.tagline && (
        <p className="mb-2 font-mono text-sm font-semibold">{entry.tagline}</p>
      )}
      <h3 className="mb-4 text-4xl font-bold leading-[1.2] md:text-5xl">
        {entry.title}
      </h3>
      {(entry.year || entry.role) && (
        <p className="mb-4 font-mono text-sm text-text-primary/70">
          {[entry.year, entry.role].filter(Boolean).join(" · ")}
        </p>
      )}
      <p className="md:text-md">{entry.summary}</p>
      <TagList tags={entry.tags} className="mt-4" />
      <span className="mt-6 inline-flex items-center gap-1 pt-2 text-sm font-semibold text-accent group-hover:underline group-hover:underline-offset-4 lg:mt-auto">
        Read case study
        <RxChevronRight aria-hidden="true" />
      </span>
    </div>
  </Link>
);

export default FeaturedCard;
