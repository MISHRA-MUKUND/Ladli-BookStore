import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <Navbar />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Contact;
