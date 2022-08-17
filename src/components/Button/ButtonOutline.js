import React from "react";
// import { Button } from "react-bootstrap";

const ButtonOutline = ({ text = "Button" }) => {
  return (
    <div classname="btn-outline-container">
      <button className="btn-outline">{text}</button>
    </div>
  );
};

export default ButtonOutline;
