import React from "react";
import FormGroupAuth from "../../components/FormInputAuth";
import GreenButton from "../../components/Button/GreenButton";
import { Link } from "react-router-dom";

const UpdatePassword = () => {
  return (
    <section className="update-password">
      <div className="container update-password-container">
        <h2 className="update-password-heading ">Change Password</h2>
        <div className="update-password-form">
          <FormGroupAuth showPasswordIcon label="Current Password" />
          <FormGroupAuth showPasswordIcon label="New Password" />
          <FormGroupAuth showPasswordIcon label="Confirm Password" />
        </div>
        <Link to="/profile">
          <GreenButton paddingX text="Update" />
        </Link>
        <p className="update-password-or">Or</p>
        <Link to="/resetpassword">
          <p className="update-password-forgot-password">Forgot Password?</p>
        </Link>
      </div>
    </section>
  );
};

export default UpdatePassword;
