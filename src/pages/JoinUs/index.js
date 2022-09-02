import React, { useEffect } from "react";
import CheckBoxList from "../../components/CheckBoxList";
import NavBar from "../../components/Navbar";
import EmptyVideoCard from "../../components/EmptyVideoCard.js";
import PaymentPlanCard from "../../components/PaymentPlanCard/PaymentPlanCard";
import Footer from "../../components/Footer";
import GreenButton from "../../components/Button/GreenButton";
import images from "../../constants/images";
import FormGroupAuth from "../../components/FormInputAuth";
import { useNavigate, Link, useLocation } from "react-router-dom";
import VidCard from "../../components/VidCard";

const JoinUs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let isEmailVerified = null;
  if (location.state && location.state.isEmailVerified) isEmailVerified = "yes";
 

  return (
    <div className="join-us">
      <NavBar onlyBrand />
      <div className="container-lg join-us-container mt-5">
        <div className="row join-us-row">
          <div className="col-md-5 join-us-left-col">
            <div className="join-us-heading">
              <h2>Brilliant Choice You !</h2>
            </div>
            <div className="join-us-checkbox-list my-5">
              <CheckBoxList />
            </div>
            <div className="join-us-video-card">
              {/* <EmptyVideoCard width="450px" /> */}
              <VidCard noTitle pinkVideoIcon image={images.placeholder5} />
            </div>
            <div className="join-us-info my70">
              <h3 className="join-us-info-heading mb-4">
                Reawaken Your Inner Knowing
              </h3>
              <p className="join-us-info-para ">
                Default body copy style for text on white / light color
                backgrounds Mauris placerat euismod porttitor. Nam nec mauris
                non magnaSed dapibus, est non pulvinar fringilla, loremody copy
                style for text on white / light color backgrounds Mauris
                placerat euismod porttitor. Nam nec mauris non magnaSed dapibus,
                est non pulvinar fringilla, loremody copy style for text on
                white / light color backgrounds Mauris placerat euismod
                porttitor. Nam nec mauris non magnaSed dapibus, est non pulvinar
                fringilla, lorem
              </p>
            </div>
          </div>
          <div className="col-md-1 line-break-container">
            <div className="line-break-vertical"></div>
          </div>
          <div className="col-md-6 join-us-right-col">
            <h3
              className="join-us-back-btn"
              onClick={
                isEmailVerified !== "yes"
                  ? () => navigate("/")
                  : () => navigate("/email-confirmation")
              }
            >
              &#60; Back
            </h3>
            <div className="join-us-ppc">
              <PaymentPlanCard monthly />
              {isEmailVerified !== "yes" && <PaymentPlanCard />}
            </div>
            {isEmailVerified === "yes" && (
              <div className="join-us-payment">
                <img src={images.paymentOptions} />
              </div>
            )}
            <h4 className="join-us-credit-heading">
              Credit Card Or Debit Card
            </h4>

            <form className="join-us-form">
              {isEmailVerified ? (
                <>
                  <FormGroupAuth label="Card Number" inputType="text" />
                  <FormGroupAuth label="Expiration Date" inputType="date" />
                  <FormGroupAuth label="Security Code" inputType="text" />
                  <FormGroupAuth
                    label="Country"
                    options={["USA", "UK", "Pakistan"]}
                    isSelectInput
                  />
                  <FormGroupAuth label="State" isSelectInput />
                  <FormGroupAuth label="Postal Code" inputType="text" />
                </>
              ) : (
                <>
                  <FormGroupAuth label="First Name" inputType="text" />
                  <FormGroupAuth label="Last Name" inputType="text" />
                  <FormGroupAuth label="Email" inputType="email" />
                  <FormGroupAuth
                    label="Password"
                    inputType="password"
                    showPasswordIcon
                  />
                  <FormGroupAuth
                    label="Confirm Password"
                    inputType="password"
                    showPasswordIcon
                  />
                </>
              )}
            </form>
            {isEmailVerified !== "yes" && (
              <h3
                className="join-us-next-btn"
                onClick={() => navigate("/email-confirmation")}
              >
                Next&#62;
              </h3>
            )}
            {isEmailVerified === "yes" && (
              <div
                className="join-us-submit-btn"
                onClick={() => navigate("/login")}
              >
                <GreenButton paddingX text="Submit" />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JoinUs;
