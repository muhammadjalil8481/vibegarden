import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import JoinUs from "../pages/JoinUs";
import OutletComponent from "./outlet";
import LoginScreen from "../pages/Login";
import EmailConfirmation from "../pages/EmailConfirmation";
import HomeLoggedIn from "../pages/HomeLoggedIn";
import GroundWork from "../pages/GroundWork";
import Tools from "../pages/Tools";
import Guides from "../pages/Guides";
import CommunityGarden from "../pages/CommunityGarden";
import AboutUs from "../pages/AboutUs";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import FreshBlooms from "../pages/FreshBlooms";
import AppDownload from "../pages/AppDownload";
import ResetPassword from "../pages/ResetPassword";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<OutletComponent />} />
      <Route element={<HomePage />} index />
      <Route element={<HomePage />} path="/home" />
      <Route element={<JoinUs />} path="/join-us" />
      <Route element={<LoginScreen />} path="/login" />
      <Route element={<EmailConfirmation />} path="/email-confirmation" />
      <Route element={<HomeLoggedIn />} path="/homepage" />
      <Route element={<GroundWork />} path="/groundwork" />
      <Route element={<Tools />} path="/tools" />
      <Route element={<Guides />} path="/guides" />
      <Route element={<CommunityGarden />} path="/community-garden" />
      <Route element={<AboutUs />} path="/about-us" />
      <Route element={<TermsAndConditions />} path="/termsandconditions" />
      <Route element={<PrivacyPolicy />} path="/privacypolicy" />
      <Route element={<FreshBlooms />} path="/freshblooms" />
      <Route element={<AppDownload />} path="/appdownload" />
      <Route element={<ResetPassword />} path="/resetpassword" />
      <Route element={<h1>This page is not defined</h1>} path="*" />
    </Routes>
  );
};

export default Navigation;
