import React from "react";
import ContainerSection from "../Container";
import images from "../../constants/images";
import VideoIcon2nd from "../../assets/images/video-tag-icon.svg";
import VideoIcon from "../../assets/images/video-icon.svg";
import VidCard from "../VidCard";
import { Link } from "react-router-dom";

const FeaturedTools = ({
  leftHeading,
  noPara,
  whiteHeading,
  whitePara,
  heading = "Featured Tools",
  recentVibes,
  idgwHeading = "Heading",
}) => {
  return (
    <section className="ft">
      <ContainerSection isFluid={"yes"}>
        <div className="container ft-container ">
          <h2
            className={`ft-heading ${!leftHeading && "text-center"} ${
              whiteHeading && "color-white"
            } ${noPara && "mb-5"}`}
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
            <div className="col-lg-3 col-sm-6 ft-col-container">
              {recentVibes ? (
                <Link
                  to="/individualgroundwork"
                  state={{ heading: idgwHeading }}
                >
                  <div className="ft-col">
                    <VidCard titleIcon image={images.placeholder} recentVibes />
                  </div>
                </Link>
              ) : (
                <div className="ft-col">
                  <VidCard titleIcon image={images.placeholder} />
                </div>
              )}
            </div>
            <div className="col-lg-3 col-sm-6 ft-col-container">
              {recentVibes ? (
                <Link
                  to="/individualgroundwork"
                  state={{ heading: idgwHeading }}
                >
                  <div className="ft-col">
                    <VidCard
                      titleIcon
                      image={images.placeholder2}
                      recentVibes
                    />
                  </div>
                </Link>
              ) : (
                <div className="ft-col">
                  <VidCard titleIcon image={images.placeholder2} />
                </div>
              )}
            </div>
            <div className="col-lg-3 col-sm-6 ft-col-container">
              {recentVibes ? (
                <Link
                  to="/individualgroundwork"
                  state={{ heading: idgwHeading }}
                >
                  <div className="ft-col">
                    <VidCard
                      titleIcon
                      image={images.placeholder3}
                      recentVibes
                    />
                  </div>
                </Link>
              ) : (
                <div className="ft-col">
                  <VidCard titleIcon image={images.placeholder3} />
                </div>
              )}
            </div>
            <div className="col-lg-3 col-sm-6 ft-col-container">
              {recentVibes ? (
                <Link
                  to="/individualgroundwork"
                  state={{ heading: idgwHeading }}
                >
                  <div className="ft-col">
                    <VidCard
                      titleIcon
                      image={images.placeholder4}
                      recentVibes
                    />
                  </div>
                </Link>
              ) : (
                <div className="ft-col">
                  <VidCard titleIcon image={images.placeholder4} />
                </div>
              )}
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default FeaturedTools;
