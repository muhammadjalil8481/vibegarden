import React from "react";
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import WhiteImageInfoSection2 from "../../components/WhiteImageInfoSection2";
import FeaturedTools from "../../components/FeaturedTools/FeaturedTools";
import GroundWorkEssentials from "../../components/GroundWorkEssentials";
import LineBreak from "../../components/lineBreak";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import BrowseByTags from "../../components/BrowseByTags";
import WhiteImageInfoSection from "../../components/WhiteImageInfoSection.js";
import BigImageSection from "../../components/BigImageSection";
import Footer from "../../components/Footer";

const HomeLoggedIn = () => {
  return (
    <>
      <NavBar />
      <div className="bg-gradient-blueflowers">
        <Hero />
      </div>
      <WhiteImageInfoSection2 />
      <div className="bg-gradient-green">
        <FeaturedTools whiteHeading whitePara />
      </div>
      <GroundWorkEssentials />
      <LineBreak />
      <FeaturedTools leftHeading heading="Your Recent Vibes" />
      <HowItWorks />
      <BrowseByTags />
      <div className="bg-gradient-pinkMask">
        <WhiteImageInfoSection
          noHeading
          topHeading
          videoCardWidth="350px"
          height="270px"
        />
      </div>
      <div className="bg-gradient-greenMask">
        <WhiteImageInfoSection
          noHeading
          topHeading
          videoCardWidth="350px"
          height="270px"
          orderReverse
          rightAlignHeading
          whiteHeading
          whitePara
        />
      </div>
      <div className="my70">
        <LineBreak />
      </div>
      <BigImageSection />
      <Footer />
    </>
  );
};

export default HomeLoggedIn;