import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutInfo from "../components/AboutInfo";

const About = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <Navbar />
      <AboutInfo />
      <Footer />
    </div>
  );
};

export default About;
