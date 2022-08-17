import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import ButtonOutline from "../Button/ButtonOutline";
import images from "../../constants/images";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          <img src={images.logo} alt="Vibe Garden Logo" />
        </Navbar.Brand>
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
              <div className="list_item">Login</div>
            </NavLink>
            <ButtonOutline text="Join Us" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
