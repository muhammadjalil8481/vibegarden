import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { green, grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

const FormGroupAuth = ({
  inputType = "text",
  label = "Label",
  isSelectInput,
  selectId = "default",
  selectName = "defaultname",
  options = ["option1", "option2", "option3"],
  noLabel,
  placeHolder = "",
  icon,
  showPasswordIcon,
  value,
  setValue,
}) => {
  const [inputTypeState, setInputTypeState] = useState(inputType);
  const showPasswordText = () => {
    setInputTypeState(inputTypeState === "password" ? "text" : "password");
  };
  if (!isSelectInput) {
    return (
      <div className="fga-form-group">
        {!noLabel && <p className="fga-form-label">{label}</p>}
        <input
          type={inputTypeState}
          className="fga-form-input"
          placeholder={placeHolder}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        {icon && (
          <div
            className={` ${
              noLabel ? "fga-form-icon-no-label" : "fga-form-icon"
            }`}
            // onClick={() => console.log(value)}
          >
            <Link to="/searchpage">
              <SearchIcon fontSize="large" sx={{ color: green[700] }} />
            </Link>
          </div>
        )}
        {showPasswordIcon && (
          <div
            className={` ${
              noLabel ? "fga-form-icon-no-label" : "fga-form-icon"
            }`}
            onClick={showPasswordText}
          >
            <div className="showPasswordIcon">
              <VisibilityOffIcon fontSize="large" sx={{ color: grey[600] }} />
            </div>
          </div>
        )}
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
