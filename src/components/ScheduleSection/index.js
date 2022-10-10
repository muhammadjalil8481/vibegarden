import React from "react";
import ScheduleCard from "../ScheduleCard";

const ScheduleSection = () => {
  return (
    <div className="container ss-container">
      <div className="row ss-row">
        <div className="col-md-5 ss-col">
          <div className="ss-card-container">
            <ScheduleCard name="Erin" />
          </div>
        </div>
        <div className="col-md-1 line-break-container">
          <div className="line-break-vertical"></div>
        </div>
        <div className="col-md-5 ss-col">
          <div className="ss-card-container">
            <ScheduleCard name="Kate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;
