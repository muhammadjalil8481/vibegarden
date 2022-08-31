import React from "react";
import VidCard from "../VidCard";
import ButtonFilled from "../Button/ButtonFilled";
import { useNavigate, Link } from "react-router-dom";
const ScheduleCard = ({ name = "Name" }) => {
  return (
    <div className="card sc-card border-0">
      <div className="sc-card-username-container">
        <div className="sc-card-username-circle bg-gradient-green"></div>
        <p className="sc-card-username-name">{name}</p>
      </div>
      <div className="sc-card-videocard">
        <VidCard />
      </div>
      <p className="sc-card-para">
        Body copy style for white text on dark or gradient backgrounds (Medium
        Weight) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        placerat euismod portti
      </p>
      <Link to="/schedule">
        <div className="sc-card-btn">
          <ButtonFilled bgGradient={"yes"} text={`Schedule With ${name}`} />
        </div>
      </Link>
    </div>
  );
};

export default ScheduleCard;
