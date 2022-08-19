import React from "react";
import ContainerSection from "../Container";
import VideoCardSmall from "../VideoCardSmall";
import VideoCardShifted from "../VideoShiftedCard";

const SampleTools = () => {
  return (
    <section className="st px-lg-5">
      <ContainerSection isFluid={"yes"}>
        <div className="st-heading--container">
          <h2 className="st-heading">Sample Tools</h2>
        </div>
        <div className="row st-cards">
          <div className="col-md-5 col-sm-6 st-card">
            <VideoCardShifted />
          </div>
          <div className="col-md-5 col-sm-6 st-card">
            <VideoCardShifted />
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default SampleTools;
