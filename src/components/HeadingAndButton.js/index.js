import React from "react";
import ButtonFilled from "../Button/ButtonFilled";
import { Link } from "react-router-dom";

const ButtonAndHeading = ({
  text = "Join The Waiting List",
  heading = "Interested In Become Vibeguide?",
  link = "#",
}) => {
  return (
    <div className="buttonAndHeading">
      <h2 className="bah-heading">{heading}</h2>
      <Link to={link}>
        <ButtonFilled text={text} padXResponsive bgGradient={"yes"} paddingY />
      </Link>
    </div>
  );
};

export default ButtonAndHeading;
