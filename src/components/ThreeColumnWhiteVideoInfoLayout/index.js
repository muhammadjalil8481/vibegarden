import React from "react";
import VideoIcon2nd from "../../assets/images/video-tag-icon.svg";
import images from "../../constants/images";
import VideoIcon from "../../assets/images/video-icon.svg";
import ButtonFilled from "../../components/Button/ButtonFilled";
import VidCard from "../VidCard";

const ThreeColumnWhiteVideoInfoLayout = () => {
  return (
    <div className="container tcwvil">
      <div className="row ">
        <div className="col-md-4">
          <div className="card tcwvil-card">
            <div className="tcwvil-titleAndIcon">
              <img src={VideoIcon2nd} />
              <h5 className="tcwvil-title">Title</h5>
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
              <p className="tcwvil-subtext">Lorem</p>
              <p className="tcwvil-subtext">Lorem</p>
            </div>
            <div className="tcwvil-btn">
              <ButtonFilled text="Learn More" bgGradient={"yes"} paddingX />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card tcwvil-card">
            <div className="tcwvil-titleAndIcon">
              <img src={VideoIcon2nd} />
              <h5 className="tcwvil-title">Title</h5>
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
              <p className="tcwvil-subtext">Lorem</p>
              <p className="tcwvil-subtext">Lorem</p>
            </div>
            <div className="tcwvil-btn">
              <ButtonFilled text="Learn More" bgGradient={"yes"} paddingX />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card tcwvil-card border-0">
            <div className="tcwvil-titleAndIcon">
              <img src={VideoIcon2nd} />
              <h5 className="tcwvil-title">Title</h5>
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
              <p className="tcwvil-subtext">Lorem</p>
              <p className="tcwvil-subtext">Lorem</p>
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