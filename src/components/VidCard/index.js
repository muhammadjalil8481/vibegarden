import React, { useState } from "react";
import images from "../../constants/images";
import VideoIcon2nd from "../../assets/images/video-tag-icon.svg";
import VideoIcon from "../../assets/images/video-icon.svg";
import Modal from "../Modal";
import VideoIconPink from "../../assets/images/video-icon-pink.svg";

const VidCard = ({
  titleIcon,
  blackTitle,
  image = images.placeholder5,
  title = "Title",
  time = "3:15",
  subText,
  noTitle,
  pinkVideoIcon,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="card vid-card border-0"
        onClick={() => setShowModal(true)}
      >
        <img src={image} className="vid-card-image" />
        {/* <div className="card-img-overlay"> */}
        <div className="vid-card-titleAndIcon">
          {titleIcon && <img src={VideoIcon2nd} />}
          {titleIcon && (
            <h5 className={`vid-card-title ${blackTitle && "text-black"}`}>
              {title}
            </h5>
          )}
        </div>
        {!titleIcon && !noTitle && (
          <h5 className={`vid-card-topTitle ${blackTitle && "text-black"}`}>
            {title}
          </h5>
        )}
        <img
          src={pinkVideoIcon ? VideoIconPink : VideoIcon}
          className="vid-card-video-icon"
        />
        <p className="vid-card-time">{time}</p>
        {/* </div> */}
      </div>

      {showModal && (
        // <div onClick={() => setShowModal(false)}>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          image={image}
        />
        // </div>
      )}
    </>
  );
};

export default VidCard;
