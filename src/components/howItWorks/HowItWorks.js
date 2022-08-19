import React from "react";
import ContainerSection from "../Container";
import howItWorks1 from "../../assets/images/how-it-works-1.svg";
import howItWorks2 from "../../assets/images/how-it-works-2.svg";
import howItWorks3 from "../../assets/images/how-it-works-3.svg";
import howItWorks4 from "../../assets/images/how-it-works-4.svg";
import plusSign from "../../assets/images/plus-sign.svg";
import equalsSign from "../../assets/images/equals-sign.svg";

const HowItWorks = () => {
  return (
    <section className="hiw py-5">
      <ContainerSection isFluid={"yes"}>
        <h2 class="hiw-heading">How It Works</h2>
        <div className="row mb-5">
          <div className="hiw-container mt-2">
            <div className="col-md-2 ">
              <div className="hiw-col-1">
                <img src={howItWorks1} />
                <div className="hiw-text-container">
                  <h5 className="hiw-text-heading">Column Header Green</h5>
                  <p className="hiw-text-para">
                    Column Body Copy - same as default body copy style. Lorem
                    ipsum dolor sit amet
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-1 hiw-col-2">
              <img src={plusSign} />
            </div>
            <div className="col-md-2 hiw-col-1">
              <img src={howItWorks2} />
              <div className="hiw-text-container">
                <h5 className="hiw-text-heading">Column Header Green</h5>
                <p className="hiw-text-para">
                  Column Body Copy - same as default body copy style. Lorem
                  ipsum dolor sit amet
                </p>
              </div>
            </div>
            <div className="col-md-1 hiw-col-2 ">
              <img src={plusSign} />
            </div>
            <div className="col-md-2 hiw-col-1">
              <img src={howItWorks3} />
              <div className="hiw-text-container">
                <h5 className="hiw-text-heading">Column Header Green</h5>
                <p className="hiw-text-para">
                  Column Body Copy - same as default body copy style. Lorem
                  ipsum dolor sit amet
                </p>
              </div>
            </div>
            <div className="col-md-1 hiw-col-2 ">
              <img src={equalsSign} />
            </div>
            <div className="col-md-2 hiw-col-1">
              <img src={howItWorks4} />
              <div className="hiw-text-container">
                <h5 className="hiw-text-heading">Column Header Green</h5>
                <p className="hiw-text-para">
                  Column Body Copy - same as default body copy style. Lorem
                  ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default HowItWorks;
