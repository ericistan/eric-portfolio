import { buildMeta } from "../lib/seo";

export { default } from "../pages/case-study/StartSearch.jsx";

export const meta = () =>
  buildMeta({
    title: "StartSearch Case Study | Eric Tan",
    description:
      "StartSearch is an AI agent dashboard for accelerator programmes like SMU IIE. It tracks every graduated startup from public signals and keeps persistent memory across runs.",
    path: "/case-study/startsearch",
  });
