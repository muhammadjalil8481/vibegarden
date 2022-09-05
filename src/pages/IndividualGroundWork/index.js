import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import NavBar from "../../components/Navbar";
import pinkIcon from "../../assets/images/pink-icon.svg";
import VidCard from "../../components/VidCard";
import GreenLineBreak from "../../components/GreenLineBreak";
import StarIcon from "@mui/icons-material/Star";
import Comment from "../../components/Comments";
import GreenButton from "../../components/Button/GreenButton";
import Carousel from "react-elastic-carousel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { consts } from "react-elastic-carousel";
import images from "../../constants/images";
import Footer from "../../components/Footer";
import ButtonAndHeading from "../../components/HeadingAndButton.js";
import VideoCardSlider from "../../components/VideoCardSlider";

function myArrow({ type, onClick, isEdge }) {
  const pointer =
    type === consts.PREV ? (
      <ArrowBackIcon
        fontSize="large"
        color={!isEdge ? "success" : "disabled"}
      />
    ) : (
      <ArrowForwardIcon
        fontSize="large"
        color={!isEdge ? "success" : "disabled"}
      />
    );
  return (
    <button
      onClick={onClick}
      disabled={isEdge}
      className={`slider-btn ${
        type === consts.PREV ? "left-btn" : "right-btn"
      }`}
    >
      {pointer}
    </button>
  );
}

const IndividualGroundWork = () => {
  const location = useLocation();
  //   console.log(location.state);
  const breakPoints = [{ width: 1, itemsToShow: 1 }];

  return (
    <>
      <NavBar />
      <section className="container idgw-1">
        <div className="idgw-1-headingAnIcon">
          <img src={pinkIcon} />
          <h2>Family Of Light</h2>
        </div>
        <p className="idgw-1-desc">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kas
        </p>
        <div className="idgw-1-video">
          <VidCard />
        </div>
        <div className="idgw-1-subtext">
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
        </div>
      </section>
      <GreenLineBreak />
      <section className="idgw-2 container-lg">
        <div className="idgw-2-headingAndRating">
          <h4 className="idgw-2-heading">Recent Comments</h4>
          <div className="idgw-2-rating">
            <span>
              <StarIcon fontSize="large" />
            </span>
            <h5 className="idgw-2-rating-text">4.71 - 187</h5>
          </div>
        </div>
        <div className="idgw-2-comment">
          <Carousel breakPoints={breakPoints} renderArrow={myArrow}>
            <Comment />
            <Comment />
            <Comment />
          </Carousel>
        </div>
        <div className="idgw-2-newComment">
          <h4 className="idgw-2-heading">Leave A Comment</h4>
          <textarea
            className="idgw-2-textArea"
            placeholder="Type Your Comment"
          />
          <div className="idgw-2-btn">
            <GreenButton text="Post Comment" paddingX />
          </div>
        </div>
      </section>
      <div className="idgw3-video-slider container-xxl">
        <VideoCardSlider />
      </div>
      <section className="container-lg idgw-links">
        <h2>Additional Resource</h2>
        <div className="link-display">
          <div className="link-display-heading">
            <span>•</span>
            <h4>Link Display Name</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasLorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor i
          </p>
        </div>
        <div className="link-display">
          <div className="link-display-heading">
            <span>•</span>
            <h4>Link Display Name</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasLorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor i
          </p>
        </div>
      </section>
      <section className="idgw-5 container-lg">
        <h2>Suggested Teacher</h2>
        <div className="idgw-5-row">
          <div className="idgw-5-col-1">
            <img src={images.teacher1} />
          </div>
          <div className="idgw-5-col-2">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasLorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor I Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut.<span>Link</span>
            </p>
          </div>
        </div>
        <div className="idgw-5-row">
          <div className="idgw-5-col-1">
            <img src={images.teacher2} />
          </div>
          <div className="idgw-5-col-2">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasLorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor I Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut.<span>Link</span>
            </p>
          </div>
        </div>
      </section>
      <GreenLineBreak />
      <ButtonAndHeading
        heading="Want To Go Deeper?"
        text="Schedule Vibrguides"
      />
      <Footer />
    </>
  );
};

export default IndividualGroundWork;
