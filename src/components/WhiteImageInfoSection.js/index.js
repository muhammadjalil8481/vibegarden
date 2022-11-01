import React from "react";
import ContainerSection from "../Container";
import ButtonFilled from "../Button/ButtonFilled";
import images from "../../constants/images";
import VideoCard from "../VideoCard/VideoCard";
import LightButton from "../Button/LightButton";
import { Link } from "react-router-dom";
import VidCard from "../VidCard";

const WhiteImageInfoSection = ({
  button,
  videoCardLeftMargin,
  videoCardRightMargin,
  noHeading,
  noButton,
  topHeading,
  videoCardHeight = "230px",
  videoCardWidth = "300px",
  orderReverse,
  orderReverseWithButton,
  rightAlignHeading,
  whiteHeading,
  whitePara,
  doubleHeading,
  videoCardTopHeading,
  bottomInfo,
  lightButton,
  postedDate,
  mainHeading = "Main Heading",
  btnText = "Button",
  padX = true,
  onClickFunction = () => null,
  link = "#",
  heading = "Go Deeper - Vibe Guides",
  rightAlignBtn,
  blackHeading,
  vidHeading,
  homeLogged,
  freshBlooms,
}) => {
  return (
    <section className="wiis">
      <ContainerSection isFluid={"yes"}>
        <div class="container wiis-container py80">
          {topHeading && (
            <h3
              className={`wiis-top-heading  ${whiteHeading && "text-white"} ${
                homeLogged && "homeloggedin-heading"
              }  ${rightAlignHeading && "wiis-text-align"} ${
                rightAlignHeading && "wiis-top-headingMargin"
              }`}
            >
              {heading}
            </h3>
          )}
          <div class="row wiis-row">
            <div class="col-md-8 wiis-col wiis-left-col order-md-2">
              {!noHeading && (
                <h2 className={`wiis-heading ${blackHeading && "text-black"}`}>
                  {mainHeading}
                </h2>
              )}
              {doubleHeading && (
                <div className="wiis-heading-double-container">
                  <h3 className="wiis-heading-double">
                    A New Kind Of Health Club
                  </h3>
                  <h3 className="wiis-heading-double">A New Kind Of Church</h3>
                </div>
              )}
              <p className={`${whitePara && "text-white"} wiis-para mt-5 mb-5`}>
                Body copy style for white text on dark or gradient backgrounds
                (Medium Weight) Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Mauris placerat euismod porttitor. Nam nec
                mauris non magna facilisis volutpat ac sit amet nulla. Nullam
                vestibulum velit vitae sem commodo tempor. Sed dapibus, est non
                pulvinar fringilla, lorem libero laoreet erat, ac tristique elit
                nisl eu metus. Sed fermentum erat sit amet enim blandit, quis
                dictum nisi tempus. Etiam dui tellus, porttitor vitae rutrum a,
                ultrices pharetra nulla.
              </p>
              {lightButton && (
                <div className="wiis-lightBtnContainer">
                  <div className="wiis-lightBtn">
                    <Link to="/individualgroundwork">
                      <LightButton text="Details" />
                    </Link>
                  </div>
                  <div className="wiis-lightBtn">
                    <Link to="/topic">
                      <LightButton text="#Tag" />
                    </Link>
                  </div>
                </div>
              )}
              {!noButton && (
                <div
                  className={`wiis-btn-container ${
                    rightAlignBtn && "wiis-text-align"
                  }`}
                >
                  <Link to={`${link}`}>
                    <ButtonFilled
                      text={btnText}
                      bgGradient={"yes"}
                      paddingX={padX}
                    />
                  </Link>
                </div>
              )}
            </div>
            <div
              class={`col-md-4 wiis-col wiis-right-col ${
                (orderReverse || orderReverseWithButton) && "order-md-3"
              }`}
            >
              {vidHeading && (
                <h4 className="wiis-vid-cardHeading">What Next?</h4>
              )}
              <div
                className={`wiis-vid-card ${
                  orderReverse && "wiis-vid-card-margin"
                }`}
              >
                <VidCard
                  image={images.placeholder}
                  freshBlooms={freshBlooms ? true : false}
                />
              </div>
              {postedDate && (
                <div className="wiis-postedDate">
                  <p>{`Posted Date: 7/26/2022`}</p>
                </div>
              )}
            </div>
          </div>
          {bottomInfo && (
            <div className="wiis-bottomHeadingAndButton">
              <h4 className="wiis-bottomHeading">
                Register Your Interest; Shad Your Ideas
              </h4>
              <ButtonFilled bgGradient={"yes"} text={btnText} />
            </div>
          )}
        </div>
      </ContainerSection>
    </section>
  );
};

export default WhiteImageInfoSection;
