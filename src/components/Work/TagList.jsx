const TagList = ({ tags, className = "" }) => {
  if (!tags?.length) return null;
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-text-primary/10 px-3 py-1.5 font-mono text-xs font-semibold"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
