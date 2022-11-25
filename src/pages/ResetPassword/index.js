import React, { useState } from "react";
import PinCodeInput from "../../components/PinCodeInput.js";
import ButtonFilled from "../../components/Button/ButtonFilled.js";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useNavigate } from "react-router-dom";

const ResetPassword = ({ email = "user@gmail.com" }) => {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Confirm");

  return (
    <section className="ec">
      <div className="ec-icon" onClick={() => navigate("/login")}>
        <ArrowBackIosRoundedIcon
          color="success"
          fontSize="large"
          className="icon"
        />
      </div>
      <div className="container ec-container">
        <h3 className="ec-heading">Reset Password</h3>
        <p className="ec-para">
          {`Please enter the 6 digits code sent to you registered email address ${email}`}
        </p>
        <PinCodeInput />
        {buttonText === "Confirm" ? (
          <div
            className="ec-btn-container"
            onClick={() => setButtonText("Confirmed")}
          >
            <ButtonFilled bgGradient={"yes"} text="Confirm" paddingX />
          </div>
        ) : (
          <div
            className="ec-btn-container"
            onClick={() => navigate("/updatepassword")}
          >
            <ButtonFilled bgGradient={"yes"} text="Confirmed" paddingX />
          </div>
        )}
        {/* </Link> */}
      </div>
    </section>
  );
};

export default ResetPassword;
