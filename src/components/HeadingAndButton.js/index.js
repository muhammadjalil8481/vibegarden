import React from "react";
import ButtonFilled from "../Button/ButtonFilled";

const ButtonAndHeading = () => {
  return (
    <div className="buttonAndHeading">
      <h2 className="bah-heading">Interested In Become Vibeguide?</h2>
      <ButtonFilled
        text="Join The Waiting List"
        paddingX
        bgGradient={"yes"}
        paddingY
      />
    </div>
  );
};

export default ButtonAndHeading;
