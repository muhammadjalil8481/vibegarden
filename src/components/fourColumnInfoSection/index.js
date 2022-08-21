import React from "react";
import ContainerSection from "../Container";
import { fcisdData } from "../../constants/dummyFCISData";

const FourColumnInfoSection = () => {
  return (
    <section className="fcis my-md-5">
      <ContainerSection isFluid={"yes"}>
        <div className="fcis-container container">
          <div className="row fcis-row">
            {fcisdData.map((item, index) => {
              return (
                <div className="col-md-6 fcis-item" key={`${index}`}>
                  <h3 className="fcis-item--heading">{item.heading}</h3>
                  <ul className="fcis-item--list">
                    {item.infoPoints.map((infoPoint) => {
                      return (
                        <li className="fcis-item--list-item">
                          {infoPoint.point}
                        </li>
                      );
                    })}
                  </ul>
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
