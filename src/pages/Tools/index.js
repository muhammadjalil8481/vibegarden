import React from "react";
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import GradientImageInfoSection from "../../components/GradientImageInfoSection";
import FourColumnVideoLayout from "../../components/FourColumnVideoLayout.js";
import BrowseByTags from "../../components/BrowseByTags";
import Footer from "../../components/Footer";
import { dummyVideodata } from "../../constants/dummyVideoData";

const Tools = () => {
  const array8 = dummyVideodata.slice(0, 8);

  return (
    <div className="tools">
      <NavBar />
      <div className="bg-lightFlower ">
        <Hero
          quote2ndPart="lorem ipsum lorem ipsum.”"
          quote1stPart="“Lorem ipsum lorem ipsum lorem;"
          greenColor
          author="– Lorem Ipsum Dolar"
          heading="Lorem Ipsum"
          shortPadding
        />
      </div>
      <div className="bg-gradient-green">
        <GradientImageInfoSection
          videoCardLeftMargin={"30px"}
          heading="What Tools?"
          noButton
        />
      </div>
      <FourColumnVideoLayout
        searchInput
        leftHeading
        leftPara
        dataArray={array8}
        heading="Tools For Connecting With Our Life"
        linkDestination="/toolsforconnecting"
      />
      <div className="bg-gradient-pinkMask">
        <FourColumnVideoLayout
          dataArray={array8}
          heading={`Tools For Worker & Shadow`}
          linkDestination="/toolsforworker"
        />
      </div>
      <FourColumnVideoLayout
        dataArray={array8}
        heading={`Tools For Connection`}
        linkDestination="/toolsforconnection"
      />
      <BrowseByTags />
      <Footer />
    </div>
  );
};

export default Tools;
