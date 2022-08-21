import React from "react";
import ContainerSection from "../Container";
import WhiteInfoCard from "../WhiteInfoCard.js";
import images from "../../constants/images";

const MoreVG = () => {
  return (
    <section className="mvg py-5 gx-xl-0 gx-lg-1">
      <ContainerSection isFluid={"yes"}>
        <h2 className="mvg-heading mb-5">More About Vibe garden</h2>
        <div className="container-lg mvg-container">
          <div className="row mvg-row ">
            <div className="col-md-4 mvg-item ">
              <WhiteInfoCard
                btnText="Explorer Groundwork"
                image={images.placeholder3}
              />
            </div>
            <div className="col-md-4 mvg-item ">
              <WhiteInfoCard
                btnText="Explorer Groundwork"
                image={images.placeholder4}
              />
            </div>
            <div className="col-md-4 mvg-item ">
              <WhiteInfoCard
                btnText="Explorer Groundwork"
                image={images.placeholder5}
              />
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default MoreVG;
