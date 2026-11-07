import { buildMeta } from "../lib/seo";

export { default } from "../pages/HomePage.jsx";

export const meta = () =>
  buildMeta({
    title: "Eric Tan | Design Engineer",
    description:
      "Eric Tan is a design engineer in Singapore with 4+ years designing products at startups, now building them front-end first in React. Case studies in AI, fintech, and Web3.",
    path: "/",
  });
