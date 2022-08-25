import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import ButtonOutline from "../Button/ButtonOutline";
import images from "../../constants/images";
import { Link, useNavigate } from "react-router-dom";
import UserButton from "../userButton.js";

const NavBar = ({ onlyBrand, user = false }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
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
    console.log(expanded);
  }, [expanded]);

  return (
    <Navbar expand="lg" className="navbar">
      <div className="container-lg">
        <Navbar.Brand className="brand" onClick={() => navigate("/")}>
          <img src={images.logo} alt="Vibe Garden Logo" />
        </Navbar.Brand>
        {!onlyBrand && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink onClick={() => navigate("/groundwork")}>
                  <div className="list_item">Groundwork</div>
                </NavLink>
                <NavLink>
                  <div className="list_item">Tools</div>
                </NavLink>
                <NavLink>
                  <div className="list_item">Guides</div>
                </NavLink>
                <NavLink>
                  <div className="list_item">Community Garden</div>
                </NavLink>
              </Nav>
              {!user && (
                <Nav className="ms-auto">
                  <div className="navbar-actions">
                    <NavLink>
                      <div
                        className="list_item"
                        onClick={() => navigate("/login")}
                      >
                        Login
                      </div>
                    </NavLink>
                    <div className="nav-btn">
                      <Link to={"/join-us"}>
                        <ButtonOutline text="Join Us" />
                      </Link>
                    </div>
                  </div>
                </Nav>
              )}
              {user && dimensions.width > 991 && (
                <Nav className="ms-auto">
                  <div
                    className="navbar-actions"
                    onClick={() => setExpanded(!expanded)}
                  >
                    <UserButton />
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
                      <div className="list_item">Logout</div>
                    </NavLink>
                  </div>
                </Nav>
              )}
              {expanded && (
                <div className="expandedBar">
                  <NavLink>
                    <div className="list_item-expanded">Profile Settings</div>
                  </NavLink>
                  <NavLink>
                    <div className="list_item-expanded ">Logout</div>
                  </NavLink>
                </div>
              )}
            </Navbar.Collapse>
          </>
        )}
      </div>
    </Navbar>
  );
};

export default NavBar;
