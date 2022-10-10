import React from "react";
import images from "../../constants/images";
import VidCard from "../VidCard";
import PinkIcon from "../../assets/images/pink-icon.svg";
import VideoCardSlider from "../VideoCardSlider";

const TeacherInfo = () => {
  return (
    <div className="teacher-info ">
      <div className="row teacher-info-row container-lg">
        <div className="col-md-7 teacher-info-leftcol">
          <div className="teacher-info-imgHeading">
            <div className="teacher-info-img-container">
              <img src={images.teacher1} />
            </div>
            <h2 className="teacher-info-heading">Emily Jordan</h2>
          </div>
          <div className="teacher-info-iconPara">
            <img src={PinkIcon} />
            <p>
              Body copy style for white text on dark or gradient backgrounds
              (Medium Weight.
            </p>
          </div>
        </div>
        <div className="col-md-5 teacher-info-rightcol">
          <VidCard />
        </div>
      </div>
      <div className="teacher-content-slider container">
        <VideoCardSlider heading="Related Content" />
      </div>
      <div className="teacher-info-reels container">
        <h2>Nightlight Reels</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="link-display">
              <div className="link-display-heading">
                <span>•</span>
                <h4>Link Display Name</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="link-display">
              <div className="link-display-heading">
                <span>•</span>
                <h4>Link Display Name</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="link-display">
              <div className="link-display-heading">
                <span>•</span>
                <h4>Link Display Name</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="link-display">
              <div className="link-display-heading">
                <span>•</span>
                <h4>Link Display Name</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherInfo;
