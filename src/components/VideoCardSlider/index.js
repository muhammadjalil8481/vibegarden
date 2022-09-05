import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import VidCard from "../../components/VidCard";
import { Link } from "react-router-dom";
import { dummyVideodata } from "../../constants/dummyVideoData";

const VideoCardSlider = ({
  heading = "Heading",
  twoRows,
  twoRowsFour,
  twoRowsThree,
}) => {
  const breakPoints2 = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 800, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1100, itemsToShow: 4, itemsToScroll: 1 },
  ];
  function slider2Arrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        <ArrowBackIosIcon
          sx={{ fontSize: 40 }}
          color={!isEdge ? "success" : "disabled"}
        />
      ) : (
        <ArrowForwardIosIcon
          sx={{ fontSize: 40 }}
          color={!isEdge ? "success" : "disabled"}
        />
      );
    return (
      <button
        onClick={onClick}
        disabled={isEdge}
        className={`arrow2SliderBtn
        `}
      >
        {pointer}
      </button>
    );
  }
  if (twoRowsFour) {
    return (
      <div className="video-slider video-slider-two">
        <h2 className="video-slider-heading container">{heading}</h2>
        <section className="video-slider container-fluid">
          <Carousel
            // breakPoints={breakPoints2}
            className="video-slider-carousel"
            renderArrow={slider2Arrow}
          >
            <div className="video-card-double-slider">
              <div className="video-card-double">
                {dummyVideodata.slice(0, 4).map((vid) => (
                  <div className="video-slider-vid-card-container vid-card-margin">
                    <div className="video-slider-video-card">
                      <VidCard titleIcon />
                    </div>
                    <div className="vid-card-subTexts">
                      <Link to="/individualgroundwork">
                        <p>Details</p>
                      </Link>
                      <Link to="/topic">
                        <p>#Tag</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="video-card-double">
                {dummyVideodata.slice(0, 4).map((vid) => (
                  <div className="video-slider-vid-card-container vid-card-margin">
                    <div className="video-slider-video-card">
                      <VidCard titleIcon />
                    </div>
                    <div className="vid-card-subTexts">
                      <Link to="/individualgroundwork">
                        <p>Details</p>
                      </Link>
                      <Link to="/topic">
                        <p>#Tag</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="video-card-double-slider">
              <div className="video-card-double">
                {dummyVideodata.slice(0, 4).map((vid) => (
                  <div className="video-slider-vid-card-container vid-card-margin">
                    <div className="video-slider-video-card">
                      <VidCard titleIcon />
                    </div>
                    <div className="vid-card-subTexts">
                      <Link to="/individualgroundwork">
                        <p>Details</p>
                      </Link>
                      <Link to="/topic">
                        <p>#Tag</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="video-card-double">
                {dummyVideodata.slice(5, 9).map((vid) => (
                  <div className="video-slider-vid-card-container vid-card-margin">
                    <div className="video-slider-video-card">
                      <VidCard titleIcon />
                    </div>
                    <div className="vid-card-subTexts">
                      <Link to="/individualgroundwork">
                        <p>Details</p>
                      </Link>
                      <Link to="/topic">
                        <p>#Tag</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Carousel>
        </section>
      </div>
    );
  }
  if (twoRowsThree) {
    return (
      <div className="video-slider video-slider-three">
        <h2 className="video-slider-heading container">{heading}</h2>
        <section className="video-slider container-fluid">
          <Carousel
            // breakPoints={breakPoints2}
            className="video-slider-carousel"
            renderArrow={slider2Arrow}
          >
            <div className="video-card-double-slider">
              <div className="video-card-double">
                {dummyVideodata.slice(0, 3).map((vid) => (
                  <div className="video-slider-vid-card-container vid-card-margin2">
                    <div className="video-slider-video-card">
                      <VidCard titleIcon />
                    </div>
                    <div className="vid-card-subTexts">
                      <Link to="/individualgroundwork">
                        <p>Details</p>
                      </Link>
                      <Link to="/topic">
                        <p>#Tag</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="video-card-double">
                {dummyVideodata.slice(0, 3).map((vid) => (
                  <div className="video-slider-vid-card-container vid-card-margin2">
                    <div className="video-slider-video-card">
                      <VidCard titleIcon />
                    </div>
                    <div className="vid-card-subTexts">
                      <Link to="/individualgroundwork">
                        <p>Details</p>
                      </Link>
                      <Link to="/topic">
                        <p>#Tag</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="video-card-double-slider">
              <div className="video-card-double">
                {dummyVideodata.slice(0, 3).map((vid) => (
                  <div className="video-slider-vid-card-container vid-card-margin2">
                    <div className="video-slider-video-card">
                      <VidCard titleIcon />
                    </div>
                    <div className="vid-card-subTexts">
                      <Link to="/individualgroundwork">
                        <p>Details</p>
                      </Link>
                      <Link to="/topic">
                        <p>#Tag</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="video-card-double">
                {dummyVideodata.slice(0, 3).map((vid) => (
                  <div className="video-slider-vid-card-container vid-card-margin2">
                    <div className="video-slider-video-card">
                      <VidCard titleIcon />
                    </div>
                    <div className="vid-card-subTexts">
                      <Link to="/individualgroundwork">
                        <p>Details</p>
                      </Link>
                      <Link to="/topic">
                        <p>#Tag</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Carousel>
        </section>
      </div>
    );
  }
  return (
    <>
      <h2 className="video-slider-heading container">{heading}</h2>
      <section className="video-slider container-fluid">
        <Carousel
          breakPoints={breakPoints2}
          className="video-slider-carousel"
          renderArrow={slider2Arrow}
        >
          {dummyVideodata.slice(0, 7).map((vid) => (
            <div className="video-slider-vid-card-container">
              <div className="video-slider-video-card">
                <VidCard titleIcon />
              </div>
              <div className="vid-card-subTexts">
                <Link to="/individualgroundwork">
                  <p>Details</p>
                </Link>
                <Link to="/topic">
                  <p>#Tag</p>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default VideoCardSlider;
