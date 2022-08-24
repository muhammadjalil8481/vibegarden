import React from "react";
import ContainerSection from "../Container";
import ThreeColumnWhiteVideoInfoLayout from "../ThreeColumnWhiteVideoInfoLayout";

const GroundWorkEssentials = () => {
  return (
    <section className="ge">
      <ContainerSection isFluid={"yes"}>
        <div className="container ge-container text-center">
          <h2 className="ge-heading">Groundwork Essentials</h2>
          <p className="ge-para">
            LoLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kass
          </p>
          <div className="ge-cards">
            <ThreeColumnWhiteVideoInfoLayout />
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default GroundWorkEssentials;
