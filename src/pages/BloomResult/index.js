import React from "react";
import images from "../../constants/images";
import { BsFillCheckCircleFill } from "react-icons/bs";
import ButtonFilled from "../../components/Button/ButtonFilled";
import { Link, useLocation } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";

const BloomResult = () => {
  const { state } = useLocation();
  const { percent } = state;
  return (
    <div className="bloom-result bg-lightGreenMask">
      <Link to="/bloomcheck">
        <span className="bc-back">
          <RiArrowLeftLine size={30} fill="white" />
        </span>
      </Link>
      <div className="br-percent">
        {/* <img src={images.bloomPercent1Big} /> */}
        {percent >= 0 && percent <= 25 && <img src={images.bloomPercent1Big} />}
        {percent > 25 && percent <= 50 && <img src={images.bloomPercent2Big} />}
        {percent > 50 && percent <= 75 && <img src={images.bloomPercent3Big} />}
        {percent > 75 && percent <= 100 && (
          <img src={images.bloomPercent4Big} />
        )}
        <h4>{percent}%</h4>
        <BsFillCheckCircleFill size={30} color="rgba(27, 91, 47,0.8)" />
      </div>
      <h2>Perfect Erin!</h2>
      <p>
        We Have Tools to Support Your Unique Journey to full bloom the world
        could sure use more of your light?
      </p>
      <Link to="/homepage">
        <ButtonFilled
          text="Take Me To the Garden"
          paddingX
          bgGradient={"yes"}
          paddingY
        />
      </Link>
    </div>
  );
};

export default BloomResult;
