import React from "react";
import rectangle from "../../assets/images/rectangle.svg";

const gradientBackground = {
  backgroundImage: `url(${rectangle})`,
  color: "rgba(255, 255, 255, 1)",
  fontWeight: 400,
};

const ButtonFilled = ({
  text = "Button",
  bgGradient,
  paddingX,
  paddingY,
  paddingXSmall,
  paddingYSmall,
  padXResponsive,
  padYResponsive,
  // onPressFunction = () => null,
}) => {
  return (
    <button
      className={`${paddingX && "pd-x"} ${paddingY && "pd-y"} ${
        padYResponsive && "pd-y-res"
      } ${padXResponsive && "pd-x-res"} ${paddingYSmall && "pd-y-small"} ${
        paddingXSmall && "pd-x-small"
      } btn-filled`}
      style={bgGradient === "yes" ? gradientBackground : null}
      // onPress={onPressFunction}
    >
      {text}
    </button>
  );
};

export default ButtonFilled;
