import React from "react";
import FormGroupAuth from "../../components/FormInputAuth";
import GreenButton from "../../components/Button/GreenButton";
import images from "../../constants/images";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="payment">
      <div className="ec-icon">
        <Link to="/schedule">
          <ArrowBackIosRoundedIcon
            color="success"
            fontSize="large"
            className="icon"
          />
        </Link>
      </div>
      <div className="payment-top">
        <h2>Payment Details</h2>
        <p>Credit Card Or Debit Card</p>
      </div>
      <div>
        <FormGroupAuth label="Card Number" />
        <FormGroupAuth label="Expiration Date" inputType="date" />
        <FormGroupAuth label="Security Code" />
      </div>
      <div className="payment-btn">
        <Link to="/thankyou">
          <GreenButton paddingX text="Confirm" />
        </Link>
      </div>
      <div className="payment-price">
        <img src={images.paymentOptions} />
      </div>
    </div>
  );
};

export default Payment;
