import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import ScrollToTop from "./components/ScrollToTop";
import ClickSpark from "./components/ClickSpark";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Formjo from "./pages/case-study/Formjo";
import KoinSight from "./pages/case-study/KoinSight";
import StartSearch from "./pages/case-study/StartSearch";
import RaincityBoxing from "./pages/case-study/RaincityBoxing";
import "lenis/dist/lenis.css";
import "./App.css";

function App() {
  const location = useLocation();
  const isCaseStudy = location.pathname.startsWith("/case-study/");

  return (
    <ClickSpark
      sparkColor="#4ade80"
      sparkSize={40}
      sparkRadius={60}
      sparkCount={12}
      duration={400}
    >
      <ReactLenis root />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={isCaseStudy ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={isCaseStudy ? false : { opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-study/formjo" element={<Formjo />} />
            <Route path="/case-study/koinsight" element={<KoinSight />} />
            <Route path="/case-study/startsearch" element={<StartSearch />} />
            <Route path="/case-study/raincityboxing" element={<RaincityBoxing />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </ClickSpark>
  );
}

export default App;
