import React from "react";
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import GradientImageInfoSection from "../../components/GradientImageInfoSection";
import FourColumnVideoLayout from "../../components/FourColumnVideoLayout.js";
import BrowseByTags from "../../components/BrowseByTags";
import Footer from "../../components/Footer";
import GreenLineBreak from "../../components/GreenLineBreak";
import WhiteImageInfoSection from "../../components/WhiteImageInfoSection.js";
import ButtonAndHeading2 from "../../components/HeadingAndButton2";

const CommunityGarden = () => {
  return (
    <div className="community-garden">
      <NavBar />
      <div className="bg-gradient-blueflowers">
        <Hero />
      </div>
      <div className="bg-gradient-green">
        <GradientImageInfoSection videoCardLeftMargin={"30px"} noButton />
      </div>
      <FourColumnVideoLayout />
      <GreenLineBreak />
      <WhiteImageInfoSection
        noButton
        noHeading
        doubleHeading
        videoCardTopHeading
        bottomInfo
      />
      <GreenLineBreak />
      <ButtonAndHeading2 />
      <Footer />
    </div>
  );
};

export default CommunityGarden;
