import React, { useState } from "react";
import NavBar from "../../components/Navbar";
import images from "../../constants/images";
import ButtonFilled from "../../components/Button/ButtonFilled";
import { BsCheckLg } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import AlertModal from "../../components/Modal/AlertModal";

const SelectBloom = () => {
  const [choice, setChoice] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="selectavatar">
      {/* <NavBar onlyBrand /> */}
      <AlertModal
        message="Please select a bloom"
        state={showModal}
        setState={setShowModal}
      />
      <div className="select-avatar bg-lightGreenMask">
        <Link to="/selectavatar">
          <span className="bc-back">
            <RiArrowLeftLine size={30} fill="white" />
          </span>
        </Link>
        <h2>
          Brilliant! And Now which Blooms <br />
          Speaks To your heart?
        </h2>

        <div className="avatar-container">
          <div className="sa-imageAndText">
            {choice === "lotus" ? (
              <span className="sa-choice-checked bg-gradient-pink">
                <BsCheckLg size={50} fill="white" />
              </span>
            ) : (
              <div className="sa-image" onClick={() => setChoice("lotus")}>
                <img src={images.bloomLotus} alt="" />
              </div>
            )}
            <Link
              to="/bloominfo"
              state={{ heading: "Blue Lotus", image: images.blueLotus }}
            >
              <p>
                Meet <br />
                Blue Lotus
              </p>
            </Link>
          </div>
          <div className="sa-imageAndText">
            {choice === "ross" ? (
              <span className="sa-choice-checked bg-gradient-pink">
                <BsCheckLg size={50} fill="white" />
              </span>
            ) : (
              <div className="sa-image" onClick={() => setChoice("ross")}>
                <img src={images.bloomRoss} alt="" />
              </div>
            )}
            <Link
              to="/bloominfo"
              state={{ heading: "Divine Ross", image: images.divineRoss }}
            >
              <p>
                Meet <br />
                Divine Ross
              </p>
            </Link>
          </div>
          <div className="sa-imageAndText">
            {choice === "mushroom" ? (
              <span className="sa-choice-checked bg-gradient-pink">
                <BsCheckLg size={50} fill="white" />
              </span>
            ) : (
              <div className="sa-image" onClick={() => setChoice("mushroom")}>
                <img src={images.bloomMushroom} alt="" />
              </div>
            )}
            <Link
              to="/bloominfo"
              state={{ heading: "Blue Lotus", image: images.mushroom }}
            >
              <p>
                Meet <br />
                Mushrooms
              </p>
            </Link>
          </div>
          <div className="sa-imageAndText">
            {choice === "chuchu" ? (
              <span className="sa-choice-checked bg-gradient-pink">
                <BsCheckLg size={50} fill="white" />
              </span>
            ) : (
              <div className="sa-image" onClick={() => setChoice("chuchu")}>
                <img src={images.bloomChu} alt="" />
              </div>
            )}
            <Link
              to="/bloominfo"
              state={{ heading: "Blue Lotus", image: images.chuchu }}
            >
              <p>
                Meet <br />
                Chuchuhuas
              </p>
            </Link>
          </div>
        </div>
        {/* <Link to="/bloomcheck"> */}
        <span
          onClick={() => {
            !choice && setShowModal(true);
            choice && navigate("/bloomcheck");
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

export default SelectBloom;
