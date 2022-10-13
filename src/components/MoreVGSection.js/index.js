import React from "react";
import ContainerSection from "../Container";
import WhiteInfoCard from "../WhiteInfoCard.js";
import images from "../../constants/images";

const MoreVG = () => {
  return (
    <section className="mvg py-5 gx-xl-0 gx-lg-1">
      <ContainerSection isFluid={"yes"}>
        <h2 className="mvg-heading mb-5">More About VibeGarden</h2>
        <div className="container-lg mvg-container">
          <div className="row mvg-row ">
            <div className="col-md-4 mvg-item ">
              <WhiteInfoCard
                btnText="Explorer Groundwork"
                heading="A Creation Story"
                image={images.placeholder3}
                linkText="/groundwork"
              />
            </div>
            <div className="col-md-4 mvg-item ">
              <WhiteInfoCard
                heading="The Vibe Bloom App"
                btnText="Begin Your Quest"
                image={images.placeholder4}
              />
            </div>
            <div className="col-md-4 mvg-item ">
              <WhiteInfoCard
                heading="Teachers"
                btnText="Visit Teacher"
                image={images.placeholder5}
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
