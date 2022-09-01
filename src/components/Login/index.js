import React from "react";
import ContainerSection from "../Container";
import images from "../../constants/images";
import FormGroupAuth from "../FormInputAuth";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import ButtonFilled from "../Button/ButtonFilled";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const RememberMeCheckboxIcon = styled("span")(({ theme }) => ({
  borderRadius: 5,
  width: 15,
  height: 15,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor:
      theme.palette.mode === "dark" ? "#30404d" : "rgba(255, 84, 90, 1)",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const RememberMeCheckedIcon = styled(RememberMeCheckboxIcon)({
  backgroundColor: "rgba(255, 84, 90, 1)",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 15,
    height: 15,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "rgba(255, 84, 90, 1)",
  },
});
const sectionStyle = {
  backgroundImage: `url(${images.pinkMask})`,
  //   backgroundColor: "red",
};
const Login = () => {
  const navigate = useNavigate();
  return (
    <section className="login" style={sectionStyle}>
      <div className="ec-icon" onClick={() => navigate("/home")}>
        <ArrowBackIosRoundedIcon
          color="success"
          fontSize="large"
          className="icon"
        />
      </div>
      <ContainerSection isFluid={"yes"}>
        <div className="container login-container">
          <div className="login-img">
            <img src={images.logo3} />
          </div>
          <h3 className="login-heading">Login</h3>
          <form action="#" className="login-form">
            <FormGroupAuth label="Email Address" inputType="email" />
            <FormGroupAuth
              label="Password"
              inputType="password"
              showPasswordIcon
            />
            <div className="form-options">
              <div className="login-checkbox">
                <Checkbox
                  icon={<RememberMeCheckboxIcon />}
                  checkedIcon={<RememberMeCheckedIcon />}
                />
                <p className="login-form-label">Remember</p>
              </div>
              <p
                className="login-forgot-password"
                onClick={() => navigate("/resetpassword")}
              >
                Forgot Password?
              </p>
            </div>
            <div
              className="login-button"
              onClick={() => navigate("/home", { state: { user: true } })}
            >
              <ButtonFilled text="Login" bgGradient={"yes"} paddingX />
            </div>
            <h3 className="login-or">OR</h3>
            <p className="login-signup">
              Don't have an account ?{" "}
              <span>
                <Link to="/join-us">Sign Up</Link>
              </span>
            </p>
          </form>
        </div>
      </ContainerSection>
    </section>
  );
};

export default Login;
