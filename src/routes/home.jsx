import { buildMeta } from "../lib/seo";

export { default } from "../pages/HomePage.jsx";

export const meta = () =>
  buildMeta({
    title: "Eric Tan | Design Engineer",
    description:
      "Eric Tan is a design engineer at Zenko.gg in Singapore, taking products from the design file to a shipped React front-end. Case studies in coaching, fintech, and AI.",
    path: "/",
  });
