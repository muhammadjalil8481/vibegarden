import React from "react";
import ContainerSection from "../Container";
import ButtonFilled from "../Button/ButtonFilled";
import images from "../../constants/images";
import VideoCard from "../VideoCard/VideoCard";

const WhiteImageInfoSection = () => {
  return (
    <div className="mb-5 ">
      <ContainerSection isFluid="yes">
        <div className="row py80 px-lg-5  justify-content-center align-items-center mx-auto row-container">
          <div className={`col-md-6 info-container order-md-2`}>
            <div className="info-container">
              <h2 className="section-heading green-text">
                Embodying Your Fullness
              </h2>
              <p className=" section-text mt-2 mb-5 black-3-text">
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
                <ButtonFilled text="Explorer Tools" bgGradient={"yes"} />
              </div>
            </div>
          </div>
          <div className="col-md-5 video-card-section order-md-1">
            <VideoCard time="3:15" />
          </div>
        </div>
      </ContainerSection>
    </div>
  );
};

export default WhiteImageInfoSection;
