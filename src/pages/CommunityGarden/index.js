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
import { dummyVideodata } from "../../constants/dummyVideoData";

const CommunityGarden = () => {
  const array4 = dummyVideodata.slice(0, 4);

  return (
    <div className="community-garden">
      <NavBar />
      <div className="bg-lightFlower ">
        <Hero
          quote2ndPart="lorem ipsum lorem ipsum.”"
          quote1stPart="“Lorem ipsum lorem ipsum lorem;"
          greenColor
          author="– Lorem Ipsum Dolar"
          heading="Lorem Ipsum"
          topPadding
        />
      </div>
      <div className="bg-gradient-green">
        <GradientImageInfoSection
          videoCardLeftMargin={"30px"}
          noButton
          heading="Coming Home Together A Beginning"
        />
      </div>
      <FourColumnVideoLayout
        dataArray={array4}
        heading="Featured Tool For Connection"
      />
      <GreenLineBreak />
      <WhiteImageInfoSection
        noButton
        noHeading
        doubleHeading
        videoCardTopHeading
        bottomInfo
        vidHeading
        btnText="Take A Survey"
      />
      <GreenLineBreak />
      <ButtonAndHeading2 />
      <Footer />
    </div>
  );
};

export default CommunityGarden;
