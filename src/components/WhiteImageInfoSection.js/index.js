import React from "react";
import ContainerSection from "../Container";
import ButtonFilled from "../Button/ButtonFilled";
import images from "../../constants/images";
import VideoCard from "../VideoCard/VideoCard";

const WhiteImageInfoSection = ({
  button,
  videoCardLeftMargin,
  videoCardRightMargin,
  noHeading,
  topHeading,
  videoCardHeight = "230px",
  videoCardWidth = "300px",
  orderReverse,
  rightAlignHeading,
  whiteHeading,
  whitePara,
}) => {
  return (
    <section className="wiis">
      <ContainerSection isFluid={"yes"}>
        <div class="container wiis-container py80">
          {topHeading && (
            <h3
              className={`wiis-top-heading mx-5 ${
                whiteHeading && "text-white"
              } ${rightAlignHeading && "text-end"}`}
            >
              Go Deeper - Vibe Guides
            </h3>
          )}
          <div class="row wiis-row">
            <div class="col-md-8 wiis-col wiis-left-col order-md-2">
              {!noHeading && (
                <h2 className="wiis-heading ">Embodying Your Fullness</h2>
              )}
              <p className={`${whitePara && "text-white"} wiis-para mt-2 mb-5`}>
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
              <div
                className={`wiis-btn-container ${orderReverse && "text-end"}`}
              >
                <ButtonFilled
                  text="Join Us"
                  bgGradient={"yes"}
                  paddingX="1rem"
                />
              </div>
            </div>
            <div
              class={`col-sm-4 wiis-col wiis-right-col ${
                orderReverse && "order-md-3"
              }`}
            >
              <div className="wiis-video-card">
                <VideoCard
                  time="3:15"
                  image={images.placeholder1}
                  width={videoCardWidth}
                  height={videoCardHeight}
                />
              </div>
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default WhiteImageInfoSection;
