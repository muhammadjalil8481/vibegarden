import React from "react";
import VideoIcon from "../../assets/images/video-icon.svg";
import images from "../../constants/images";

const VideoCard = ({
  time = "00:00",
  title,
  leftMargin,
  rightMargin,
  width = "300px",
  height = "230px",
  image = images.placeholder4,
}) => {
  return (
    <div
      className="vc-container"
      style={{
        marginLeft: leftMargin,
        marginRight: rightMargin,
        width: width,
        height: height,
      }}
    >
      <img src={image} className="vc-img" />
      {title && <p className="vc-title">{title}</p>}
      <img src={VideoIcon} className="vc-icon" />
      <p className="vc-time">{time}</p>
    </div>
  );
};

export default VideoCard;
