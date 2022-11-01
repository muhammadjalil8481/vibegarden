import React from "react";
import NavBar from "../../components/Navbar";
import FourColumnVideoLayout from "../../components/FourColumnVideoLayout.js";
import Footer from "../../components/Footer";
import { dummyVideodata } from "../../constants/dummyVideoData";
import { Link, useNavigate } from "react-router-dom";

const DeeperCuts = () => {
  return (
    <div className="fcvl-caller">
      <NavBar />
      <FourColumnVideoLayout
        searchInput
        heading="Deeper Cuts"
        dataArray={dummyVideodata}
        backLink
        linkDestination="/groundwork"
        groundWork
      />
      <Footer />
    </div>
  );
};

export default DeeperCuts;
