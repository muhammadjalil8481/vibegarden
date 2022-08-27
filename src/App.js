import Navigation from "./navigation/navigation";
import React, { useRef, useEffect } from "react";

function App() {
  const videoJsOptions = {
    autoplay: false,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: 720,
    height: 300,
    controls: true,
    sources: [
      {
        src: "//vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <div className="App">
      {/* <h1>nxwk</h1> */}
      <Navigation />
      {/* <p>jko</p> */}
      {/* <VideoPlayer {...videoJsOptions} /> */}
    </div>
  );
}

export default App;
