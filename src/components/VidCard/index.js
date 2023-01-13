// Library Imports
import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Custom Imports
import VideoPlayer from "../Modal/VideoPlayer";
import Modal from "../Modal";
import images from "../../constants/images";
import VideoIcon2nd from "../../assets/images/video-tag-icon.svg";
import VideoIcon from "../../assets/images/video-icon.svg";
import VideoIconPink from "../../assets/images/video-icon-pink.svg";

const VidCard = ({
  titleIcon,
  blackTitle,
  image = images.placeholder5,
  title = "Title",
  time = "3:15",
  noTitle,
  pinkVideoIcon,
  recentVibes,
  groundwork,
  freshBlooms,
  tool,
  linkVideo = "#",
  videoSrc = "//vjs.zencdn.net/v/oceans.mp4",
}) => {
  const videoJsOptions = {
    autoplay: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    preload: "auto",
    controls: true,
    sources: [
      {
        // src: "//vjs.zencdn.net/v/oceans.mp4",
        src: videoSrc,
        // src: "http://localhost:3000/uploads/videoplayback-1669094808047.mp4",
        // src: "http://localhost:3000/uploads/Imagine_Dragons_-_Demons_(Official_Music_Video)-1668597315793.mp4",
        // src: "http://localhost:3000/api/v1/video/Highway_Fight_Scene_-_Captain_America__The_Winter_Soldier_(2014)_Movie_CLIP_HD-1670841809191-360p.mp4",
        // type: "video/mp4",
      },
      // {
      //   src: "http://localhost:3000/api/v1/video/Highway_Fight_Scene_-_Captain_America__The_Winter_Soldier_(2014)_Movie_CLIP_HD-1670846455716.mp4",
      //   type: "video/mp4",
      //   label: "720P",
      //   selected: true,
      // },
      // {
      //   src: "http://localhost:3000/api/v1/video/Highway_Fight_Scene_-_Captain_America__The_Winter_Soldier_(2014)_Movie_CLIP_HD-1670846455716-480p.mp4",
      //   type: "video/mp4",
      //   label: "480P",
      //   // selected: true,
      // },
      // {
      //   src: "http://localhost:3000/api/v1/video/Highway_Fight_Scene_-_Captain_America__The_Winter_Soldier_(2014)_Movie_CLIP_HD-1670846455716-360p.mp4",
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
  const [showModal, setShowModal] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [addTool, setAddTool] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <>
      <div className="card vid-card border-0">
        {playVideo && <VideoPlayer {...videoJsOptions} image={image} />}
        {!playVideo && (
          <>
            <img src={image} className="vid-card-image" />
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
                onClick={() => {
                  !recentVibes && setPlayVideo(true);
                }}
                src={pinkVideoIcon ? VideoIconPink : VideoIcon}
                className="vid-card-video-icon"
              />
            </Link>
            <p className="vid-card-time">{time}</p>
          </>
        )}
      </div>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default VidCard;
