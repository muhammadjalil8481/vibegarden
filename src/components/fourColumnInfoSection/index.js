import React from "react";
import ContainerSection from "../Container";
import { fcisdData } from "../../constants/dummyFCISData";

const FourColumnInfoSection = () => {
  console.log(fcisdData.length);
  return (
    <section className="fcis px-lg-5 px-md-3 p-sm-2 mt-3">
      <ContainerSection isFluid={"yes"}>
        <div className="fcis-container">
          <div className="row ">
            {fcisdData.map((item, index) => {
              return (
                <div className="col-md-6 fcis-item" key={`${index}`}>
                  <h3 className="fcis-item--heading">{item.heading}</h3>
                  <ul>
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
