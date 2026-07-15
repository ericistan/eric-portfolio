import { Routes, Route } from "react-router";
import { ReactLenis } from "lenis/react";
import ScrollToTop from "./components/ScrollToTop";
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
  return (
    <>
      <ReactLenis root />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-study/formjo" element={<Formjo />} />
        <Route path="/case-study/koinsight" element={<KoinSight />} />
        <Route path="/case-study/startsearch" element={<StartSearch />} />
        <Route path="/case-study/raincityboxing" element={<RaincityBoxing />} />
      </Routes>
    </>
  );
}

export default App;
