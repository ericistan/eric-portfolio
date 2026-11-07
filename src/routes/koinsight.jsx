import { buildMeta } from "../lib/seo";

export { default } from "../pages/case-study/KoinSight.jsx";

export const meta = () =>
  buildMeta({
    title: "KoinSight Case Study | Eric Tan",
    description:
      "KoinSight is a crypto portfolio tracker built by a team of three at General Assembly's Software Engineering Bootcamp in under two weeks, with Eric Tan as frontend developer and UX engineer.",
    path: "/case-study/koinsight",
  });
