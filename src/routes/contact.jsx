import { buildMeta } from "../lib/seo";

export { default } from "../pages/Contact.jsx";

export const meta = () =>
  buildMeta({
    title: "Contact | Eric Tan",
    description:
      "Get in touch with Eric Tan, a design engineer in Singapore. Find email, LinkedIn, GitHub, and X links.",
    path: "/contact",
  });
