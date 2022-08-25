import React from "react";
import ContainerSection from "../Container";
import VidCard from "../VidCard";
import images from "../../constants/images";

const FourColumnVideoLayout = ({
  leftHeading,
  noPara,
  whiteHeading,
  whitePara,
  heading = "Heading Here",
  leftPara,
  whiteLink,
  whiteSubText,
}) => {
  return (
    <section className="fcvl">
      <ContainerSection isFluid={"yes"}>
        <div className="container fcvl-container ">
          <h2
            className={`fcvl-heading ${!leftHeading && "text-center"} ${
              whiteHeading && "color-white"
            }`}
          >
            {heading}
          </h2>
          {!noPara && (
            <p
              className={`fcvl-para ${!leftPara && "text-center"} ${
                whitePara && "color-white"
              }`}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kas
            </p>
          )}
          <div className="fcvl-row row">
            <div className="col-lg-3 fcvl-col">
              <VidCard titleIcon blackTitle />
              <div className="subtext-container">
                <p className={`subtext ${whiteSubText && "color-white"}`}>
                  Lorem
                </p>
                <p className={`subtext ${whiteSubText && "color-white"}`}>
                  Lorem
                </p>
              </div>
            </div>
            <div className="col-lg-3 fcvl-col">
              <VidCard titleIcon blackTitle image={images.placeholder1} />
              <div className="subtext-container">
                <p className={`subtext ${whiteSubText && "color-white"}`}>
                  Lorem
                </p>
                <p className={`subtext ${whiteSubText && "color-white"}`}>
                  Lorem
                </p>
              </div>
            </div>
            <div className="col-lg-3 fcvl-col">
              <VidCard titleIcon blackTitle image={images.placeholder2} />
              <div className="subtext-container">
                <p className={`subtext ${whiteSubText && "color-white"}`}>
                  Lorem
                </p>
                <p className={`subtext ${whiteSubText && "color-white"}`}>
                  Lorem
                </p>
              </div>
            </div>
            <div className="col-lg-3 fcvl-col" image={images.placeholder6}>
              <VidCard titleIcon blackTitle />
              <div className="subtext-container">
                <p className={`subtext ${whiteSubText && "color-white"}`}>
                  Lorem
                </p>
                <p className={`subtext ${whiteSubText && "color-white"}`}>
                  Lorem
                </p>
              </div>
            </div>
          </div>
          <h5
            className={`fcvl-link ${whiteLink && "color-white"}`}
          >{`See All >`}</h5>
        </div>
      </ContainerSection>
    </section>
  );
};

export default FourColumnVideoLayout;
