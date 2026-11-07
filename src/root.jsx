import {
  Links,
  Meta,
  Scripts,
  isRouteErrorResponse,
  useLocation,
  useOutlet,
} from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import ScrollToTop from "./components/ScrollToTop";
import ClickSpark from "./components/ClickSpark";
import Navbar from "./components/Navbar.jsx";
import NotFound from "./pages/NotFound.jsx";
import { useSafeReducedMotion } from "./lib/useSafeReducedMotion";
import "lenis/dist/lenis.css";
import "./index.css";
import "./App.css";

export const Layout = ({ children }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <Meta />
      <Links />
    </head>
    <body>
      {children}
      <Scripts />
    </body>
  </html>
);

const App = () => {
  const location = useLocation();
  const outlet = useOutlet();
  const isCaseStudy = location.pathname.startsWith("/case-study/");
  const prefersReducedMotion = useSafeReducedMotion();

  return (
    <ClickSpark
      sparkColor="#4ade80"
      sparkSize={40}
      sparkRadius={60}
      sparkCount={12}
      duration={400}
      disabled={prefersReducedMotion}
    >
      {!prefersReducedMotion && <ReactLenis root />}
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait" initial={!prefersReducedMotion}>
        <motion.div
          key={location.pathname}
          initial={isCaseStudy || prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={isCaseStudy || prefersReducedMotion ? false : { opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {outlet}
        </motion.div>
      </AnimatePresence>
    </ClickSpark>
  );
};

export default App;

export const HydrateFallback = () => <div className="min-h-screen" />;

export const ErrorBoundary = ({ error }) => {
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }
  return (
    <NotFound
      heading="Something went wrong"
      message="An unexpected error occurred. Please try again."
    />
  );
};
