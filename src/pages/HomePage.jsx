import React from "react";
import HeroSection from "../components/HomePage/HeroSection.jsx";
import CaseStudySection from "../components/HomePage/CaseStudySection.jsx";
import WhyMeSection from "../components/HomePage/WhyMeSection.jsx";
import AboutMeSection from "../components/HomePage/AboutMeSection.jsx";
import TechStack from "../components/HomePage/TechStack.jsx";
import CtaSection from "../components/HomePage/CtaSection.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <HeroSection />
      <CaseStudySection />
      <TechStack />
      <WhyMeSection />
      <AboutMeSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default HomePage;
