import React from "react";
import ContainerSection from "../Container";
import images from "../../constants/images";
import VideoIcon2nd from "../../assets/images/video-tag-icon.svg";
import VideoIcon from "../../assets/images/video-icon.svg";

const FeaturedTools = ({
  leftHeading,
  noPara,
  whiteHeading,
  whitePara,
  heading = "Featured Tools",
}) => {
  return (
    <section className="ft">
      <ContainerSection isFluid={"yes"}>
        <div className="container ft-container ">
          <h2
            className={`ft-heading ${!leftHeading && "text-center"} ${
              whiteHeading && "color-white"
            }`}
          >
            {heading}
          </h2>
          {!noPara && (
            <p
              className={`ft-para ${!leftHeading && "text-center"} ${
                whitePara && "color-white"
              }`}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kas
            </p>
          )}
          <div className="ft-row row">
            <div className="col-lg-3 h-75">
              <div className="card ft-card border-0">
                <img src={images.placeholder2} />
                <div className="ft-card-titleAndIcon">
                  <img src={VideoIcon2nd} />
                  <h5 className="ft-card-title">Title</h5>
                </div>
                <img src={VideoIcon} className="ft-card-video-icon" />
                <p className="ft-card-time">00:00</p>
              </div>
            </div>
            <div className="col-lg-3 h-300 ">
              <div className="card ft-card border-0">
                <img src={images.placeholder3} />
                <div className="ft-card-titleAndIcon">
                  <img src={VideoIcon2nd} />
                  <h5 className="ft-card-title">Title</h5>
                </div>
                <img src={VideoIcon} className="ft-card-video-icon" />
                <p className="ft-card-time">00:00</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card ft-card border-0">
                <img src={images.placeholder4} />
                <div className="ft-card-titleAndIcon">
                  <img src={VideoIcon2nd} />
                  <h5 className="ft-card-title">Title</h5>
                </div>
                <img src={VideoIcon} className="ft-card-video-icon" />
                <p className="ft-card-time">00:00</p>
              </div>
            </div>
            <div className="col-lg-3 ">
              <div className="card ft-card border-0">
                <img src={images.placeholder1} />
                <div className="ft-card-titleAndIcon">
                  <img src={VideoIcon2nd} />
                  <h5 className="ft-card-title">Title</h5>
                </div>
                <img src={VideoIcon} className="ft-card-video-icon" />
                <p className="ft-card-time">00:00</p>
              </div>
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default FeaturedTools;
