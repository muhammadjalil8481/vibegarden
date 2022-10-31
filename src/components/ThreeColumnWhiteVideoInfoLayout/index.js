import React from "react";
import VideoIcon2nd from "../../assets/images/video-tag-icon.svg";
import images from "../../constants/images";
import VideoIcon from "../../assets/images/video-icon.svg";
import PinkIcon from "../../assets/images/pink-icon.svg";
import ButtonFilled from "../../components/Button/ButtonFilled";
import VidCard from "../VidCard";
import { Link, useNavigate } from "react-router-dom";

const ThreeColumnWhiteVideoInfoLayout = ({
  title1 = "Title1",
  title2 = "Title2",
  title3 = "Title3",
  noRedirect,
}) => {
  const navigate = useNavigate();
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
              {!noRedirect ? (
                <VidCard image={images.placeholder} />
              ) : (
                <Link to="/individualgroundwork" state={{ heading: title1 }}>
                  <VidCard image={images.placeholder} recentVibes />
                </Link>
              )}
            </div>
            <div className="tcwvil-subtext-container">
              <Link to="/individualgroundwork" state={{ heading: title1 }}>
                <p className="tcwvil-subtext">Details</p>
              </Link>
              <Link to="/topic">
                <p className="tcwvil-subtext">#Tag</p>
              </Link>
            </div>
            <Link to="/individualgroundwork" state={{ heading: title1 }}>
              <div className="tcwvil-btn">
                <ButtonFilled text="Learn More" bgGradient={"yes"} paddingX />
              </div>
            </Link>
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
              {!noRedirect ? (
                <VidCard />
              ) : (
                <Link to="/individualgroundwork" state={{ heading: title2 }}>
                  <VidCard recentVibes />
                </Link>
              )}
            </div>
            <div className="tcwvil-subtext-container">
              <Link to="/individualgroundwork" state={{ heading: title2 }}>
                <p className="tcwvil-subtext">Details</p>
              </Link>
              <Link to="/topic">
                <p className="tcwvil-subtext">#Tag</p>
              </Link>
            </div>
            <Link to="/individualgroundwork" state={{ heading: title2 }}>
              <div className="tcwvil-btn">
                <ButtonFilled text="Learn More" bgGradient={"yes"} paddingX />
              </div>
            </Link>
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
              {!noRedirect ? (
                <VidCard image={images.placeholder4} />
              ) : (
                <Link to="/individualgroundwork" state={{ heading: title3 }}>
                  <VidCard recentVibes image={images.placeholder4} />
                </Link>
              )}
            </div>
            <div className="tcwvil-subtext-container">
              <Link to="/individualgroundwork" state={{ heading: title3 }}>
                <p className="tcwvil-subtext">Details</p>
              </Link>
              <Link to="/topic">
                <p className="tcwvil-subtext">#Tag</p>
              </Link>
            </div>
            <Link to="/individualgroundwork" state={{ heading: title3 }}>
              <div className="tcwvil-btn">
                <ButtonFilled text="Learn More" bgGradient={"yes"} paddingX />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnWhiteVideoInfoLayout;
