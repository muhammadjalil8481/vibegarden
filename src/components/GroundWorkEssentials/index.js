import React from "react";
import ContainerSection from "../Container";
import ThreeColumnWhiteVideoInfoLayout from "../ThreeColumnWhiteVideoInfoLayout";

const GroundWorkEssentials = ({
  heading,
  text,
  gwVideo1,
  gwVideo2,
  gwVideo3,
}) => {
  return (
    <section className="ge">
      <ContainerSection isFluid={"yes"}>
        <div className="container-lg ge-container text-center">
          <h2 className="ge-heading">{heading}</h2>
          <p className="ge-para">{text}</p>
          <div className="ge-cards">
            <ThreeColumnWhiteVideoInfoLayout
              gwVideo1={gwVideo1}
              gwVideo2={gwVideo2}
              gwVideo3={gwVideo3}
              noRedirect
              title1="A Creation Story"
              title2="A Creation Story"
              title3="A Creation Story"
              groundWork
            />
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default GroundWorkEssentials;
