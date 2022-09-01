import React from "react";
import VideoIcon2nd from "../../assets/images/video-tag-icon.svg";
import images from "../../constants/images";
import VideoIcon from "../../assets/images/video-icon.svg";
import PinkIcon from "../../assets/images/pink-icon.svg";
import ButtonFilled from "../../components/Button/ButtonFilled";
import VidCard from "../VidCard";
import { Link } from "react-router-dom";

const ThreeColumnWhiteVideoInfoLayout = ({
  title1 = "Title1",
  title2 = "Title2",
  title3 = "Title3",
}) => {
  return (
    <div className="container-lg tcwvil">
      <div className="row tcwvil-row">
        <div className="col-md-4 tcwvil-card-container">
          <div className="card tcwvil-card">
            <div className="tcwvil-titleAndIcon">
              <div className="tcwvil-icon">
                <img src={PinkIcon} />
              </div>
              <h5 className="tcwvil-title">{title1}</h5>
            </div>
            <p className="tcwvil-para">
              Body copy style for white text on dark or gradient backgrounds
              (Medium Weight) Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Mauris placerat euismod porttitor.
            </p>
            <div className="tcwvil-video">
              <VidCard image={images.placeholder} />
            </div>
            <div className="tcwvil-subtext-container">
              <Link to="/individualgroundwork">
                <p className="tcwvil-subtext">Details</p>
              </Link>
              <Link to="/topic">
                <p className="tcwvil-subtext">#Tag</p>
              </Link>
            </div>
            <div className="tcwvil-btn">
              <ButtonFilled text="Learn More" bgGradient={"yes"} paddingX />
            </div>
          </div>
        </div>
        <div className="col-md-4  tcwvil-card-container">
          <div className="card tcwvil-card">
            <div className="tcwvil-titleAndIcon">
              <div className="tcwvil-icon">
                <img src={PinkIcon} />
              </div>
              <h5 className="tcwvil-title">{title2}</h5>
            </div>
            <p className="tcwvil-para">
              Body copy style for white text on dark or gradient backgrounds
              (Medium Weight) Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Mauris placerat euismod porttitor.
            </p>
            <div className="tcwvil-video">
              <VidCard />
            </div>
            <div className="tcwvil-subtext-container">
              <Link to="/individualgroundwork">
                <p className="tcwvil-subtext">Details</p>
              </Link>
              <Link to="/topic">
                <p className="tcwvil-subtext">#Tag</p>
              </Link>
            </div>
            <div className="tcwvil-btn">
              <ButtonFilled text="Learn More" bgGradient={"yes"} paddingX />
            </div>
          </div>
        </div>
        <div className="col-md-4 tcwvil-card-container">
          <div className="card tcwvil-card border-0">
            <div className="tcwvil-titleAndIcon">
              <div className="tcwvil-icon">
                <img src={PinkIcon} />
              </div>
              <h5 className="tcwvil-title">{title3}</h5>
            </div>
            <p className="tcwvil-para">
              Body copy style for white text on dark or gradient backgrounds
              (Medium Weight) Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Mauris placerat euismod porttitor.
            </p>
            <div className="tcwvil-video">
              <VidCard image={images.placeholder4} />
            </div>
            <div className="tcwvil-subtext-container">
              <Link to="/individualgroundwork">
                <p className="tcwvil-subtext">Details</p>
              </Link>
              <Link to="/topic">
                <p className="tcwvil-subtext">#Tag</p>
              </Link>
            </div>
            <div className="tcwvil-btn">
              <ButtonFilled text="Learn More" bgGradient={"yes"} paddingX />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnWhiteVideoInfoLayout;
