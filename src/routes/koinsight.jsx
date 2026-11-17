import { buildMeta } from "../lib/seo";

export { default } from "../pages/case-study/KoinSight.jsx";

export const meta = () =>
  buildMeta({
    title: "KoinSight Case Study | Eric Tan",
    description:
      "KoinSight is a crypto portfolio tracker. A team of three built it at General Assembly's Software Engineering Bootcamp in under two weeks. Eric Tan was the frontend developer and UX engineer.",
    path: "/case-study/koinsight",
  });
