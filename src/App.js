import Navigation from "./navigation/navigation";
import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import PleaseSignUpModal from "./components/pleaseSignUpModal";
import { useLocation } from "react-router-dom";
import SelectAvatar from "./pages/SelectAvatar";
import AvatarInfo from "./pages/AvatarInfo";

function App() {
  const [user, setUser] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
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
