import React, { useState } from "react";
import NavBar from "../../components/Navbar";
import FormGroupAuth from "../../components/FormInputAuth";
import { dummyVideodata } from "../../constants/dummyVideoData";
import VidCard from "../../components/VidCard";
import PinkIcon from "../../assets/images/pink-icon.svg";
import images from "../../constants/images";
import GreenButton from "../../components/Button/GreenButton";
import Footer from "../../components/Footer";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { green } from "@mui/material/colors";

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <section className="searchpage">
      <NavBar />
      <div className="container-md sp">
        <div className="sp-top">
          <div className="sp-top-headingAndCount">
            <h3 className="sp-top-heading">{activeTab} Results</h3>
            <p className="sp-top-count">37 Results</p>
          </div>

          <div className="sp-top-search">
            <FormGroupAuth noLabel placeHolder="Search..." icon />
          </div>
        </div>
        <div className="sp-tabs">
          <div
            className={`${activeTab === "all" && "active-tab"} sp-tab`}
            onClick={() => setActiveTab("all")}
          >
            <p>All</p>
          </div>
          <div
            className={`${activeTab === "groundwork" && "active-tab"} sp-tab`}
            onClick={() => setActiveTab("groundwork")}
          >
            <p>Groundwork</p>
          </div>
          <div
            className={`${
              activeTab === "tools For Unit" && "active-tab"
            } sp-tab`}
            onClick={() => setActiveTab("tools For Unit")}
          >
            <p>Tools For Unit</p>
          </div>
          <div
            className={`${
              activeTab === "tools For Shadow" && "active-tab"
            } sp-tab`}
            onClick={() => setActiveTab("tools For Shadow")}
          >
            <p>Tools For Shadow</p>
          </div>
          <div
            className={`${
              activeTab === "tools For Connection" && "active-tab"
            } sp-tab`}
            onClick={() => setActiveTab("tools For Connection")}
          >
            <p>Tools For Connection</p>
          </div>
        </div>
        <div className="sp-resultAndFilter">
          <h4 className="sp-result">{activeTab} Results</h4>
          <div className="sp-filter">
            <FilterAltIcon fontSize="large" sx={{ color: green[700] }} />
          </div>
        </div>
        <div className="row sp-row">
          <div className="col-lg-7 sp-left-col">
            <div className="sp-item">
              <div className="sp-item-video">
                <VidCard />
              </div>
              <div className="sp-item-info">
                <div className="sp-item-info-textAndIcon">
                  <div className="sp-item-info-icon">
                    <img src={PinkIcon} alt="" />
                  </div>
                  <h3>Title</h3>
                </div>
                <p className="sp-item-info-desc">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero
                </p>
                <div className="sp-item-info-subtext">
                  <p>Details</p>
                  <p>#Tag</p>
                </div>
              </div>
            </div>
            <div className="sp-item">
              <div className="sp-item-video">
                <VidCard />
              </div>
              <div className="sp-item-info">
                <div className="sp-item-info-textAndIcon">
                  <div className="sp-item-info-icon">
                    <img src={PinkIcon} alt="" />
                  </div>
                  <h3>Title</h3>
                </div>
                <p className="sp-item-info-desc">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero
                </p>
                <div className="sp-item-info-subtext">
                  <p>Details</p>
                  <p>#Tag</p>
                </div>
              </div>
            </div>
            <div className="sp-item">
              <div className="sp-item-video">
                <VidCard />
              </div>
              <div className="sp-item-info">
                <div className="sp-item-info-textAndIcon">
                  <div className="sp-item-info-icon">
                    <img src={PinkIcon} alt="" />
                  </div>
                  <h3>Title</h3>
                </div>
                <p className="sp-item-info-desc">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero
                </p>
                <div className="sp-item-info-subtext">
                  <p>Details</p>
                  <p>#Tag</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 sp-right-col">
            <div className="sp-mobile-app">
              <img src={images.mobileapp} alt="" />
            </div>
            <p className="sp-moboile-info">
              Join the quest and won your vibe Got the free VibeBloom App
            </p>
            <div style={{ borderRadius: "20px", overflow: "hidden" }}>
              <GreenButton paddingX text="Download Now" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SearchPage;
