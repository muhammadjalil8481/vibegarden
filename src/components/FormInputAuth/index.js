import React from "react";

const FormGroupAuth = ({ inputType = "text", label = "Label" }) => {
  return (
    <div className="fga-form-group">
      <p className="fga-form-label">{label}</p>
      <input type={inputType} className="fga-form-input" />
    </div>
  );
};

export default FormGroupAuth;
