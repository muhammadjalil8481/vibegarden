import React from "react";
import ButtonFilled from "../Button/ButtonFilled";

const ButtonAndHeading = ({
  text = "Join The Waiting List",
  heading = "Interested In Become Vibeguide?",
}) => {
  return (
    <div className="buttonAndHeading">
      <h2 className="bah-heading">{heading}</h2>
      <ButtonFilled text={text} paddingX bgGradient={"yes"} paddingY />
    </div>
  );
};

export default ButtonAndHeading;
