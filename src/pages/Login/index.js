import React from "react";
import Login from "../../components/Login";
import { useSelector } from "react-redux";

const LoginScreen = () => {
  return (
    <div className="bg-lightGreenMask">
      <Login />
    </div>
  );
};

export default LoginScreen;
