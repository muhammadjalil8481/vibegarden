import React from "react";
import { Link } from "react-router-dom";

const ColoredLink = ({ text = "Colored Link" }) => {
  return <a className="colored-link">{text}</a>;
};

export default ColoredLink;
