import React, { useState } from "react";
import images from "../../constants/images";
import VideoIcon2nd from "../../assets/images/video-tag-icon.svg";
import VideoIcon from "../../assets/images/video-icon.svg";
import Modal from "../Modal";
import VideoIconPink from "../../assets/images/video-icon-pink.svg";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const VidCard = ({
  titleIcon,
  blackTitle,
  image = images.placeholder5,
  title = "Title",
  time = "3:15",
  subText,
  noTitle,
  pinkVideoIcon,
  recentVibes,
  groundwork,
  freshBlooms,
  tool,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [addTool, setAddTool] = useState(false);

  return (
    <>
      <div className="card vid-card border-0">
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
        {(groundwork || freshBlooms) && !tool && (
          <span
            className="vid-card-heart"
            onClick={() => {
              setIsFav(!isFav);
            }}
          >
            {!isFav ? (
              <BsHeart size={20} color="rgba(214, 16, 153, 1)" />
            ) : (
              <BsHeartFill size={20} color="rgba(214, 16, 153, 1)" />
            )}
          </span>
        )}
        {tool && (
          <span
            className="vid-card-heart"
            onClick={() => {
              setAddTool(!addTool);
            }}
          >
            {!addTool ? (
              <AiOutlinePlusCircle size={24} color="rgba(214, 16, 153, 1)" />
            ) : (
              <AiFillPlusCircle size={24} color="rgba(214, 16, 153, 1)" />
            )}
          </span>
        )}
        {!titleIcon && !noTitle && (
          <h5 className={`vid-card-topTitle ${blackTitle && "text-black"}`}>
            {title}
          </h5>
        )}
        <img
          onClick={() => !recentVibes && setShowModal(true)}
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
