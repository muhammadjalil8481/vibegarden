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
        <div className="">
          <h2 className="hiw-heading">How It Works</h2>
          <div className="row mb-5 hiw-container">
            <div className="col-md-2 col-sm-4 col-4 hiw-big-col">
              <div className="hiw-img-container">
                <img src={howItWorks1} className="hiw-img" />
              </div>
              <div className="hiw-text-container">
                <h5 className="hiw-text-heading">Column Header Green</h5>
                <p className="hiw-text-para">
                  Column Body Copy - same as default body copy style. Lorem
                  ipsum dolor sit amet
                </p>
              </div>
            </div>
            <div className="col-md-1 col-sm-2 col-3 hiw-small-col">
              <img src={plusSign} />
            </div>
            <div className="col-md-2 col-sm-4 col-4 hiw-big-col">
              <div className="hiw-img-container">
                <img src={howItWorks2} className="hiw-img" />
              </div>
              <div className="hiw-text-container">
                <h5 className="hiw-text-heading">Column Header Green</h5>
                <p className="hiw-text-para">
                  Column Body Copy - same as default body copy style. Lorem
                  ipsum dolor sit amet
                </p>
              </div>
            </div>
            <div className="col-md-1 col-sm-2 col-3 hiw-small-col">
              <div className="hiw-small-col-img">
                <img src={plusSign} />
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-4 hiw-big-col">
              <div className="hiw-img-container">
                <img src={howItWorks3} className="hiw-img" />
              </div>
              <div className="hiw-text-container">
                <h5 className="hiw-text-heading">Column Header Green</h5>
                <p className="hiw-text-para">
                  Column Body Copy - same as default body copy style. Lorem
                  ipsum dolor sit amet
                </p>
              </div>
            </div>
            <div className="col-md-1 col-sm-2 col-3 hiw-small-col">
              <img src={equalsSign} />
            </div>
            <div className="col-md-2 col-sm-4 col-4 hiw-big-col">
              <div className="hiw-img-container">
                <img src={howItWorks4} className="hiw-img" />
              </div>
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

        {/* <div className="hiw-container mt-2"> */}

        {/* <div className="hiw-col-1"> */}
        {/* <img src={howItWorks1} /> */}
        {/* <div className="hiw-text-container"> */}
        {/* <h5 className="hiw-text-heading">Column Header Green</h5> */}
        {/* <p className="hiw-text-para"> */}
        {/* Column Body Copy - same as default body copy style. Lorem
                    ipsum dolor sit amet */}
        {/* </p> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* <div className="col-md-1 hiw-col-2"> */}
        {/* <img src={plusSign} /> */}
        {/* </div> */}
        {/* <div className="col-md-2 hiw-col-1"> */}
        {/* <img src={howItWorks2} /> */}
        {/* <div className="hiw-text-container"> */}
        {/* <h5 className="hiw-text-heading">Column Header Green</h5> */}
        {/* <p className="hiw-text-para"> */}
        {/* Column Body Copy - same as default body copy style. Lorem
                  ipsum dolor sit amet */}
        {/* </p> */}
        {/* </div> */}
        {/* </div> */}
        {/* <div className="col-md-1 hiw-col-2 ">
              <img src={plusSign} />
            </div> */}
        {/* <div className="col-md-2 hiw-col-1"> */}
        {/* <img src={howItWorks3} /> */}
        {/* <div className="hiw-text-container"> */}
        {/* <h5 className="hiw-text-heading">Column Header Green</h5> */}
        {/* <p className="hiw-text-para"> */}
        {/* Column Body Copy - same as default body copy style. Lorem
                  ipsum dolor sit amet */}
        {/* </p> */}
        {/* </div> */}
        {/* </div> */}
        {/* <div className="col-md-1 hiw-col-2 "> */}
        {/* <img src={equalsSign} /> */}
        {/* </div> */}
        {/* <div className="col-md-2 hiw-col-1"> */}
        {/* <img src={howItWorks4} /> */}
        {/* <div className="hiw-text-container"> */}
        {/* <h5 className="hiw-text-heading">Column Header Green</h5> */}
        {/* <p className="hiw-text-para"> */}
        {/* Column Body Copy - same as default body copy style. Lorem
                  ipsum dolor sit amet */}
        {/* </p> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </ContainerSection>
    </section>
  );
};

export default HowItWorks;
