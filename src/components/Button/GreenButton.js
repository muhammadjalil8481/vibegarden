import React from "react";

const GreenButton = ({ text = "Button", paddingX }) => {
  return (
    // <div classname="btn-green-container">
    <button className={`${paddingX && "pd-x"} btn-green`}>{text}</button>
    // </div>
  );
};

export default GreenButton;
