import React from "react";
import RectangularVideoCard from "../RectangularVideoCard";
import images from "../../constants/images";

const WhiteInfoCard = ({
  heading = "Heading",
  para = "Body copy style for white text on dark or gradient backgrounds (Medium Weight) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat euismod porttitor.",
  image = images.placeholder4,
}) => {
  return (
    <div className="wic">
      <h4 className="wic-heading">{heading}</h4>
      <p className="wic-para">{para}</p>
      <div className="wic-video-container">
        <RectangularVideoCard width="295px" image={image} />
      </div>
    </div>
  );
};

export default WhiteInfoCard;
