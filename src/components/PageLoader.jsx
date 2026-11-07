import { useEffect, useLayoutEffect, useState } from "react";
import { useSafeReducedMotion } from "../lib/useSafeReducedMotion";

// Module-scoped: persists across client-side route changes (same loaded JS),
// but resets naturally on a full page refresh (module re-evaluates from scratch).
const shownKeys = new Set();

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const PageLoader = ({ title, words, id }) => {
  const key = id ?? title ?? words?.join("|") ?? "loader";
  const isWordMode = words?.length > 0;

  const prefersReducedMotion = useSafeReducedMotion();
  // Render nothing on the server / first render so the prerendered HTML is never covered.
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useIsomorphicLayoutEffect(() => {
    if (shownKeys.has(key)) return;
    shownKeys.add(key);
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    setShouldPlay(true);
  }, [key]);

  useEffect(() => {
    if (!shouldPlay) return;

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
  }, [shouldPlay, isWordMode, words]);

  useEffect(() => {
    if (!shouldPlay) return;
    if (!isExiting) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [shouldPlay, isExiting]);

  if (!shouldPlay || prefersReducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background-primary transition-transform duration-700 ease-in-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {!isExiting && isWordMode && (
        <span className="px-[5%] text-center text-5xl font-bold text-accent md:text-7xl">
          {words[wordIndex]}
        </span>
      )}
      {!isExiting && !isWordMode && (
        <p
          aria-hidden="true"
          className={`px-[5%] text-center text-5xl font-semibold text-accent transition-[transform,opacity] duration-500 ease-out md:text-7xl ${
            showTitle ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          {title}
        </p>
      )}
    </div>
  );
};

export default PageLoader;
