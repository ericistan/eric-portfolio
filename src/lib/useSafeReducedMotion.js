import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Reduced-motion is a browser-only value. Return `false` during SSR and the
// first client render so hydration matches the prerendered HTML, then the
// real preference after mount.
export const useSafeReducedMotion = () => {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && Boolean(reduced);
};
