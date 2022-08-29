import React from "react";
import FormGroupAuth from "../../components/FormInputAuth";
import GreenButton from "../../components/Button/GreenButton";

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
        <GreenButton paddingX text="Update" />
        <p className="update-password-or">Or</p>
        <p className="update-password-forgot-password">Forgot Password?</p>
      </div>
    </section>
  );
};

export default UpdatePassword;
