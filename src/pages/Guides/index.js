import React from "react";
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import GradientImageInfoSection from "../../components/GradientImageInfoSection";
import FourColumnVideoLayout from "../../components/FourColumnVideoLayout.js";
import BrowseByTags from "../../components/BrowseByTags";
import Footer from "../../components/Footer";
import ScheduleSection from "../../components/ScheduleSection";
import GreenLineBreak from "../../components/GreenLineBreak";
import WhiteImageInfoSection from "../../components/WhiteImageInfoSection.js";
import WhiteImageInfoSection2 from "../../components/WhiteImageInfoSection2";
import ButtonAndHeading from "../../components/HeadingAndButton.js";

const Guides = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gradient-blueflowers">
        <Hero />
      </div>
      <div className="bg-gradient-pink">
        <GradientImageInfoSection videoCardLeftMargin={"30px"} noButton />
      </div>
      <ScheduleSection />
      <GreenLineBreak />
      <WhiteImageInfoSection orderReverseWithButton />
      <GreenLineBreak />
      <ButtonAndHeading />
      <Footer />
    </div>
  );
};

export default Guides;
