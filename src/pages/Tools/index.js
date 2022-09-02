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
    <div>
      <NavBar />
      <div className="bg-gradient-blueflowers">
        <Hero />
      </div>
      <div className="bg-gradient-green">
        <GradientImageInfoSection videoCardLeftMargin={"30px"} />
      </div>
      <FourColumnVideoLayout
        searchInput
        leftHeading
        leftPara
        dataArray={array8}
      />
      <div className="bg-gradient-pinkMask">
        <FourColumnVideoLayout dataArray={array8} />
      </div>
      <FourColumnVideoLayout dataArray={array8} />
      <BrowseByTags />
      <Footer />
    </div>
  );
};

export default Tools;
