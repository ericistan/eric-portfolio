import React from "react";
import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HomePage/HeroSection.jsx";
import CaseStudySection from "../components/HomePage/CaseStudySection.jsx";
import WhyMeSection from "../components/HomePage/WhyMeSection.jsx";
import TechStack from "../components/HomePage/TechStack.jsx";
import CtaSection from "../components/HomePage/CtaSection.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <CaseStudySection />
      <TechStack />
      <WhyMeSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default HomePage;
