import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import ButtonOutline from "../Button/ButtonOutline";
import images from "../../constants/images";
import { Link, useNavigate, useLocation } from "react-router-dom";
import UserButton from "../userButton.js";
import VibeGardenLogo from "../../assets/images/vibegarden_logo.svg";
import { IoNotificationsSharp, IoAddOutline } from "react-icons/io5";
import NotificationPopUp from "../NotificationPopUp";

const NavBar = ({ onlyBrand, userNav = false }) => {
  let location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(userNav);
  const [expanded, setExpanded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function updateSize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  useEffect(() => {
    if (location.pathname === "/homepage" || location.pathname === "/tools")
      setUser(true);
  }, [location]);

  return (
    <Navbar expand="lg" className="navbar">
      <div className="container-xl">
        <Link to="/">
          <Navbar.Brand className="brand">
            <div>
              <img
                src={VibeGardenLogo}
                alt="Vibe Garden Logo"
                style={{ width: "80%" }}
              />
            </div>
          </Navbar.Brand>
        </Link>
        {!onlyBrand && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {/* <NotificationPopUp /> */}
                <NavLink>
                  <Link to="/groundwork">
                    <div className="list_item">Groundwork</div>
                  </Link>
                </NavLink>
                <NavLink>
                  <Link to="/tools">
                    <div className="list_item">Tools</div>
                  </Link>
                </NavLink>
                <NavLink>
                  <Link to="/guides">
                    <div className="list_item">Guides</div>
                  </Link>
                </NavLink>
                <NavLink>
                  <Link to="/community-garden">
                    <div className="list_item">Community Garden</div>
                  </Link>
                </NavLink>
              </Nav>
              {!user && (
                <Nav className="ms-auto">
                  <div className="navbar-actions">
                    <NavLink>
                      <Link to="/login">
                        <div className="list_item">Login</div>
                      </Link>
                    </NavLink>
                    <div className="nav-btn">
                      <Link to={"/join-us"}>
                        <ButtonOutline text="Join Us" />
                      </Link>
                    </div>
                  </div>
                </Nav>
              )}
              {user && dimensions.width >= 992 && (
                <Nav className="ms-auto">
                  <div className="navbar-actions">
                    <span className="navbar-tools-icon">
                      <Link to="/resonance">
                        <IoAddOutline size={25} />
                      </Link>
                    </span>

                    <span className="navbar-actions-icon">
                      <span
                        onClick={() => setShowNotification(!showNotification)}
                      >
                        <IoNotificationsSharp
                          size={25}
                          fill="rgba(27, 91, 47, 1)"
                          cursor="pointer"
                        />
                      </span>
                      <span className="notification-dot"></span>
                    </span>
                    <UserButton
                      onClickFunction={() => setExpanded(!expanded)}
                    />
                    {expanded && dimensions.width >= 992 && (
                      <div className="expandedBar">
                        <NavLink onClick={() => navigate("profile")}>
                          <Link to="/profile">
                            <div className="list_item-expanded">
                              Profile Settings
                            </div>
                          </Link>
                        </NavLink>
                        <NavLink>
                          <Link to="/login">
                            <div className="list_item-expanded ">Logout</div>
                          </Link>
                        </NavLink>
                      </div>
                    )}
                    {showNotification && (
                      <div className="nav-not">
                        <NotificationPopUp />
                      </div>
                    )}
                  </div>
                </Nav>
              )}
              {user && dimensions.width <= 991 && (
                <Nav className="ms-auto">
                  <div className="navbar-actions d-flex flex-column">
                    <NavLink>
                      <div className="list_item">Profile Settings</div>
                    </NavLink>
                    <NavLink>
                      <div className="list_item">Logo</div>
                    </NavLink>
                    <NavLink>
                      <div className="list_item">Resonance</div>
                    </NavLink>
                    <NavLink>
                      <div
                        className="list_item"
                        // onClick={() => setShowNotification(!showNotification)}
                      >
                        Notification
                      </div>
                    </NavLink>
                    {/* <div className="mobile-nav-not"> */}
                    {/* <NotificationPopUp /> */}
                    {/* </div> */}
                  </div>
                </Nav>
              )}
              {/* {expanded && dimensions.width >= 992 && (
                <div className="expandedBar">
                  <NavLink onClick={() => navigate("profile")}>
                    <div className="list_item-expanded">Profile Settings</div>
                  </NavLink>
                  <NavLink>
                    <div className="list_item-expanded ">Logout</div>
                  </NavLink>
                </div>
              )} */}
            </Navbar.Collapse>
          </>
        )}
      </div>
    </Navbar>
  );
};

export default NavBar;
