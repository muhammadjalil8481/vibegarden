// Library imports
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// Custom Imports
import Navigation from "./navigation/navigation";
import Loader from "./components/Modal/loader";

function App() {
  const location = useLocation();
  // States
  const [user, setUser] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [path, setPath] = useState(location.pathname);
  // Redux State Read
  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    setPath(location.pathname);
    console.log(path);
    setShowModal(false);
    window.scrollTo(0, 0);
    setTimeout(() => {
      !user && setShowModal(true);
    }, 3000);
  }, [location.pathname]);
  setTimeout(() => {
    !user && setShowModal(true);
  }, 3000);

  return (
    <div className="App">
      {isLoading && <Loader />}

      {/* {!user &&
        showModal &&
        path !== "/" &&
        path !== "/home" &&
        path !== "/join-us" &&
        path !== "/login" &&
        path !== "/email-confirmation" && (
          <div className="please-sign-up-modal-container">
            <PleaseSignUpModal />
          </div>
        )} */}

      <Navigation />

      {/* <SelectAvatar /> */}
      {/* <AvatarInfo /> */}
      {/* <NavBar /> */}
    </div>
  );
}

export default App;
