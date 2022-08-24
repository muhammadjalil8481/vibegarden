import React from "react";
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import WhiteImageInfoSection2 from "../../components/WhiteImageInfoSection2";
import FeaturedTools from "../../components/FeaturedTools/FeaturedTools";
import GroundWorkEssentials from "../../components/GroundWorkEssentials";
import LineBreak from "../../components/lineBreak";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import BrowseByTags from "../../components/BrowseByTags";

const HomeLoggedIn = () => {
  return (
    <>
      {/* <NavBar /> */}
      {/* <Hero /> */}
      {/* <WhiteImageInfoSection2 /> */}
      {/* <div className="bg-gradient-green">
        <FeaturedTools whiteHeading whitePara />
      </div> */}
      {/* <GroundWorkEssentials /> */}
      {/* <LineBreak /> */}
      {/* <FeaturedTools leftHeading heading="Your Recent Vibes" /> */}
      {/* <HowItWorks /> */}
      <BrowseByTags />
    </>
  );
};

export default HomeLoggedIn;
