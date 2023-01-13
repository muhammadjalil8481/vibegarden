// Library Imports
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoNotificationsSharp, IoAddOutline } from "react-icons/io5";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
// Redux Slices
import { setLoading } from "../../redux/slices/loadingSlice";
import { logoutUser } from "../../redux/slices/userSlice";
// Custom Imports
import ButtonOutline from "../Button/ButtonOutline";
import images from "../../constants/images";
import UserButton from "../userButton.js";
import VibeGardenLogo from "../../assets/images/vibegarden_logo.svg";
import NotificationPopUp from "../NotificationPopUp";

const NavBar = ({ onlyBrand }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Redux State Read
  const user = useSelector((state) => state.user.user);
  console.log("bloom", user?.bloom);
  // States
  const [expanded, setExpanded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  // Update Navbar Responsiveness
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

  // OnClick handlers
  const logoutUserFunction = () => {
    console.log("logged out");
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(logoutUser());
      dispatch(setLoading(false));
      navigate("/login");
    }, 1000);
  };
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
              <Nav className="ms-auto nav-links">
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
                      <Link to="/updatebloomcheck">
                        <div className="profile-bloom">
                          <img
                            src={user?.bloom?.croppedImage || images.bloomChu}
                          />
                        </div>
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
                      username={`${user?.firstName} ${user.lastName}`}
                      onClickFunction={() => setExpanded(!expanded)}
                    />
                    {expanded && dimensions.width >= 992 && (
                      <div className="expandedBar">
                        <NavLink>
                          <Link to="/profile">
                            <div className="list_item-expanded">Profile</div>
                          </Link>
                        </NavLink>
                        <NavLink>
                          <div
                            className="list_item-expanded "
                            onClick={() => logoutUserFunction()}
                          >
                            Logout
                          </div>
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
                      <div className="list_item">Notification</div>
                    </NavLink>
                  </div>
                </Nav>
              )}
            </Navbar.Collapse>
          </>
        )}
      </div>
    </Navbar>
  );
};

export default NavBar;
