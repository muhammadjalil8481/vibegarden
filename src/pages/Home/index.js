import React from "react";
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import GradientImageInfoSection from "../../components/GradientImageInfoSection";
import WhiteImageInfoSection from "../../components/WhiteImageInfoSection.js";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import FourColumnInfoSection from "../../components/fourColumnInfoSection";
import LineBreak from "../../components/lineBreak";
import SampleTools from "../../components/SampleToolsSection";
import MoreVG from "../../components/MoreVGSection.js";
import StayInTouch from "../../components/StayInTouchSection";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <GradientImageInfoSection videoCardLeftMargin={"30px"} />
      <WhiteImageInfoSection />
      <HowItWorks />
      <FourColumnInfoSection />
      <LineBreak />
      <SampleTools />
      <MoreVG />
      <StayInTouch />
      <Footer />
    </>
  );
};

export default HomePage;
