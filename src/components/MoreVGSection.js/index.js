// Library Imports
import React from "react";
import { useSelector } from "react-redux";
// Custom Imports
import ContainerSection from "../Container";
import WhiteInfoCard from "../WhiteInfoCard.js";

const MoreVG = () => {
  // Redux State Read
  const homepage = useSelector((state) => state.homepage);
  return (
    <section className="mvg py-5 gx-xl-0 gx-lg-1">
      <ContainerSection isFluid={"yes"}>
        <h2 className="mvg-heading mb-5">
          {homepage?.moreVGHeading || "More About VibeGarden"}
        </h2>
        <div className="container-lg mvg-container">
          <div className="row mvg-row ">
            <div className="col-md-4 mvg-item ">
              <WhiteInfoCard
                heading={homepage?.creationStory?.heading || "A Creation Story"}
                para={homepage?.creationStory?.text || "A ctreation story para"}
                btnText={homepage?.creationStory?.buttonText || "More About"}
                videoLink={homepage?.creationStory?.video}
                videoDuration={homepage?.creationStory?.videoDuration}
                image={homepage?.creationStory?.thumbnail}
                linkText="/about-us"
              />
            </div>
            <div className="col-md-4 mvg-item ">
              <WhiteInfoCard
                heading={
                  homepage?.vibeBloomApp?.heading || "The Vibe Bloom App"
                }
                para={homepage?.vibeBloomApp?.text || "The vibe bloom app para"}
                btnText={
                  homepage?.vibeBloomApp?.buttonText || "Begin Your Quest"
                }
                videoLink={homepage?.vibeBloomApp?.video}
                videoDuration={homepage?.vibeBloomApp?.videoDuration}
                image={homepage?.vibeBloomApp?.thumbnail}
                linkText="/appdownload"
              />
            </div>
            <div className="col-md-4 mvg-item ">
              <WhiteInfoCard
                heading={homepage?.teacher?.heading || "Teachers"}
                para={homepage?.teacher?.text || "Teachers para"}
                btnText={homepage?.teacher?.buttonText || "Visit Teacher"}
                videoLink={homepage?.teacher?.video}
                videoDuration={homepage?.teacher?.videoDuration}
                image={homepage?.teacher?.thumbnail}
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
