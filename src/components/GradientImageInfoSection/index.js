import React from "react";
import ContainerSection from "../Container";
import ButtonFilled from "../Button/ButtonFilled";
import images from "../../constants/images";
import VideoCard from "../VideoCard/VideoCard";

const GradientImageInfoSection = ({
  button,
  videoCardLeftMargin,
  videoCardRightMargin,
}) => {
  return (
    <div className="mb-5 ">
      <ContainerSection isFluid="yes" bgGradient="yes">
        <div className="row py80 px-lg-5  justify-content-center align-items-center mx-auto ">
          <div className={`col-md-6 info-section `}>
            <div className="info-section">
              <h2 className="section-heading white-text">
                Embodying Your Fullness
              </h2>
              <p className="white-text section-text mt-2 mb-5">
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
                <ButtonFilled text="Explorer Tools" />
              </div>
            </div>
          </div>
          <div className="col-md-5 video-card">
            <VideoCard time="3:15" leftMargin={videoCardLeftMargin} />
          </div>
        </div>
      </ContainerSection>
    </div>
  );
};

export default GradientImageInfoSection;
