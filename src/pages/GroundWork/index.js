import React from "react";
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import GradientImageInfoSection from "../../components/GradientImageInfoSection";
import FourColumnVideoLayout from "../../components/FourColumnVideoLayout.js";
import BrowseByTags from "../../components/BrowseByTags";
import Footer from "../../components/Footer";

const GroundWork = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gradient-blueflowers">
        <Hero />
      </div>
      <GradientImageInfoSection videoCardLeftMargin={"30px"} noButton />
      <FourColumnVideoLayout />
      <div className="bg-gradient-greenMask">
        <FourColumnVideoLayout whiteHeading whitePara whiteLink whiteSubText />
      </div>
      <FourColumnVideoLayout />
      <div
        style={{
          backgroundColor: "green",
          height: "1px",
          width: "80%",
          margin: "0 auto",
        }}
      ></div>
      <FourColumnVideoLayout />
      <BrowseByTags />
      <Footer />
    </div>
  );
};

export default GroundWork;
