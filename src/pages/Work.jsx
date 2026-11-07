import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { motion } from "framer-motion";
import Footer from "../components/Footer.jsx";
import FeaturedCard from "../components/Work/FeaturedCard.jsx";
import ProjectCard from "../components/Work/ProjectCard.jsx";
import CompactRow from "../components/Work/CompactRow.jsx";
import { WORK_TYPES, work } from "../data/work";

const chipBase =
  "inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const chipStates = {
  active: "border-accent bg-accent text-background-primary",
  inactive:
    "border-text-primary/20 text-text-primary/70 hover:border-text-primary/50 hover:text-text-primary",
};

const Tier = ({ type, entries }) => {
  if (type.tier === "featured") {
    return (
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {entries.map((entry, index) => (
          <FeaturedCard key={entry.slug} entry={entry} eager={index === 0} />
        ))}
      </div>
    );
  }
  if (type.tier === "standard") {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry) => (
          <ProjectCard key={entry.slug} entry={entry} />
        ))}
      </div>
    );
  }
  return (
    <ul className="divide-y divide-text-primary/10 border-y border-text-primary/10">
      {entries.map((entry) => (
        <CompactRow key={entry.slug} entry={entry} />
      ))}
    </ul>
  );
};

const Work = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [fixtures, setFixtures] = useState([]);
  // The prerendered HTML has no query string, so ignore ?type= until after
  // hydration; otherwise the first client render wouldn't match it.
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const wantsFixtures = import.meta.env.DEV && searchParams.has("fixtures");

  useEffect(() => {
    if (!wantsFixtures) {
      setFixtures([]);
      return;
    }
    import("../data/work.fixtures.js").then((m) => setFixtures(m.workFixtures));
  }, [wantsFixtures]);

  const entries = wantsFixtures ? [...work, ...fixtures] : work;
  const groups = WORK_TYPES.map((type) => ({
    type,
    entries: entries.filter((entry) => entry.type === type.id),
  })).filter((group) => group.entries.length > 0);

  const requested = hydrated ? searchParams.get("type") : null;
  const activeId = groups.some((g) => g.type.id === requested) ? requested : "all";
  const visible =
    activeId === "all" ? groups : groups.filter((g) => g.type.id === activeId);
  const visibleCount = visible.reduce((n, g) => n + g.entries.length, 0);
  const showFilters = groups.length > 1;

  const selectType = (id) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (id === "all") next.delete("type");
        else next.set("type", id);
        return next;
      },
      { replace: true, preventScrollReset: true },
    );
  };

  const chips = [
    { id: "all", label: "All", count: entries.length },
    ...groups.map((g) => ({
      id: g.type.id,
      label: g.type.label,
      count: g.entries.length,
    })),
  ];

  return (
    <div className="flex min-h-dvh flex-col">
      <main>
        <section className="px-[5%] pb-16 pt-16 md:pb-24 md:pt-24 lg:pb-28 lg:pt-28">
          <div className="page-container">
            <header className="mx-auto mb-10 max-w-lg text-center md:mb-12">
              <p className="mb-3 font-mono font-semibold md:mb-4">Work</p>
              <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                Everything I&apos;ve designed and built
              </h1>
              <p className="text-md">
                Case studies with the full process, plus client work and side
                quests: hackathons, side projects, and experiments.
              </p>
            </header>

            {showFilters && (
              <div
                role="group"
                aria-label="Filter by type"
                className="mb-10 flex flex-wrap justify-center gap-2 md:mb-12"
              >
                {chips.map((chip) => {
                  const active = chip.id === activeId;
                  return (
                    <button
                      key={chip.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => selectType(chip.id)}
                      className={`${chipBase} ${active ? chipStates.active : chipStates.inactive}`}
                    >
                      {chip.label}
                      <span
                        className={`font-mono text-xs ${active ? "text-background-primary/70" : "text-text-primary/50"}`}
                      >
                        {chip.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            <p className="sr-only" aria-live="polite">
              Showing {visibleCount} {visibleCount === 1 ? "project" : "projects"}
            </p>

            <motion.div
              key={activeId}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="flex flex-col gap-16 md:gap-20"
            >
              {visible.map(({ type, entries: items }) => (
                <section key={type.id} aria-labelledby={`work-${type.id}`}>
                  <h2
                    id={`work-${type.id}`}
                    className="mb-6 text-2xl font-bold md:mb-8 md:text-3xl"
                  >
                    {type.label}
                  </h2>
                  <Tier type={type} entries={items} />
                </section>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
