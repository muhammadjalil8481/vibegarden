import React from "react";
import images from "../../constants/images";
import VideoIcon2nd from "../../assets/images/video-tag-icon.svg";
import VideoIcon from "../../assets/images/video-icon.svg";

const VidCard = ({ titleIcon, blackTitle, image = images.placeholder5 }) => {
  return (
    <div className="card vid-card border-0">
      <img src={image} className="vid-card-image" />
      {/* <div className="card-img-overlay"> */}
        <div className="vid-card-titleAndIcon">
          {titleIcon && <img src={VideoIcon2nd} />}
          {titleIcon && (
            <h5 className={`vid-card-title ${blackTitle && "text-black"}`}>
              Title
            </h5>
          )}
        </div>
        {!titleIcon && (
          <h5 className={`vid-card-topTitle ${blackTitle && "text-black"}`}>
            Title
          </h5>
        )}
        <img src={VideoIcon} className="vid-card-video-icon" />
        <p className="vid-card-time">00:00</p>
      {/* </div> */}
    </div>
  );
};

export default VidCard;
