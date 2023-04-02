// Library Imports
import React from "react";
// Custom Imports
import ContainerSection from "../Container";

const FourColumnInfoSection = ({ data }) => {
  console.log("data", data);

  const headlines = [
    data?.headline1,
    data?.headline2,
    data?.headline3,
    data?.headline4,
  ];
  return (
    <section className="fcis my-md-5">
      <ContainerSection isFluid={"yes"}>
        <div className="fcis-container container">
          <div className="row fcis-row">
            {headlines?.map((item, index) => {
              return (
                <div className="col-md-6 fcis-item" key={`${index}`}>
                  <h3 className="fcis-item--heading">{item?.heading}</h3>
                  <p className="fcis-item-para">{item?.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default FourColumnInfoSection;
