import React from "react";
import CtaSection from "../components/HomePage/CtaSection.jsx";
import Footer from "../components/Footer.jsx";
import PageLoader from "../components/PageLoader.jsx";

const introWords = ["Eric Tan", "Designer", "Developer", "Builder"];

const AboutMe = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <PageLoader words={introWords} />
      <Footer />
    </div>
  );
};

export default AboutMe;
