import { buildMeta } from "../lib/seo";

export { default } from "../pages/case-study/StartSearch.jsx";

export const meta = () =>
  buildMeta({
    title: "StartSearch Case Study | Eric Tan",
    description:
      "StartSearch is an AI agent dashboard built for accelerator programmes like SMU IIE, tracking every graduated startup from the outside with persistent memory that gets smarter every run.",
    path: "/case-study/startsearch",
  });
