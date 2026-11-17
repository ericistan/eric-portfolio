import { buildMeta } from "../lib/seo";

export { default } from "../pages/HomePage.jsx";

export const meta = () =>
  buildMeta({
    title: "Eric Tan | Design Engineer",
    description:
      "Eric Tan is a design engineer in Singapore. He designs in Paper.design and Figma and ships in React, and is looking for a full-time role. Case studies in coaching, fintech and AI.",
    path: "/",
  });
