import React from "react";
import { Link } from "react-router-dom";

const ColoredLink = ({ text = "Colored Link" }) => {
  return <p className="colored-link">{text}</p>;
};

export default ColoredLink;
