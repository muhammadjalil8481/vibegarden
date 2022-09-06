import React, { useState } from "react";
import NavBar from "../../components/Navbar";
import images from "../../constants/images";
import GreenLineBreak from "../../components/GreenLineBreak";
import VidCard from "../../components/VidCard";
import DatePicker from "../../components/DatePicker";
import GreenButton from "../../components/Button/GreenButton";
import TimeButton from "../../components/Button/TimeButton";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Schedule = () => {
  const [selectedTimeDuration, setSelectedTimeDuration] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="teacher-schedule-info">
          <h3 className="teacher-heading">Teacher Name</h3>
          <div className="row d-flex teacher-row">
            <div className="col-lg-4 col-md-6 teacher-img-col">
              <div className="teacher-image">
                <img src={images.teacher1} />
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <p className="teacher-desc">
                Body copy style for white text on dark or gradient backgrounds
                (Medium Weight) Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Mauris placerat euismod porttitor. Nam nec
                mauris non magna facilisis volutpat ac sit amet nulla. Nullam
                vestibulum velit vitae sem commodo tempor. Sed dapibus, est non
                pulvinar fringilla, lorem libero laoreet erat, ac tristique elit
                nisl eu metus. Sed fermentum erat sit amet enim blandit, quis
                dictum nisi tempus. Etiam dui tellus, porttitor vitae rutrum a,
                ultrices pharetra nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
      <GreenLineBreak />
      <div className="teacher-schedule-video">
        <VidCard />
      </div>
      <div className="container-xl">
        <div className="row ">
          <div className="col-md-7 schedule-left">
            <h4 className="schedule-heading">Kati Schedule</h4>
            <DatePicker />

            <div className="schedule-left-btn">
              <Link to="/payment">
                <GreenButton text="Submit Appointment" />
              </Link>
            </div>
          </div>
          <div className="col-md-5 schedule-right">
            <h4 className="schedule-heading">Kati Schedule</h4>
            <div className="schedule-right-timeSelect">
              <div className="schedule-right-timeBtn ">
                <div
                  className={`${
                    selectedTimeDuration === "30 Minutes" && "active-time-btn"
                  } `}
                  onClick={() => setSelectedTimeDuration("30 Minutes")}
                >
                  <TimeButton first="30" second="Min" />
                </div>
                <p className="item-price">$75</p>
              </div>
              <div className="schedule-right-timeBtn">
                <div
                  className={`${
                    selectedTimeDuration === "60 Minutes" && "active-time-btn"
                  } `}
                  onClick={() => setSelectedTimeDuration("60 Minutes")}
                >
                  <TimeButton first="60" second="Min" />
                </div>
                <p className="item-price">$130</p>
              </div>
            </div>
            <h5 className="schedule-info">
              Choose a Time for your Session
              <br /> Wed-27-July
            </h5>
            <div className="divider"></div>
            <div className="schedule-time">
              <div className="schedule-time-morning">
                <h5>Morning</h5>
                <div
                  className={`schedule-time-btn ${
                    selectedTime === "11:00 AM" && "active-time-btn"
                  }`}
                  onClick={() => setSelectedTime("11:00 AM")}
                >
                  <TimeButton first="11:00" second="AM" />
                </div>
              </div>
              <div className="schedule-time-evening">
                <h5>Evening</h5>
                <div
                  className={`schedule-time-btn ${
                    selectedTime === "12:30 PM" && "active-time-btn"
                  }`}
                  onClick={() => setSelectedTime("12:30 PM")}
                >
                  <TimeButton first="12:30" second="PM" />
                </div>
                <div
                  className={`schedule-time-btn ${
                    selectedTime === "02:00 PM" && "active-time-btn"
                  }`}
                  onClick={() => setSelectedTime("02:00 PM")}
                >
                  <TimeButton first="02:00" second="PM" />
                </div>
                <div
                  className={`schedule-time-btn ${
                    selectedTime === "03:00 PM" && "active-time-btn"
                  }`}
                  onClick={() => setSelectedTime("03:00 PM")}
                >
                  <TimeButton first="04:00" second="PM" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="schedule-note">
          <span>Note: </span> Katie will email you a reminder to coordinate with
          you on zoom
        </h4>
      </div>
      <Footer />
    </>
  );
};

export default Schedule;
