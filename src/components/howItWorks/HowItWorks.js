// Library Imports
import React from "react";
import { useSelector } from "react-redux";
// Custom Imports
import ContainerSection from "../Container";
import howItWorks1 from "../../assets/images/how-it-works-1.svg";
import howItWorks2 from "../../assets/images/how-it-works-2.svg";
import howItWorks3 from "../../assets/images/how-it-works-3.svg";
import howItWorks4 from "../../assets/images/how-it-works-4.svg";
import plusSign from "../../assets/images/plus-sign.svg";
import equalsSign from "../../assets/images/equals-sign.svg";
import { useHomepageLO } from "../../api/pages";

const HowItWorks = ({ data }) => {
  // Redux State Read
  return (
    <section className="hiw py-5">
      <ContainerSection isFluid={"yes"}>
        <div className="">
          <h2 className="hiw-heading">How It Works</h2>
          <div className="row mb-5 hiw-container">
            <div className="col-md-2 col-sm-4 col-4 hiw-big-col">
              <div className="hiw-img-container">
                <img src={data?.hiw1?.image} className="hiw-img" />
              </div>
              <div className="hiw-text-container">
                <h5 className="hiw-text-heading">{data?.hiw1?.heading}</h5>
                <p className="hiw-text-para">{data?.hiw1?.text}</p>
              </div>
            </div>
            <div className="col-md-1 col-sm-2 col-3 hiw-small-col">
              <img src={plusSign} />
            </div>
            <div className="col-md-2 col-sm-4 col-4 hiw-big-col">
              <div className="hiw-img-container">
                <img src={data?.hiw2?.image} className="hiw-img" />
              </div>
              <div className="hiw-text-container">
                <h5 className="hiw-text-heading">{data?.hiw2?.heading}</h5>
                <p className="hiw-text-para">{data?.hiw2?.text}</p>
              </div>
            </div>
            <div className="col-md-1 col-sm-2 col-3 hiw-small-col">
              <div className="hiw-small-col-img">
                <img src={plusSign} />
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-4 hiw-big-col">
              <div className="hiw-img-container">
                <img src={data?.hiw3?.image} className="hiw-img" />
              </div>
              <div className="hiw-text-container">
                <h5 className="hiw-text-heading">{data?.hiw3?.heading}</h5>
                <p className="hiw-text-para">{data?.hiw3?.text}</p>
              </div>
            </div>
            <div className="col-md-1 col-sm-2 col-3 hiw-small-col">
              <img src={equalsSign} />
            </div>
            <div className="col-md-2 col-sm-4 col-4 hiw-big-col">
              <div className="hiw-img-container">
                <img src={data?.hiw4?.image} className="hiw-img" />
              </div>
              <div className="hiw-text-container">
                <h5 className="hiw-text-heading">{data?.hiw4?.heading}</h5>
                <p className="hiw-text-para">{data?.hiw3?.text}</p>
              </div>
            </div>
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default HowItWorks;
