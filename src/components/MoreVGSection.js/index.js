import React from "react";
import ContainerSection from "../Container";
import WhiteInfoCard from "../WhiteInfoCard.js";
import images from "../../constants/images";

const MoreVG = () => {
  return (
    <section className="mvg ">
      <ContainerSection isFluid={"yes"}>
        <h2 className="mvg-heading">More About Vibe garden</h2>
        <div className="row mvg-container ">
          <div className="col-md-3 col-sm-6 mvg-item ">
            <WhiteInfoCard
              heading="A Creation Story"
              image={images.placeholder3}
            />
          </div>
          <div className="col-md-3 col-sm-6 mvg-item">
            <WhiteInfoCard
              heading="The Vibe Bloom App"
              image={images.placeholder4}
            />
          </div>
          <div className="col-md-3 col-sm-6 mvg-item">
            <WhiteInfoCard heading="Teachers" image={images.placeholder5} />
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default MoreVG;
