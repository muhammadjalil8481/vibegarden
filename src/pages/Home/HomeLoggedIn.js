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
        <Hero
          quote1stPart="You can put all the flowers"
          quote2ndPart="but you can't stop the spring"
          author="P.Neauda"
          heading="Welcome Back, You"
        />
      </div>
      <WhiteImageInfoSection2 />
      <div className="bg-gradient-green">
        <FeaturedTools whiteHeading whitePara />
      </div>
      <GroundWorkEssentials />
      <LineBreak />
      <FeaturedTools leftHeading heading="Your Recent Vibes" noPara />
      <HowItWorks />
      <BrowseByTags />
      <div className="bg-gradient-pinkMask">
        <WhiteImageInfoSection
          btnText="See More"
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
          heading="Featured Teacher"
          btnText="See More"
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
