import React from "react";
import images from "../../constants/images";
import VideoCard from "../VideoCard/VideoCard";
import VidCard from "../VidCard";
import ButtonFilled from "../Button/ButtonFilled";

const WhiteInfoCard = ({
  heading = "Heading",
  para = "Body copy style for white text on dark or gradient backgrounds (Medium Weight) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat euismod porttitor.",
  image = images.placeholder4,
  btnText = "Button Text",
}) => {
  return (
    <div className="wic">
      <h4 className="wic-heading">{heading}</h4>
      <p className="wic-para">{para}</p>
      <div className="wic-vid-container">
        <VidCard image={image} noTitle />
      </div>
      <div className="wic-btn-container">
        <ButtonFilled bgGradient={"yes"} text={btnText} />
      </div>
    </div>
  );
};

export default WhiteInfoCard;
