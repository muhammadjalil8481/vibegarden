import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import VidCard from "../../components/VidCard";
import { Link } from "react-router-dom";
import { dummyVideodata } from "../../constants/dummyVideoData";
import { useLocation } from "react-router-dom";

const VideoCardSlider = ({
  heading = "Heading",
  data,
  twoRows,
  twoRowsFour,
  twoRowsThree,
  recentVibes,
  tools,
  groundwork,
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
  const { state, pathname } = useLocation();
  const route = pathname.slice(0, pathname.lastIndexOf("/"));

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
            {data?.map((video, index) => {
              return (
                <div className="video-card-double-slider">
                  {video?.map((vid) => {
                    return (
                      <div className="video-card-double">
                        {vid?.map((vd) => {
                          return (
                            <div className="video-slider-vid-card-container vid-card-margin">
                              <div className="video-slider-video-card">
                                <div className="video-slider-video-card">
                                  <VidCard
                                    title={vd?.title}
                                    image={vd?.thumbnail}
                                    time={vd?.videoDuration}
                                    titleIcon
                                    recentVibes={recentVibes ? true : false}
                                    tool={tools ? true : false}
                                    groundwork={groundwork ? true : false}
                                    linkVideo="/tools/tonglen"
                                  />
                                </div>
                              </div>

                              <div className="vid-card-subTexts">
                                {/* <Link to="/groundwork/family-of-light">
                                  <p>Details</p>
                                </Link>
                                <Link to="/topic">
                                  <p>#Tag</p>
                                </Link> */}
                                {vd?.tags?.map((tag) => {
                                  return (
                                    <Link to={`/topic/${tag?._id}`}>
                                      <p className={`subtext `}>{tag?.name}</p>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
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
                      {tools && (
                        <div className="video-slider-video-card">
                          <VidCard
                            titleIcon
                            recentVibes={recentVibes ? true : false}
                            tool={tools ? true : false}
                            groundwork={groundwork ? true : false}
                            linkVideo="/tools/tonglen"
                          />
                        </div>
                      )}
                      {groundwork && (
                        <div className="video-slider-video-card">
                          <VidCard
                            titleIcon
                            recentVibes={recentVibes ? true : false}
                            tool={tools ? true : false}
                            groundwork={groundwork ? true : false}
                            linkVideo="/groundWork/family-of-light"
                          />
                        </div>
                      )}
                    </div>
                    <div className="vid-card-subTexts">
                      <Link to="/groundwork/family-of-light">
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
                      {tools && (
                        <div className="video-slider-video-card">
                          <VidCard
                            titleIcon
                            recentVibes={recentVibes ? true : false}
                            tool={tools ? true : false}
                            groundwork={groundwork ? true : false}
                            linkVideo="/tools/tonglen"
                          />
                        </div>
                      )}
                      {groundwork && (
                        <div className="video-slider-video-card">
                          <VidCard
                            titleIcon
                            recentVibes={recentVibes ? true : false}
                            tool={tools ? true : false}
                            groundwork={groundwork ? true : false}
                            linkVideo="/groundWork/family-of-light"
                          />
                        </div>
                      )}
                    </div>
                    <div className="vid-card-subTexts">
                      <Link to="/groundwork/family-of-light">
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
                      {tools && (
                        <div className="video-slider-video-card">
                          <VidCard
                            titleIcon
                            recentVibes={recentVibes ? true : false}
                            tool={tools ? true : false}
                            groundwork={groundwork ? true : false}
                            linkVideo="/tools/tonglen"
                          />
                        </div>
                      )}
                      {groundwork && (
                        <div className="video-slider-video-card">
                          <VidCard
                            titleIcon
                            recentVibes={recentVibes ? true : false}
                            tool={tools ? true : false}
                            groundwork={groundwork ? true : false}
                            linkVideo="/groundWork/family-of-light"
                          />
                        </div>
                      )}
                    </div>
                    <div className="vid-card-subTexts">
                      <Link to="/groundwork/family-of-light">
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
                      {tools && (
                        <div className="video-slider-video-card">
                          <VidCard
                            titleIcon
                            recentVibes={recentVibes ? true : false}
                            tool={tools ? true : false}
                            groundwork={groundwork ? true : false}
                            linkVideo="/tools/tonglen"
                          />
                        </div>
                      )}
                      {groundwork && (
                        <div className="video-slider-video-card">
                          <VidCard
                            titleIcon
                            recentVibes={recentVibes ? true : false}
                            tool={tools ? true : false}
                            groundwork={groundwork ? true : false}
                            linkVideo="/groundWork/family-of-light"
                          />
                        </div>
                      )}
                    </div>
                    <div className="vid-card-subTexts">
                      <Link to="/groundwork/family-of-light">
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
          {data &&
            data?.slice(0, 7).map((vid) => {
              return (
                <div className="video-slider-vid-card-container">
                  <div className="video-slider-video-card">
                    <VidCard
                      titleIcon
                      recentVibes={recentVibes ? true : false}
                      tool={vid?.type === "tool" ? true : false}
                      groundwork={vid?.type === "groundwork" ? true : false}
                      linkVideo={`/${
                        vid?.type === "tool" ? "tools" : "groundWork"
                      }/${vid.title}`}
                      time={vid?.videoDuration}
                      image={vid?.thumbnail}
                      title={vid?.title}
                    />
                  </div>
                  <div className="vid-card-subTexts">
                    {vid?.tags?.map((tag) => {
                      return (
                        <Link to="/topic">
                          <p>{tag?.name}</p>
                        </Link>
                      );
                    })}
                    {/* <Link to="/topic">
                      <p>Details</p>
                    </Link>
                    <Link to="/topic">
                      <p>#Tag</p>
                    </Link> */}
                  </div>
                </div>
              );
            })}

          {!data &&
            dummyVideodata.slice(0, 7).map((vid) => (
              <div className="video-slider-vid-card-container">
                {tools && (
                  <div className="video-slider-video-card">
                    <VidCard
                      titleIcon
                      recentVibes={recentVibes ? true : false}
                      tool={tools ? true : false}
                      groundwork={groundwork ? true : false}
                      linkVideo="/tools/tonglen"
                    />
                  </div>
                )}
                {groundwork && (
                  <div className="video-slider-video-card">
                    <VidCard
                      titleIcon
                      recentVibes={recentVibes ? true : false}
                      tool={tools ? true : false}
                      groundwork={groundwork ? true : false}
                      linkVideo="/groundWork/family-of-light"
                    />
                  </div>
                )}
                {!tools && !groundwork && (
                  <div className="video-slider-video-card">
                    <VidCard
                      titleIcon
                      recentVibes={recentVibes ? true : false}
                      // tool={tools ? true : false}
                      // groundwork={groundwork ? true : false}
                      // linkVideo="/groundWork/family-of-light"
                    />
                  </div>
                )}
                <div className="vid-card-subTexts">
                  <Link to="/groundwork/family-of-light">
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
