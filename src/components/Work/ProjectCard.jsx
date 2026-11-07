import TagList from "./TagList";
import WorkLinks from "./WorkLinks";

const ProjectCard = ({ entry }) => {
  const meta = [entry.client, entry.year].filter(Boolean).join(" · ");

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-text-primary/10 bg-text-primary/5">
      {entry.image && (
        <img
          src={entry.image.src}
          alt={entry.image.alt}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-6">
        {meta && <p className="mb-2 font-mono text-sm text-text-primary/60">{meta}</p>}
        <h3 className="mb-3 text-2xl font-bold leading-[1.2]">{entry.title}</h3>
        <p>{entry.summary}</p>
        {entry.role && (
          <p className="mt-3 text-sm text-text-primary/60">
            <span className="font-mono">Role</span> {entry.role}
          </p>
        )}
        {entry.outcome && (
          <p className="mt-2 text-sm text-text-primary/60">
            <span className="font-mono">Outcome</span> {entry.outcome}
          </p>
        )}
        <TagList tags={entry.tags} className="mt-4" />
        <WorkLinks title={entry.title} href={entry.href} links={entry.links} className="mt-auto pt-6" />
      </div>
    </article>
  );
};

export default ProjectCard;
