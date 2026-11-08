import React from "react";
import HeroSection from "../components/HomePage/HeroSection.jsx";
import CaseStudySection from "../components/HomePage/CaseStudySection.jsx";
import TechStack from "../components/HomePage/TechStack.jsx";
import AboutMeSection from "../components/HomePage/AboutMeSection.jsx";
import CtaSection from "../components/HomePage/CtaSection.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <main>
      <HeroSection />
      <CaseStudySection />
      <TechStack />
      <AboutMeSection />
      <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
