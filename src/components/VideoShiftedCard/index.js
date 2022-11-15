import React from "react";
import ContainerSection from "../Container";
import circle from "../../assets/images/circle.svg";
import VideoCardSmall from "../VideoCardSmall";
import VideoCard from "../VideoCard/VideoCard";
import images from "../../constants/images";
import VidCard from "../VidCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const para = `Body copy style for white text on dark or gradient backgrounds
(Medium Weight) Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Mauris placerat euismod porttitor.`;

const VideoCardShifted = ({
  width = "600px",
  image = images.placeholder1,
  heading = "Gradient Card Headline",
  desc = para,
}) => {
  return (
    <section className="vcs">
      <ContainerSection bgGradient={"yes"} borderRadius>
        <div className="vcs-container">
          <div className="vcs-info">
            <div className="vcs-info-and-icon">
              <img src={circle} />
              <h4 className="vcs-heading">{heading}</h4>
            </div>
            <p className="vcs-para">{desc}</p>
            <a className="vcs-link">
              <Link to="/tools/tonglen">
                SEE MORE
                <span className="vcs-link-icon">
                  <ArrowForwardIcon fontSize="large" />
                </span>
              </Link>
            </a>
          </div>
          <div className="vcs-video-card">
            <VidCard image={image} noTitle />
            <div className="vcs-video-card-subText">
              <Link to="/tools/tonglen">
                <p>Details</p>
              </Link>
              <Link to="/topic">
                <p>#Tag</p>
              </Link>
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default VideoCardShifted;
