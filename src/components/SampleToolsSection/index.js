import React from "react";
import ContainerSection from "../Container";
import VideoCardSmall from "../VideoCardSmall";
import VideoCardShifted from "../VideoShiftedCard";
import images from "../../constants/images";

const SampleTools = () => {
  return (
    <section className="st my70">
      <ContainerSection isFluid={"yes"}>
        <div className="container-lg st-container ">
          <h2 className="st-heading mb-5">Sample Tools</h2>
          <div className="row st-cards">
            <div className="col-md-6 st-card">
              <VideoCardShifted image={images.placeholder1} />
            </div>
            <div className="col-md-6 st-card">
              <VideoCardShifted image={images.placeholder2} />
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default SampleTools;
