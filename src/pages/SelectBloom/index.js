import React, { useState } from "react";
import NavBar from "../../components/Navbar";
import images from "../../constants/images";
import ButtonFilled from "../../components/Button/ButtonFilled";
import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";

const SelectBloom = () => {
  const [choice, setChoice] = useState("");
  return (
    <div className="selectavatar">
      <NavBar onlyBrand />
      <div className="select-avatar bg-lightGreenMask">
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
        <Link to="/bloomcheck">
          <ButtonFilled text="Continue" bgGradient={"yes"} paddingX />
        </Link>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SelectBloom;
