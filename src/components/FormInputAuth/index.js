import React from "react";

const FormGroupAuth = ({
  inputType = "text",
  label = "Label",
  isSelectInput,
  selectId = "default",
  selectName = "defaultname",
  options = ["option1", "option2", "option3"],
}) => {
  if (!isSelectInput) {
    return (
      <div className="fga-form-group">
        <p className="fga-form-label">{label}</p>
        <input type={inputType} className="fga-form-input" />
      </div>
    );
  }
  return (
    <div className="fga-form-group">
      <p className="fga-form-label">{label}</p>
      {/* <input type={inputType} className="fga-form-input" /> */}
      <select id={selectId} name={selectName} className="fga-form-input">
        {/* <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option> */}
        {options.map((op, index) => (
          <option value={op} key={`${op}-${index}`}>
            {`${op.slice(0, 1).toUpperCase()}${op.slice(1)}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormGroupAuth;
