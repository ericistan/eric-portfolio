import React from "react";
import ContactLinks from "../components/ContactLinks.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <ContactLinks />
      <Footer />
    </div>
  );
};

export default Contact;
