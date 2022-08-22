import React from "react";
import CheckBoxList from "../../components/CheckBoxList";
import NavBar from "../../components/Navbar";
import EmptyVideoCard from "../../components/EmptyVideoCard.js";
import PaymentPlanCard from "../../components/PaymentPlanCard/PaymentPlanCard";
import Footer from "../../components/Footer";
import FormGroupAuth from "../../components/FormInputAuth";
import { useNavigate } from "react-router-dom";

const JoinUs = () => {
  const navigate = useNavigate();
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
              <EmptyVideoCard width="450px" />
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
            <h3 className="join-us-back-btn" onClick={() => navigate("/")}>
              &#60; Back
            </h3>
            <div className="join-us-ppc">
              <PaymentPlanCard monthly />
              <PaymentPlanCard />
            </div>
            <form className="join-us-form">
              <FormGroupAuth label="First Name" inputType="text" />
              <FormGroupAuth label="Last Name" inputType="text" />
              <FormGroupAuth label="Email" inputType="email" />
              <FormGroupAuth label="Password" inputType="password" />
              <FormGroupAuth label="Confirm Password" inputType="password" />
            </form>
            <h3 className="join-us-next-btn">Next &#62;</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JoinUs;
