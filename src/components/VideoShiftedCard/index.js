import React from "react";
import ContainerSection from "../Container";
import circle from "../../assets/images/circle.svg";
import VideoCardSmall from "../VideoCardSmall";

const VideoCardShifted = ({ width = "600px" }) => {
  return (
    <section className="vcs">
      <ContainerSection bgGradient={"yes"} borderRadius>
        <div className="vcs-container">
          <div className="vcs-info">
            <div className="vcs-info-and-icon">
              <img src={circle} />
              <h4 className="vcs-heading">Gradient Card Headline</h4>
            </div>
            <p className="vcs-para">
              Body copy style for white text on dark or gradient backgrounds
              (Medium Weight) Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Mauris placerat euismod porttitor.
            </p>
            <a className="vcs-link">
              SEE MORE <span></span>
            </a>
          </div>
          <div className="vcs-video-card">
            <VideoCardSmall width="270px" title="title" />
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default VideoCardShifted;
