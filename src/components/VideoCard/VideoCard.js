import React from "react";
import VideoIcon from "../../assets/images/video-icon.svg";
import images from "../../constants/images";

const VideoCard = ({ time = "00:00", leftMargin,rightMargin }) => {
  return (
    <div className="video-container" style={{ marginLeft: leftMargin ,marginRight:rightMargin}}>
      <img src={images.placeholder2} className="image" />
      <p className="video-title ">Title</p>
      <img src={VideoIcon} className="video-icon " />
      <p className="video-time">{time}</p>
    </div>
  );
};

export default VideoCard;
