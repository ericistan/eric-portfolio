import React from "react";
import Navbar from "../components/Navbar.jsx";
import ContactLinks from "../components/ContactLinks.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ContactLinks />
      <Footer />
    </div>
  );
};

export default Contact;
