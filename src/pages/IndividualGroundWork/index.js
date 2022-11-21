import React, { useState } from "react";
import { useNavigate, Link, useLocation, useParams } from "react-router-dom";
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
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import res1 from "../../assets/images/reson1.svg";
import res2 from "../../assets/images/reson2.svg";
import res3 from "../../assets/images/reson3.svg";
import res4 from "../../assets/images/reson4.svg";
import { BsChevronUp, BsChevronDown, BsCheckLg } from "react-icons/bs";

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

const IndividualGroundWork = ({ groundWork, freshBloom }) => {
  const params = useParams().name.replaceAll("-", " ");
  const breakPoints = [{ width: 1, itemsToShow: 1 }];
  const { state, pathname } = useLocation();
  const route = pathname.slice(0, pathname.lastIndexOf("/"));
  const [isFav, setIsFav] = useState(false);
  const [addTool, setAddTool] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <div className="individual-groundwork">
      <NavBar />
      <section className="container-md idgw-1">
        <div className="idgw-1-headingAnIcon">
          <img src={pinkIcon} />
          <h2>{params || "heading"}</h2>
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
        <div className="idgw-1-videoSubInfo">
          <div className="idgw-1-subtext">
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
          {/* {(groundWork || freshBloom) && ( */}
          <div className="idgw-1-icons">
            <div className="idgw-1-icon" onClick={() => setIsFav(!isFav)}>
              {!isFav ? (
                <BsHeart size={25} color="rgba(255, 84, 90, 1)" />
              ) : (
                <BsHeartFill size={25} color="rgba(255, 84, 90, 1)" />
              )}
            </div>
            {/* )} */}

            {route === "/tools" && (
              <div
                className="idgw-1-icon tool-icon"
                onClick={() => setAddTool(!addTool)}
              >
                {!addTool ? (
                  <AiOutlinePlusCircle size={28} color="rgba(255, 84, 90, 1)" />
                ) : (
                  <AiFillPlusCircle size={28} color="rgba(255, 84, 90, 1)" />
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      {/* {route === "/tools" && <GreenLineBreak />} */}
      {route === "/tools" && (
        <section className="idgw-ratings">
          <h4>Did This Tool Bloom Your Vibe ?</h4>
          <div className="idgw-rating-items">
            <div className="idgw-rating-item">
              {rating === 1 ? (
                <span className="idgw-rating-checked bg-gradient-pink">
                  <BsCheckLg size={25} fill="white" />
                </span>
              ) : (
                <span onClick={() => setRating(1)}>
                  <img src={res1} />
                </span>
              )}
              <p>Not Really</p>
            </div>
            <div className="idgw-rating-item">
              {rating === 2 ? (
                <span className="idgw-rating-checked bg-gradient-pink">
                  <BsCheckLg size={25} fill="white" />
                </span>
              ) : (
                <span onClick={() => setRating(2)}>
                  <img src={res2} />
                </span>
              )}
              <p>Baby Bloom</p>
            </div>
            <div className="idgw-rating-item">
              {rating === 3 ? (
                <span className="idgw-rating-checked bg-gradient-pink">
                  <BsCheckLg size={25} fill="white" />
                </span>
              ) : (
                <span onClick={() => setRating(3)}>
                  <img src={res3} />
                </span>
              )}
              <p>Solid Bloom</p>
            </div>
            <div className="idgw-rating-item">
              {rating === 4 ? (
                <span className="idgw-rating-checked bg-gradient-pink">
                  <BsCheckLg size={25} fill="white" />
                </span>
              ) : (
                <span onClick={() => setRating(4)}>
                  <img src={res4} />
                </span>
              )}
              <p>Big Bloom</p>
            </div>
          </div>
        </section>
      )}
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
        <VideoCardSlider
          heading="Related Content"
          tools={route === "/tools" ? true : false}
          groundwork={route === "/groundwork" ? true : false}
        />
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
    </div>
  );
};

export default IndividualGroundWork;
