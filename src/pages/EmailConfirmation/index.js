import React from "react";
import PinCodeInput from "../../components/PinCodeInput.js";
import ButtonFilled from "../../components/Button/ButtonFilled.js";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Link, useNavigate } from "react-router-dom";

const EmailConfirmation = ({ email = "ab***@gmail.com" }) => {
  const navigate = useNavigate();
  return (
    <section className="ec">
      <div className="ec-icon" onClick={() => navigate("/join-us")}>
        <ArrowBackIosRoundedIcon
          color="success"
          fontSize="large"
          className="icon"
        />
      </div>
      <div className="container ec-container">
        <h3 className="ec-heading">Email Confirmation</h3>
        <p className="ec-para">
          {`Please enter the 6 digits code sent to you registered email address
                ${email}`}
        </p>
        <PinCodeInput />
        {/* <Link to={{"/join-us", isEmailVerified}}> */}
        <div
          className="ec-btn-container"
          onClick={() =>
            navigate("/join-us", { state: { isEmailVerified: "yes" } })
          }
        >
          <ButtonFilled bgGradient={"yes"} text="Confirm" paddingX />
        </div>
        {/* </Link> */}
      </div>
    </section>
  );
};

export default EmailConfirmation;
