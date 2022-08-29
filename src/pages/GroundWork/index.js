import React from "react";
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import GradientImageInfoSection from "../../components/GradientImageInfoSection";
import FourColumnVideoLayout from "../../components/FourColumnVideoLayout.js";
import BrowseByTags from "../../components/BrowseByTags";
import Footer from "../../components/Footer";
import { dummyVideodata } from "../../constants/dummyVideoData";
import { Link, useNavigate } from "react-router-dom";

const GroundWork = () => {
  const array4 = dummyVideodata.slice(0, 4);
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div className="bg-gradient-blueflowers">
        <Hero />
      </div>
      <div className="bg-gradient-pink">
        <GradientImageInfoSection videoCardLeftMargin={"30px"} noButton />
      </div>
      <FourColumnVideoLayout
        searchInput
        heading="Essentials"
        dataArray={array4}
        seeAllOnClick={() => navigate("/essentials")}
      />
      <div className="bg-gradient-greenMask">
        <FourColumnVideoLayout
          whiteHeading
          whitePara
          whiteLink
          whiteSubText
          heading="Building Slocks"
          dataArray={array4}
          seeAllOnClick={() => navigate("/buildingslocks")}
        />
      </div>
      <FourColumnVideoLayout
        heading="Deeper Cuts"
        dataArray={array4}
        seeAllOnClick={() => navigate("/deepercuts")}
      />
      <div
        style={{
          backgroundColor: "green",
          height: "1px",
          width: "80%",
          margin: "0 auto",
        }}
      ></div>
      <FourColumnVideoLayout
        heading="Play"
        dataArray={array4}
        seeAllOnClick={() => navigate("/play")}
      />
      <BrowseByTags />
      <Footer />
    </div>
  );
};

export default GroundWork;
