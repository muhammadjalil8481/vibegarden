import React from "react";
import Login from "../../components/Login";
import { useSelector } from "react-redux";

const LoginScreen = () => {
  const state = useSelector((state) => state.signUpUser);
  console.log("state", state);
  return (
    <div className="bg-lightGreenMask">
      <Login />
    </div>
  );
};

export default LoginScreen;
