import { buildMeta } from "../lib/seo";

export { default } from "../pages/case-study/RaincityBoxing.jsx";

export const meta = () =>
  buildMeta({
    title: "Raincity Boxing Case Study | Eric Tan",
    description:
      "A website for a Richmond, BC boxing gym and wellness studio, built to turn curious visitors into trial sign-ups with clear pricing, real member stories, and a fast path to booking.",
    path: "/case-study/raincityboxing",
  });
