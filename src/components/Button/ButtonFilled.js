import React from "react";
import rectangle from "../../assets/images/rectangle.svg";

const gradientBackground = {
  backgroundImage: `url(${rectangle})`,
  color: "rgba(255, 255, 255, 1)",
};

const ButtonFilled = ({ text = "Button", bgGradient }) => {
  return (
    <button
      className="btn-filled"
      style={bgGradient === "yes" ? gradientBackground : null}
    >
      {text}
    </button>
  );
};

export default ButtonFilled;
