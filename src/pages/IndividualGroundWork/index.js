import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import NavBar from "../../components/Navbar";
import pinkIcon from "../../assets/images/pink-icon.svg";
import VidCard from "../../components/VidCard";
import GreenLineBreak from "../../components/GreenLineBreak";
import StarIcon from "@mui/icons-material/Star";
import Comment from "../../components/Comments";
import GreenButton from "../../components/Button/GreenButton";

const IndividualGroundWork = () => {
  const location = useLocation();
  //   console.log(location.state);

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
      <section className="idgw-2 container">
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
          <Comment />
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
    </>
  );
};

export default IndividualGroundWork;
