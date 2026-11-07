import { buildMeta } from "../lib/seo";

export { default } from "../pages/Work.jsx";

export const meta = () =>
  buildMeta({
    title: "Work | Eric Tan",
    description:
      "Case studies, client work, and side quests (hackathons, side projects, experiments) by Eric Tan, a design engineer in Singapore.",
    path: "/work",
  });
