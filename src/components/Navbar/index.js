import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import ButtonOutline from "../Button/ButtonOutline";
import images from "../../constants/images";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ onlyBrand }) => {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          <img src={images.logo} alt="Vibe Garden Logo" />
        </Navbar.Brand>
        {!onlyBrand && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink>
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
              <Nav className="ms-auto">
                <NavLink>
                  <div className="list_item" onClick={() => navigate("/login")}>
                    Login
                  </div>
                </NavLink>
                <div className="nav-btn">
                  <Link to={"/join-us"}>
                    <ButtonOutline text="Join Us" />
                  </Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
