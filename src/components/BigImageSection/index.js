import React from "react";
import ContainerSection from "../Container";
import images from "../../constants/images";
import VideoIcon2nd from "../../assets/images/video-tag-icon.svg";
import VideoIcon from "../../assets/images/video-icon.svg";
import VidCard from "../VidCard";

const BigImageSection = () => {
  return (
    <section className="bis text-center ">
      <ContainerSection isFluid={"yes"}>
        <div className="container bis-container ">
          <h2 className="bis-heading">Vibe Bloom</h2>
          <p className="bis-para w-75">
            Body copy style for white text on dark or gradient backgrounds
            (Medium Weight) Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. a.Body copy style for white text on dark or gradiennulla.
          </p>
          <div className="bis-video-card">
            <VidCard image={images.placeholder2} />
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default BigImageSection;
