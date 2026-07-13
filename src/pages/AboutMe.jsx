import React from "react";
import Navbar from "../components/Navbar.jsx";
import CtaSection from "../components/HomePage/CtaSection.jsx";
import Footer from "../components/Footer.jsx";
import PageLoader from "../components/PageLoader.jsx";

const introWords = ["Eric Tan", "Designer", "Developer", "Builder"];

const AboutMe = () => {
  return (
    <div>
      <PageLoader words={introWords} />
      <Navbar />
      <Footer />
    </div>
  );
};

export default AboutMe;
