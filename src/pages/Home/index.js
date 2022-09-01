import React, { useState } from "react";
import HomePage from "./Home";
import HomeLoggedIn from "./HomeLoggedIn";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Home = ({ user }) => {
  // const [user, setUser] = useState(false);
  const location = useLocation();
  console.log(location.state);

  return (
    <>
      {location.state && location.state.user ? <HomeLoggedIn /> : <HomePage />}
    </>
  );
};

export default Home;
