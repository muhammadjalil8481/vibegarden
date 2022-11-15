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
import { RiCloseFill } from "react-icons/ri";
import Toggle from "react-styled-toggle";
import { Link } from "react-router-dom";
import ButtonFilled from "../../components/Button/ButtonFilled";

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filtered, setFiltered] = useState("all");

  return (
    <>
      {showFilterModal && (
        <div className="search-filter-modal-overlay">
          <div className="search-filter-modal">
            <span
              className="sfm-close"
              onClick={() => setShowFilterModal(false)}
            >
              <RiCloseFill size={20} fill="white" />
            </span>
            <div class="sfm-topicItemContainer">
              <h4 className={`sfm-topicheading `}>Category</h4>;
              <div class="sfm-topic">
                {new Array(5).fill(null).map((topic) => {
                  return (
                    <div class="sfm-topicItem ">
                      <Toggle
                        backgroundColorChecked="rgba(27, 91, 47, 1)"
                        backgroundColorUnchecked="#75997E"
                        sliderWidth={20}
                        sliderHeight={20}
                        width={55}
                        height={28}
                        onChange={() => setFiltered("buddhism")}
                      />
                      <label className="sfm-topicLabel">Category</label>
                    </div>
                  );
                })}
              </div>
            </div>
            {(activeTab === "tools" || activeTab === "groundwork") && (
              <div class="sfm-topicItemContainer">
                <h4 className="sfm-topicheading ">Topic</h4>;
                <div class="sfm-topic">
                  {new Array(15).fill(null).map((topic) => {
                    return (
                      <div class="sfm-topicItem ">
                        <Toggle
                          backgroundColorChecked="rgba(27, 91, 47, 1)"
                          backgroundColorUnchecked="#75997E"
                          sliderWidth={20}
                          sliderHeight={20}
                          width={55}
                          height={28}
                          onChange={() => setFiltered("tonglen")}
                        />
                        <label className="sfm-topicLabel">Topic</label>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="sfm-btnContainer">
              <div
                className="sfm-btn"
                onClick={() => setShowFilterModal(false)}
              >
                <GreenButton text="Apply Filter" />
              </div>
              {/* <div
                className="sfm-btn"
                onClick={() => setShowFilterModal(false)}
              >
                <ButtonFilled bgGradient={"yes"} />
              </div> */}
            </div>
            {(activeTab === "tools" || activeTab === "groundwork") && (
              <div className="rf-option">
                <Link to="/resonancefinder">
                  <p>
                    Not Sure ? <span>Try Resonance Finder</span>
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      <section className="searchpage">
        <NavBar />
        <div className="container-xl sp">
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
              className={`${activeTab === "tools" && "active-tab"} sp-tab`}
              onClick={() => setActiveTab("tools")}
            >
              <p>Tools</p>
            </div>
            <div
              className={`${
                activeTab === "fresh blooms" && "active-tab"
              } sp-tab`}
              onClick={() => setActiveTab("fresh blooms")}
            >
              <p>Fresh Blooms</p>
            </div>
            <div
              className={`${activeTab === "teachers" && "active-tab"} sp-tab`}
              onClick={() => setActiveTab("teachers")}
            >
              <p>Teachers</p>
            </div>
          </div>
          <div className="row sp-row">
            <div className="col-lg-7 sp-left-col">
              <div className="sp-resultAndFilter">
                <h4 className="sp-result">
                  Showing results for {filtered} topics
                </h4>
                <div
                  className="sp-filter"
                  onClick={() => setShowFilterModal(true)}
                >
                  <FilterAltIcon fontSize="large" sx={{ color: green[700] }} />
                </div>
              </div>
              {(activeTab === "all" || activeTab === "groundwork") && (
                <div class="sp-type">
                  <div class="search-type-heading-container">
                    <h4 className="search-type-heading">Ground Work</h4>
                    <Link to="/groundwork">
                      <p>See All</p>
                    </Link>
                  </div>
                  <div className="sp-item">
                    <div className="sp-item-video">
                      <VidCard groundwork />
                    </div>
                    <div className="sp-item-info">
                      <div className="sp-item-info-textAndIcon">
                        <div className="sp-item-info-icon">
                          <img src={PinkIcon} alt="" />
                        </div>
                        <h3>Title</h3>
                      </div>
                      <p className="sp-item-info-desc">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                      </p>
                      <div className="sp-item-info-subtext">
                        <Link
                          to="/groundwork/family-of-light"
                          state={{ heading: "GroundWork Video" }}
                        >
                          <p>Details</p>
                        </Link>
                        <Link to="/topic">
                          <p>#Tag</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="sp-item">
                    <div className="sp-item-video">
                      <VidCard groundwork />
                    </div>
                    <div className="sp-item-info">
                      <div className="sp-item-info-textAndIcon">
                        <div className="sp-item-info-icon">
                          <img src={PinkIcon} alt="" />
                        </div>
                        <h3>Title</h3>
                      </div>
                      <p className="sp-item-info-desc">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                      </p>
                      <div className="sp-item-info-subtext">
                        <Link
                          to="/groundwork/family-of-light"
                          state={{ heading: "GroundWork Video" }}
                        >
                          <p>Details</p>
                        </Link>
                        <Link to="/topic">
                          <p>#Tag</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="sp-item">
                    <div className="sp-item-video">
                      <VidCard groundwork />
                    </div>
                    <div className="sp-item-info">
                      <div className="sp-item-info-textAndIcon">
                        <div className="sp-item-info-icon">
                          <img src={PinkIcon} alt="" />
                        </div>
                        <h3>Title</h3>
                      </div>
                      <p className="sp-item-info-desc">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                      </p>
                      <div className="sp-item-info-subtext">
                        <Link
                          to="/groundwork/family-of-light"
                          state={{ heading: "GroundWork Video" }}
                        >
                          <p>Details</p>
                        </Link>
                        <Link to="/topic">
                          <p>#Tag</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {(activeTab === "all" || activeTab === "tools") && (
                <div class="sp-type">
                  <div class="search-type-heading-container">
                    <h4 className="search-type-heading">Tools</h4>
                    <Link to="/tools">
                      <p>See All</p>
                    </Link>
                  </div>
                  <div className="sp-item">
                    <div className="sp-item-video">
                      <VidCard tool />
                    </div>
                    <div className="sp-item-info">
                      <div className="sp-item-info-textAndIcon">
                        <div className="sp-item-info-icon">
                          <img src={PinkIcon} alt="" />
                        </div>
                        <h3>Title</h3>
                      </div>
                      <p className="sp-item-info-desc">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                      </p>
                      <div className="sp-item-info-subtext">
                        <Link
                          to="/groundwork/family-of-light"
                          state={{ heading: "Tools Video" }}
                        >
                          <p>Details</p>
                        </Link>
                        <Link to="/topic">
                          <p>#Tag</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="sp-item">
                    <div className="sp-item-video">
                      <VidCard tool />
                    </div>
                    <div className="sp-item-info">
                      <div className="sp-item-info-textAndIcon">
                        <div className="sp-item-info-icon">
                          <img src={PinkIcon} alt="" />
                        </div>
                        <h3>Title</h3>
                      </div>
                      <p className="sp-item-info-desc">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                      </p>
                      <div className="sp-item-info-subtext">
                        <Link
                          to="/groundwork/family-of-light"
                          state={{ heading: "Tools Video" }}
                        >
                          <p>Details</p>
                        </Link>
                        <Link to="/topic">
                          <p>#Tag</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="sp-item">
                    <div className="sp-item-video">
                      <VidCard tool />
                    </div>
                    <div className="sp-item-info">
                      <div className="sp-item-info-textAndIcon">
                        <div className="sp-item-info-icon">
                          <img src={PinkIcon} alt="" />
                        </div>
                        <h3>Title</h3>
                      </div>
                      <p className="sp-item-info-desc">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                      </p>
                      <div className="sp-item-info-subtext">
                        <Link
                          to="/groundwork/family-of-light"
                          state={{ heading: "Tools Video" }}
                        >
                          <p>Details</p>
                        </Link>
                        <Link to="/topic">
                          <p>#Tag</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {(activeTab === "all" || activeTab === "fresh blooms") && (
                <div class="sp-type">
                  <div class="search-type-heading-container">
                    <h4 className="search-type-heading">Fresh Blooms</h4>
                    <Link to="/freshblooms">
                      <p>See All</p>
                    </Link>
                  </div>
                  <div className="sp-item">
                    <div className="sp-item-video">
                      <VidCard groundwork />
                    </div>
                    <div className="sp-item-info">
                      <div className="sp-item-info-textAndIcon">
                        <div className="sp-item-info-icon">
                          <img src={PinkIcon} alt="" />
                        </div>
                        <h3>Title</h3>
                      </div>
                      <p className="sp-item-info-desc">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                      </p>
                      <div className="sp-item-info-subtext">
                        <Link
                          to="/groundwork/family-of-light"
                          state={{ heading: "Fresh Blooms Video" }}
                        >
                          <p>Details</p>
                        </Link>
                        <Link to="/topic">
                          <p>#Tag</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="sp-item">
                    <div className="sp-item-video">
                      <VidCard groundwork />
                    </div>
                    <div className="sp-item-info">
                      <div className="sp-item-info-textAndIcon">
                        <div className="sp-item-info-icon">
                          <img src={PinkIcon} alt="" />
                        </div>
                        <h3>Title</h3>
                      </div>
                      <p className="sp-item-info-desc">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                      </p>
                      <div className="sp-item-info-subtext">
                        <Link
                          to="/groundwork/family-of-light"
                          state={{ heading: "Fresh Blooms Video" }}
                        >
                          <p>Details</p>
                        </Link>
                        <Link to="/topic">
                          <p>#Tag</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="sp-item">
                    <div className="sp-item-video">
                      <VidCard groundwork />
                    </div>
                    <div className="sp-item-info">
                      <div className="sp-item-info-textAndIcon">
                        <div className="sp-item-info-icon">
                          <img src={PinkIcon} alt="" />
                        </div>
                        <h3>Title</h3>
                      </div>
                      <p className="sp-item-info-desc">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                      </p>
                      <div className="sp-item-info-subtext">
                        <Link
                          to="/groundwork/family-of-light"
                          state={{ heading: "Fresh Blooms Video" }}
                        >
                          <p>Details</p>
                        </Link>
                        <Link to="/topic">
                          <p>#Tag</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {(activeTab === "all" || activeTab === "teachers") && (
                <div class="sp-type">
                  <div class="search-type-heading-container">
                    <h4 className="search-type-heading">Teachers</h4>
                    <Link to="/teachers">
                      <p>See All</p>
                    </Link>
                  </div>
                  <div class="sp-search-teachers">
                    <div className="teacher-infosearch-imgHeading">
                      <Link to="/schedule">
                        <div className="teacher-infosearch-img-container">
                          <img src={images.teacher1} />
                        </div>
                      </Link>
                      <div>
                        <h3 className="teacher-infosearch-heading">
                          Emily Jordan
                        </h3>
                        <div className="teacher-info-iconPara">
                          <div className="teacher-info-icon">
                            <img src={PinkIcon} />
                          </div>
                          <p>
                            Body copy style for white text on dark or gradient
                            backgrounds (Medium Weight.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sp-search-teachers">
                    <div className="teacher-infosearch-imgHeading">
                      <Link to="/schedule">
                        <div className="teacher-infosearch-img-container">
                          <img src={images.teacher1} />
                        </div>
                      </Link>
                      <div>
                        <h3 className="teacher-infosearch-heading">
                          Emily Jordan
                        </h3>
                        <div className="teacher-info-iconPara">
                          <div className="teacher-info-icon">
                            <img src={PinkIcon} />
                          </div>
                          <p>
                            Body copy style for white text on dark or gradient
                            backgrounds (Medium Weight.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sp-search-teachers">
                    <div className="teacher-infosearch-imgHeading">
                      <Link to="/schedule">
                        <div className="teacher-infosearch-img-container">
                          <img src={images.teacher1} />
                        </div>
                      </Link>
                      <div>
                        <h3 className="teacher-infosearch-heading">
                          Emily Jordan
                        </h3>
                        <div className="teacher-info-iconPara">
                          <div className="teacher-info-icon">
                            <img src={PinkIcon} />
                          </div>
                          <p>
                            Body copy style for white text on dark or gradient
                            backgrounds (Medium Weight.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
    </>
  );
};

export default SearchPage;
