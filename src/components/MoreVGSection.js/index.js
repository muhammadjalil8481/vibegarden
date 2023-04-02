// Library Imports
import React from "react";
import { useSelector } from "react-redux";
// Custom Imports
import ContainerSection from "../Container";
import WhiteInfoCard from "../WhiteInfoCard.js";

const MoreVG = ({ data }) => {
  // Redux State Read

  return (
    <section className="mvg py-5 gx-xl-0 gx-lg-1">
      <ContainerSection isFluid={"yes"}>
        <h2 className="mvg-heading mb-5">
          {data?.moreVGHeading || "More About VibeGarden"}
        </h2>
        <div className="container-lg mvg-container">
          <div className="row mvg-row ">
            <div className="col-md-4 mvg-item ">
              <WhiteInfoCard
                heading={data?.creationStory?.heading || "A Creation Story"}
                para={data?.creationStory?.text || "A ctreation story para"}
                btnText={data?.creationStory?.buttonText || "More About"}
                videoLink={data?.creationStory?.video}
                videoDuration={data?.creationStory?.videoDuration}
                image={data?.creationStory?.thumbnail}
                linkText="/about-us"
              />
            </div>
            <div className="col-md-4 mvg-item ">
              <WhiteInfoCard
                heading={data?.vibeBloomApp?.heading || "The Vibe Bloom App"}
                para={data?.vibeBloomApp?.text || "The vibe bloom app para"}
                btnText={data?.vibeBloomApp?.buttonText || "Begin Your Quest"}
                videoLink={data?.vibeBloomApp?.video}
                videoDuration={data?.vibeBloomApp?.videoDuration}
                image={data?.vibeBloomApp?.thumbnail}
                linkText="/appdownload"
              />
            </div>
            <div className="col-md-4 mvg-item ">
              <WhiteInfoCard
                heading={data?.teacher?.heading || "Teachers"}
                para={data?.teacher?.text || "Teachers para"}
                btnText={data?.teacher?.buttonText || "Visit Teacher"}
                videoLink={data?.teacher?.video}
                videoDuration={data?.teacher?.videoDuration}
                image={data?.teacher?.thumbnail}
                linkText="/teachers"
              />
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default MoreVG;
