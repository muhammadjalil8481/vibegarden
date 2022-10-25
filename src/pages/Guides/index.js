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
import { useNavigate } from "react-router-dom";

const Guides = () => {
  const navigate = useNavigate();
  return (
    <div className="guides">
      <NavBar />
      <div className="bg-lightFlower ">
        <Hero
          quote2ndPart="lorem ipsum lorem ipsum.”"
          quote1stPart="“Lorem ipsum lorem ipsum lorem;"
          greenColor
          author="– Lorem Ipsum Dolar"
          heading="Lorem Ipsum"
          shortPadding
          // reduceFont
        />
      </div>
      <div className="bg-gradient-pink">
        <GradientImageInfoSection
          videoCardLeftMargin={"30px"}
          noButton
          heading="Vibe Guides"
        />
      </div>
      <ScheduleSection />
      <GreenLineBreak />
      <WhiteImageInfoSection
        orderReverseWithButton
        mainHeading="Teachers"
        btnText="See All Teachers"
        padX={false}
        link="/teachers"
        blackHeading
      />
      <GreenLineBreak />
      <ButtonAndHeading />
      <Footer />
    </div>
  );
};

export default Guides;
