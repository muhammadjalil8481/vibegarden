import React from "react";
import NavBar from "../../components/Navbar";
import Toggle from "react-styled-toggle";
import ButtonFilled from "../../components/Button/ButtonFilled";
import GreenButtonOff from "../../components/Button/GreenButtonOff";
import { Link } from "react-router-dom";

const Resonance = () => {
  return (
    <div className="resonance">
      <NavBar />
      <div className="container resonance-container">
        <div className="rt-top">
          <div className="rt-topleft">
            <h4>Select Your Topic Resonance?</h4>
            <div className="d-flex">
              <h4>OR Try Our</h4>
              <span className="mx-3">
                <Link to="/resonancefinder">
                  <GreenButtonOff text="Resonance Finder" />
                </Link>
              </span>
            </div>
          </div>
          <span className="rt-topright">
            <Link to="/home">
              <span>&#10005;</span>
            </Link>
          </span>
        </div>
        <div className="resonance-choices">
          <div className="resonance-toggle">
            <Toggle
              backgroundColorChecked="rgba(27, 91, 47, 1)"
              backgroundColorUnchecked="#75997E"
            />
            <label className="rt-label">Buddhism</label>
          </div>
          <div className="resonance-toggle">
            <Toggle
              backgroundColorChecked="rgba(27, 91, 47, 1)"
              backgroundColorUnchecked="#75997E"
            />
            <label className="rt-label">Plants</label>
          </div>
          <div className="resonance-toggle">
            <Toggle
              backgroundColorChecked="rgba(27, 91, 47, 1)"
              backgroundColorUnchecked="#75997E"
            />
            <label className="rt-label">Nature</label>
          </div>
          <div className="resonance-toggle">
            <Toggle
              backgroundColorChecked="rgba(27, 91, 47, 1)"
              backgroundColorUnchecked="#75997E"
            />
            <label className="rt-label">Quantum Physics</label>
          </div>
          <div className="resonance-toggle">
            <Toggle
              backgroundColorChecked="rgba(27, 91, 47, 1)"
              backgroundColorUnchecked="#75997E"
            />
            <label className="rt-label">Asteven Master</label>
          </div>
        </div>
        <div className="resonance-btn">
          <Link to="/resonancefinder">
            <ButtonFilled
              bgGradient={"yes"}
              text="Save"
              padXBig
              padYResponsive
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resonance;
