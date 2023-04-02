// Library Imports
import React from "react";
import { useSelector } from "react-redux";
// Custom Imports
import ContainerSection from "../Container";
import VideoCardShifted from "../VideoShiftedCard";
import circle from "../../assets/images/circle.svg";

const SampleTools = ({ data }) => {
  // Redux State Read

  return (
    <section className="st my70">
      <ContainerSection isFluid={"yes"}>
        <div className="container-lg st-container ">
          <h2 className="st-heading mb-5">
            {data?.sampleToolsHeading || `Sample Tools`}
          </h2>
          <div className="row st-cards">
            <div className="col-md-6 st-card">
              <VideoCardShifted
                image={data?.sampleTools1?.thumbnail}
                heading={data?.sampleTools1?.heading || "Sample Tool Card 1"}
                desc={
                  data?.sampleTools1?.text || "sample tool card description"
                }
                icon={data?.sampleTools1?.icon || circle}
                videoDuration={data?.sampleTools1?.videoDuration}
                videoLink={data?.sampleTools1?.video}
              />
            </div>
            <div className="col-md-6 st-card">
              <VideoCardShifted
                image={data?.sampleTools2?.thumbnail}
                heading={data?.sampleTools2?.heading || "Sample Tool Card 2"}
                desc={
                  data?.sampleTools2?.text || "sample tool card description"
                }
                icon={data?.sampleTools2?.icon || circle}
                videoLink={data?.sampleTools2?.video}
                videoDuration={data?.sampleTools2?.videoDuration}
              />
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default SampleTools;
