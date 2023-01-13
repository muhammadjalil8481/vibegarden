// Library Imports
import React from "react";
import { useSelector } from "react-redux";
// Custom Imports
import HomeLoggedIn from "./HomeLoggedIn";
import HomeLoggedOut from "./HomeLoggedOut";

const Home = () => {
  const user = useSelector((state) => state.user.user);
  return <div>{user ? <HomeLoggedIn /> : <HomeLoggedOut />}</div>;
};

export default Home;
