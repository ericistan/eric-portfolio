import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("contact", "routes/contact.jsx"),
  route("case-study/formjo", "routes/formjo.jsx"),
  route("case-study/koinsight", "routes/koinsight.jsx"),
  route("case-study/startsearch", "routes/startsearch.jsx"),
  route("case-study/raincityboxing", "routes/raincityboxing.jsx"),
  route("*", "routes/not-found.jsx"),
];
