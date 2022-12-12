import React, { useState } from "react";
import images from "../../constants/images";
import VideoIcon2nd from "../../assets/images/video-tag-icon.svg";
import VideoIcon from "../../assets/images/video-icon.svg";
import Modal from "../Modal";
import VideoIconPink from "../../assets/images/video-icon-pink.svg";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import VideoPlayer from "../Modal/VideoPlayer";
import { Link } from "react-router-dom";

const videoJsOptions = {
  autoplay: true,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  // width: 720,
  // height: 300,
  controls: true,
  // fluid: true,
  sources: [
    {
      // src: "//vjs.zencdn.net/v/oceans.mp4",
      // src: "http://localhost:3000/uploads/videoplayback-1669094808047.mp4",
      // src: "http://localhost:3000/uploads/Imagine_Dragons_-_Demons_(Official_Music_Video)-1668597315793.mp4",
      src: "http://localhost:3000/api/v1/video/Coke_Studio_-_Season_14_-_Kana_Yaari_-_Kaifi_Khalil_x_Eva_B_x_Abdul_Wahab_Bugti-1670828123129.mp4",
      type: "video/mp4",
    },
    // {
    //   // src: "//vjs.zencdn.net/v/oceans.mp4",
    //   type: "video/mp4",
    //   label: "720P",
    // },
    // {
    //   src: "http://localhost:3000/uploads/Imagine_Dragons_-_Demons_(Official_Music_Video)-1669726371617.mp4",
    //   type: "video/mp4",
    //   label: "480P",
    //   selected: true,
    // },
    // {
    //   src: "//vjs.zencdn.net/v/oceans.mp4",
    //   type: "video/mp4",
    //   label: "360P",
    // },
  ],
  controlBar: {
    children: [
      "playToggle",
      "progressControl",
      "remainingTimeDisplay",
      "volumePanel",
      "qualitySelector",
      "fullscreenToggle",
    ],
  },
};

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
  linkVideo = "#",
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [addTool, setAddTool] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <>
      <div className="card vid-card border-0">
        {playVideo && <VideoPlayer {...videoJsOptions} image={image} />}
        {/* {!playVideo && ( */}
        {/* <div> */}
        {!playVideo && (
          <>
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
                  <AiOutlinePlusCircle
                    size={24}
                    color="rgba(214, 16, 153, 1)"
                  />
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
            <Link to={linkVideo}>
              <img
                onClick={() => !recentVibes && setPlayVideo(true)}
                src={pinkVideoIcon ? VideoIconPink : VideoIcon}
                className="vid-card-video-icon"
              />
            </Link>
            <p className="vid-card-time">{time}</p>
          </>
        )}
        {/* </div> */}
        {/* </div> */}
        {/* )} */}
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
