import React from "react";
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import GradientImageInfoSection from "../../components/GradientImageInfoSection";
import FourColumnVideoLayout from "../../components/FourColumnVideoLayout.js";
import BrowseByTags from "../../components/BrowseByTags";
import Footer from "../../components/Footer";

const Tools = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gradient-blueflowers">
        <Hero />
      </div>
      <div className="bg-gradient-green">
        <GradientImageInfoSection videoCardLeftMargin={"30px"} />
      </div>
      <FourColumnVideoLayout searchInput leftHeading leftPara secondRow />
      <div className="bg-gradient-pinkMask">
        <FourColumnVideoLayout secondRow />
      </div>
      <FourColumnVideoLayout secondRow />
      <BrowseByTags />
      <Footer />
    </div>
  );
};

export default Tools;
