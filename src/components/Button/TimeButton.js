import React,{useState} from "react";

const TimeButton = ({ first = "00:00", second = "AM" }) => {
  
  return (
    <div className="time-button ">
      <p>{first}</p>
      <p className="character">|</p>
      <p>{second}</p>
    </div>
  );
};

export default TimeButton;
