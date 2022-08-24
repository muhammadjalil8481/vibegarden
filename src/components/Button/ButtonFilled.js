import React from "react";
import rectangle from "../../assets/images/rectangle.svg";

const gradientBackground = {
  backgroundImage: `url(${rectangle})`,
  color: "rgba(255, 255, 255, 1)",
};

const ButtonFilled = ({
  text = "Button",
  bgGradient,
  paddingX,
  // onPressFunction = () => null,
}) => {
  const padX = { paddingLeft: paddingX, paddingRight: paddingX };
  return (
    <button
      className={`${paddingX && "pd-x"} btn-filled`}
      style={bgGradient === "yes" ? gradientBackground : null}
      // onPress={onPressFunction}
    >
      {text}
    </button>
  );
};

export default ButtonFilled;
