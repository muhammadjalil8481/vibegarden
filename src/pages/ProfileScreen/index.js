import React, { useState } from "react";
import images from "../../constants/images";
import ButtonFilled from "../../components/Button/ButtonFilled";
import GreenButton from "../../components/Button/GreenButton";
import NavBar from "../../components/Navbar";
import HeadingLine from "../../components/HeadingLine";
import FormGroupAuth from "../../components/FormInputAuth";
import EditIcon from "../../assets/images/editIcon.svg";
import Footer from "../../components/Footer";
import ProfileModal from "../../components/Modal/profileModal";
import { Link, useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <NavBar />
      <section className="profile-screen">
        <div className="container-lg ps-container ">
          <div className="row ps-row ">
            <div className="ps-top col-12">
              <div className="ps-top-imginfo">
                <div className="ps-top-image">
                  <img src={images.userImageBig} />
                </div>
                <div className="ps-top-info">
                  <h3 className="ps-top-heading">Alex Gree</h3>
                  <p className="ps-top-subscription">
                    Monthly Package <span>Activated</span>
                  </p>
                </div>
              </div>
              <div className="ps-top-buttons">
                <div className="ps-top-btn" onClick={() => setShowModal(true)}>
                  <GreenButton outline text="Save" padXResponsive />
                </div>
                <ButtonFilled
                  padXResponsive
                  bgGradient={"yes"}
                  X
                  text="Cancel"
                />
              </div>
            </div>
            <div className="col-md-6 ps-aboutForm">
              <div className="ps-heading">
                <HeadingLine text="About" />
              </div>
              <div className="ps-form">
                <FormGroupAuth label="First Name" />
                <FormGroupAuth label="Last Name" />
                <FormGroupAuth label="Email Address" />
                <div className="ps-inputIcon">
                  <FormGroupAuth
                    label="Password"
                    inputType="password"
                    showPasswordIcon
                  />
                  <Link to="/updatepassword">
                    <div className="ps-editPassword">
                      <img src={EditIcon} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 ps-billingForm">
              <div className="ps-heading">
                <HeadingLine text="Billing Info" />
              </div>
              <div className="ps-form">
                <FormGroupAuth label="Full Name On Card" inputType="text" />
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
              </div>
            </div>
            <div className="col-md-6 ps-subscriptionForm">
              <div className="ps-heading">
                <HeadingLine text="Subscription Info" />
              </div>
              <div className="ps-form">
                <FormGroupAuth label="Start Date" inputType="date" />
                <FormGroupAuth label="Next Billing Date" inputType="date" />
                <FormGroupAuth
                  label="Package Select"
                  options={["Monthly", "Yearly"]}
                  isSelectInput
                />
                <FormGroupAuth
                  label="Subsciption Status"
                  options={["Activate", "DeActivate"]}
                  isSelectInput
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {showModal && (
        <ProfileModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default ProfileScreen;
