import { buildMeta } from "../lib/seo";

export { default } from "../pages/case-study/RaincityBoxing.jsx";

export const meta = () =>
  buildMeta({
    title: "Raincity Boxing Case Study | Eric Tan",
    description:
      "A website for a Richmond, BC boxing gym and wellness studio, with clear pricing, member testimonials, and a short path to booking a free trial.",
    path: "/case-study/raincityboxing",
  });
