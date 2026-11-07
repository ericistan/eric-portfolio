import { buildMeta } from "../lib/seo";

export { default } from "../pages/case-study/Formjo.jsx";

export const meta = () =>
  buildMeta({
    title: "Formjo Case Study | Eric Tan",
    description:
      "Formjo is a platform for coaches to assign structured training, review athlete video submissions, and deliver personalised feedback, designed and built solo from Figma wireframe to shipped product.",
    path: "/case-study/formjo",
  });
