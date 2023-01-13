// Library Imports
import React from "react";
import { useSelector } from "react-redux";
// Custom Imports
import ContainerSection from "../Container";
import VideoCardShifted from "../VideoShiftedCard";
import circle from "../../assets/images/circle.svg";

const SampleTools = () => {
  // Redux State Read
  const homepage = useSelector((state) => state.homepage);
  return (
    <section className="st my70">
      <ContainerSection isFluid={"yes"}>
        <div className="container-lg st-container ">
          <h2 className="st-heading mb-5">
            {homepage?.sampleToolsHeading || `Sample Tools`}
          </h2>
          <div className="row st-cards">
            <div className="col-md-6 st-card">
              <VideoCardShifted
                image={homepage?.sampleTools1?.thumbnail}
                heading={
                  homepage?.sampleTools1?.heading || "Sample Tool Card 1"
                }
                desc={
                  homepage?.sampleTools1?.text || "sample tool card description"
                }
                icon={homepage?.sampleTools1?.icon || circle}
                videoDuration={homepage?.sampleTools1?.videoDuration}
                videoLink={homepage?.sampleTools1?.video}
              />
            </div>
            <div className="col-md-6 st-card">
              <VideoCardShifted
                image={homepage?.sampleTools2?.thumbnail}
                heading={
                  homepage?.sampleTools2?.heading || "Sample Tool Card 2"
                }
                desc={
                  homepage?.sampleTools2?.text || "sample tool card description"
                }
                icon={homepage?.sampleTools2?.icon || circle}
                videoLink={homepage?.sampleTools2?.video}
                videoDuration={homepage?.sampleTools2?.videoDuration}
              />
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default SampleTools;
