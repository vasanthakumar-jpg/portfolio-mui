import React from "react";
import Navbar from "../../components/Navbar";
import Home from "../../components/Home";
import About from "../../components/About";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import Course from "../../components/Course";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const LandingPage = ({ mode, toggleColorMode }) => {
  return (
    <>
      <Navbar mode={mode} toggleColorMode={toggleColorMode} />
      <Home />
      <About />
      <Education />
      <Course />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;