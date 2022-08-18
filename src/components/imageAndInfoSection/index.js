import React from "react";
import ContainerSection from "../Container";
import ButtonFilled from "../Button/ButtonFilled";
import images from "../../constants/images";
import VideoCard from "../VideoCard/VideoCard";

const ImageAndInfoSection = ({
  makeFluid,
  makeBgGradient,
  makeReverse,
  headingColor = "#FFFFFF",
  textColor = "#FFFFFF",
  button,
  videoCardLeftMargin,
  videoCardRightMargin,
}) => {
  return (
    <div className="mb-5 ">
      <ContainerSection
        isFluid={makeFluid && "yes"}
        bgGradient={makeBgGradient && "yes"}
      >
        <div className="row py80 px-5 justify-content-center align-items-center mx-auto">
          <div
            className={`col-md-6 info-section ${makeReverse && "order-2"}`}
            // style={makeReverse && { marginLeft: "40px" }}
          >
            <div>
              <h2
                className="section-heading white-text"
                style={{ color: headingColor }}
              >
                Embodying Your Fullness
              </h2>
              <p
                className="white-text section-text mt-2 mb-5"
                style={{ color: textColor }}
              >
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
              <div className="button-container">
                <ButtonFilled
                  text="Explorer Tools"
                  bgGradient={button === "filled" && "yes"}
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-5 "
            style={makeReverse && { marginBottom: "30px" }}
          >
            <VideoCard
              time="3:15"
              leftMargin={videoCardLeftMargin}
              rightMargin={videoCardRightMargin}
            />
          </div>
        </div>
      </ContainerSection>
    </div>
  );
};

export default ImageAndInfoSection;
