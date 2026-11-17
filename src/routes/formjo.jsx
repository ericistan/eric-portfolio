import { buildMeta } from "../lib/seo";

export { default } from "../pages/case-study/Formjo.jsx";

export const meta = () =>
  buildMeta({
    title: "Formjo Case Study | Eric Tan",
    description:
      "Formjo is a platform for coaches to assign structured training, review athlete video submissions, and give personalised feedback. Eric Tan designed and built it solo.",
    path: "/case-study/formjo",
  });
