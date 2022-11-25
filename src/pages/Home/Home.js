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
    <div className="remove-overflow">
      <NavBar />
      <div className="bg-gradient-blueflowers">
        <Hero
          author="– Thich Nhat Hahn"
          quote1stPart="“There is a sun within every person;"
          quote2ndPart="“the you we call campanion.”"
        />
      </div>
      <div className="bg-gradient-pink">
        <GradientImageInfoSection
          videoCardLeftMargin={"30px"}
          heading="Embodying Your Fullness"
          buttonText="Explorer Tools"
          btnLink="/tools"
        />
      </div>
      <WhiteImageInfoSection
        mainHeading="Coming Home Together"
        btnText="Join Us"
        link="/join-us"
      />
      <HowItWorks />
      <FourColumnInfoSection />
      <LineBreak />
      <SampleTools />
      <MoreVG />
      <div className="bg-gradient-pinkMask">
        <StayInTouch />'
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
