import { Link } from "react-router";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const LINK_LABELS = {
  live: "Live site",
  repo: "Source code",
  devpost: "Devpost",
};

const LINK_CLASS =
  "inline-flex min-h-10 items-center gap-1 rounded-lg border border-text-primary/20 px-3 font-mono text-xs font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

/** `href` is an internal case study route; `links` are external URLs. */
const WorkLinks = ({ title, href, links, className = "" }) => {
  const entries = Object.entries(LINK_LABELS).filter(([key]) => links?.[key]);
  if (!href && entries.length === 0) return null;

  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {href && (
        <li>
          <Link to={href} aria-label={`Case study: ${title}`} className={LINK_CLASS}>
            Case study
            <FiArrowRight aria-hidden="true" />
          </Link>
        </li>
      )}
      {entries.map(([key, label]) => (
        <li key={key}>
          <a
            href={links[key]}
            target="_blank"
            rel="noreferrer"
            aria-label={`${label} for ${title}`}
            className={LINK_CLASS}
          >
            {label}
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default WorkLinks;
