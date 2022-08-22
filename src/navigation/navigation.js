import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import JoinUs from "../pages/JoinUs";
import OutletComponent from "./outlet";
import LoginScreen from "../pages/Login";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<OutletComponent />} />
      <Route element={<HomePage />} index />
      <Route element={<HomePage />} path="/home" />
      <Route element={<JoinUs />} path="/join-us" />
      <Route element={<LoginScreen />} path="/login" />
      <Route element={<h1>This page is not defined</h1>} path="*" />
    </Routes>
  );
};

export default Navigation;
