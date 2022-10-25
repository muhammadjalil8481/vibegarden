import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import JoinUs from "../pages/JoinUs";
import OutletComponent from "./outlet";
import LoginScreen from "../pages/Login";
import HomeLoggedIn from "../pages/HomeLoggedIn";
import EmailConfirmation from "../pages/EmailConfirmation";
import GroundWork from "../pages/GroundWork";
import Tools from "../pages/Tools";
import Guides from "../pages/Guides";
import ThankYou from "../pages/ThankYou/ThankYou";
import CommunityGarden from "../pages/CommunityGarden";
import AboutUs from "../pages/AboutUs";
import SearchPage from "../pages/SearchPage";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import FreshBlooms from "../pages/FreshBlooms";
import AppDownload from "../pages/AppDownload";
import ResetPassword from "../pages/ResetPassword";
import UpdatePassword from "../pages/UpdatePassword";
import ProfileScreen from "../pages/ProfileScreen";
import Essentials from "../pages/Essentials";
import BuildingSlocks from "../pages/BuildingSlocks";
import DeeperCuts from "../pages/DeeperCuts";
import Play from "../pages/Play";
import IndividualGroundWork from "../pages/IndividualGroundWork";
import Teachers from "../pages/Teachers";
import Topic from "../pages/Topic";
import Schedule from "../pages/Schedule";
import Payment from "../pages/Payment/Payment";
import ToolsForConnecting from "../pages/ToolsForConnecting";
import ToolsForWorker from "../pages/ToolsForWorker";
import ToolsForConnection from "../pages/ToolsForConnection";
import Resonance from "../pages/Resonance";
import ResonanceFinder from "../pages/ResonanceFinder";

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
      <Route element={<UpdatePassword />} path="/updatepassword" />
      <Route element={<ProfileScreen />} path="/profile" />
      <Route element={<Essentials />} path="/essentials" />
      <Route element={<BuildingSlocks />} path="/buildingslocks" />
      <Route element={<DeeperCuts />} path="/deepercuts" />
      <Route element={<Play />} path="/play" />
      <Route element={<ToolsForConnecting />} path="/toolsforconnecting" />
      <Route element={<ToolsForWorker />} path="/toolsforworker" />
      <Route element={<ToolsForConnection />} path="/toolsforconnection" />
      <Route element={<IndividualGroundWork />} path="/individualGroundWork" />
      <Route element={<Teachers />} path="/teachers" />
      <Route element={<Topic />} path="/topic" />
      <Route element={<Schedule />} path="/schedule" />
      <Route element={<Payment />} path="/payment" />
      <Route element={<ThankYou />} path="/thankyou" />
      <Route element={<SearchPage />} path="/searchpage" />
      <Route element={<Resonance />} path="/resonance" />
      <Route element={<Resonance />} path="/resonance" />
      <Route element={<ResonanceFinder />} path="/resonancefinder" />
      <Route element={<h1>This page is not defined</h1>} path="*" />
    </Routes>
  );
};

export default Navigation;
