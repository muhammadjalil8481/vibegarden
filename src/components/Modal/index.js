import React, { useRef, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const Modal = ({ showModal, setShowModal }) => {
  // const videoJSOptions = {
  //   controls: true,
  //   sources: [
  //     {
  //       src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  //       type: "video/mp4",
  //     },
  //   ],
  // };
  // const videoRef = useRef(null);
  // const playerRef = useRef(null);
  // useEffect(()=>{

  // })
  return (
    <div className="modalComp">
      <div className="modalComp-container"></div>
      <div className="modalComp-icon" onClick={() => setShowModal(false)}>
        <CloseIcon sx={{ fontSize: 40, color: grey[50] }} />
      </div>
      {/* <video className="video-js vjs-big-play-centered" /> */}
    </div>
  );
};

export default Modal;
