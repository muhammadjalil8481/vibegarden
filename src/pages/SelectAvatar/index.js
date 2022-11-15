import React, { useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import images from "../../constants/images";
import ButtonFilled from "../../components/Button/ButtonFilled";
import { BsCheckLg } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import AlertModal from "../../components/Modal/AlertModal";

const SelectAvatar = () => {
  const [choice, setChoice] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="selectavatar">
      <AlertModal
        message="Please select an avatar"
        state={showModal}
        setState={setShowModal}
      />
      {/* <NavBar onlyBrand /> */}
      <div className="select-avatar bg-lightGreenMask">
        <h2>
          Which of these avatars
          <br /> resonate you most?
        </h2>

        <div className="avatar-container">
          <div className="sa-imageAndText">
            {choice === "wolf" ? (
              <span className="sa-choice-checked bg-gradient-pink">
                <BsCheckLg size={50} fill="white" />
              </span>
            ) : (
              <div className="sa-image" onClick={() => setChoice("wolf")}>
                <img src={images.avatarWolf} alt="" />
              </div>
            )}
            <Link
              to="/avatarinfo"
              state={{ heading: "Wolf Woman", image: images.wolfWoman }}
            >
              <p>
                Meet <br />
                Wolf Woman
              </p>
            </Link>
          </div>
          <div className="sa-imageAndText">
            {choice === "bear" ? (
              <span className="sa-choice-checked bg-gradient-pink">
                <BsCheckLg size={50} fill="white" />
              </span>
            ) : (
              <div className="sa-image" onClick={() => setChoice("bear")}>
                <img src={images.avatarBear} alt="" />
              </div>
            )}
            <Link
              to="/avatarinfo"
              state={{ heading: "Bear Man", image: images.bearMan }}
            >
              <p>
                Meet <br />
                Bear Man
              </p>
            </Link>
          </div>
          <div className="sa-imageAndText">
            {choice === "leopard" ? (
              <span className="sa-choice-checked bg-gradient-pink">
                <BsCheckLg size={50} fill="white" />
              </span>
            ) : (
              <div className="sa-image" onClick={() => setChoice("leopard")}>
                <img src={images.avatarLeopard} alt="" />
              </div>
            )}
            <Link
              to="/avatarinfo"
              state={{ heading: "Jaguar Being", image: images.jaguarBeing }}
            >
              <p>
                Meet <br />
                Jaguar Being
              </p>
            </Link>
          </div>
          <div className="sa-imageAndText">
            {choice === "duck" ? (
              <span className="sa-choice-checked bg-gradient-pink">
                <BsCheckLg size={50} fill="white" />
              </span>
            ) : (
              <div className="sa-image" onClick={() => setChoice("duck")}>
                <img src={images.avatarDuck} alt="" />
              </div>
            )}
            <Link
              to="/avatarinfo"
              state={{ heading: "Bird Women", image: images.birdWomen }}
            >
              <p>
                Meet <br />
                Bird Women
              </p>
            </Link>
          </div>
          <div className="sa-imageAndText">
            {choice === "dolphin" ? (
              <span className="sa-choice-checked bg-gradient-pink">
                <BsCheckLg size={50} fill="white" />
              </span>
            ) : (
              <div className="sa-image" onClick={() => setChoice("dolphin")}>
                <img src={images.avatarDolphin} alt="" />
              </div>
            )}
            <Link
              to="/avatarinfo"
              state={{ heading: "Dolphin Being", image: images.dolphinBeing }}
            >
              <p>
                Meet <br />
                Dolphin Being
              </p>
            </Link>
          </div>
        </div>
        {/* <Link to="/selectbloom"> */}
        <span
          onClick={() => {
            !choice && setShowModal(true);
            choice && navigate("/selectbloom");
          }}
        >
          <ButtonFilled
            text="Continue"
            bgGradient={"yes"}
            padXResponsive
            padYResponsive
          />
        </span>
        {/* </Link> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SelectAvatar;
