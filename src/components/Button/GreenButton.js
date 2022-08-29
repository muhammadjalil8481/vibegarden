import React from "react";

const GreenButton = ({ text = "Button", paddingX, outline }) => {
  return (
    // <div classname="btn-green-container">
    <button
      className={`${paddingX && "pd-x"} ${
        !outline ? "btn-green" : "btn-green-outline"
      }`}
    >
      {text}
    </button>
    // </div>
  );
};

export default GreenButton;
