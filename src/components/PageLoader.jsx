import { useEffect, useState } from "react";

// Module-scoped: persists across client-side route changes (same loaded JS),
// but resets naturally on a full page refresh (module re-evaluates from scratch).
const shownKeys = new Set();

const PageLoader = ({ title, words, id }) => {
  const key = id ?? title ?? words?.join("|") ?? "loader";
  const isWordMode = words?.length > 0;

  const [hasPlayed] = useState(() => shownKeys.has(key));
  const [isExiting, setIsExiting] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (hasPlayed) return;
    shownKeys.add(key);

    if (isWordMode) {
      const wordInterval = setInterval(() => {
        setWordIndex((prev) => {
          if (prev === words.length - 1) {
            clearInterval(wordInterval);
            setIsExiting(true);
            return prev;
          }
          return prev + 1;
        });
      }, 500);

      return () => clearInterval(wordInterval);
    }

    const titleTimer = setTimeout(() => setShowTitle(true), 250);
    const exitTimer = setTimeout(() => setIsExiting(true), 1000);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(exitTimer);
    };
  }, [hasPlayed, key, isWordMode, words]);

  useEffect(() => {
    if (hasPlayed) return;
    if (!isExiting) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [hasPlayed, isExiting]);

  if (hasPlayed) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-transform duration-700 ease-in-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {!isExiting && isWordMode && (
        <span className="px-[5%] text-center text-5xl font-bold text-white md:text-7xl">
          {words[wordIndex]}
        </span>
      )}
      {!isExiting && !isWordMode && (
        <h1
          className={`px-[5%] text-center text-5xl font-semibold text-white transition-all duration-500 ease-out md:text-7xl ${
            showTitle ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          {title}
        </h1>
      )}
    </div>
  );
};

export default PageLoader;
