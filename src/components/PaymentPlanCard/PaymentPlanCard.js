import React from "react";

const PaymentPlanCard = ({ monthly }) => {
  return monthly ? (
    <div className="ppcm">
      <h4 className="ppcm-heading">Monthly</h4>
      <p className="ppcm-price">
        <span>$22</span>/Month
      </p>
      <p className="ppcm-info">Billed Monthly </p>
    </div>
  ) : (
    <div className="ppcy">
      <h4 className="ppcy-heading">Annual</h4>
      <p className="ppcy-price">$222</p>
      <p className="ppcy-sub-info">Billed Annually</p>
      <p className="ppcy-info">Include Free Coaching</p>
    </div>
  );
};

export default PaymentPlanCard;
