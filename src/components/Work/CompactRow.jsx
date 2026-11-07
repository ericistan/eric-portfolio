import TagList from "./TagList";
import WorkLinks from "./WorkLinks";

const initialsOf = (title) =>
  title
    .split(/\s+/)
    .filter((word) => /^[a-z0-9]/i.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const Thumbnail = ({ entry }) => (
  <div className="aspect-[4/3] w-20 self-start overflow-hidden rounded-lg bg-text-primary/5 outline outline-1 -outline-offset-1 outline-text-primary/10 md:w-40">
    {entry.image ? (
      <img
        src={entry.image.src}
        alt={entry.image.alt ?? ""}
        loading="lazy"
        decoding="async"
        width="320"
        height="240"
        className="size-full object-cover object-top"
      />
    ) : (
      <div
        aria-hidden="true"
        className="grid size-full place-items-center font-mono text-lg font-semibold text-text-primary/40"
      >
        {initialsOf(entry.title)}
      </div>
    )}
  </div>
);

const CompactRow = ({ entry }) => {
  const meta = [entry.kind, entry.event, entry.result, entry.year].filter(Boolean).join(" · ");

  return (
    <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-4 py-6 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-x-6">
      <Thumbnail entry={entry} />
      <div className="md:max-w-2xl">
        <h3 className="text-xl font-bold">{entry.title}</h3>
        {meta && <p className="mt-1 font-mono text-sm text-text-primary/60">{meta}</p>}
        <p className="mt-2">{entry.summary}</p>
        <TagList tags={entry.tags} className="mt-3" />
      </div>
      <WorkLinks
        title={entry.title}
        href={entry.href}
        links={entry.links}
        className="col-span-2 md:col-span-1 md:justify-end md:self-start"
      />
    </li>
  );
};

export default CompactRow;
