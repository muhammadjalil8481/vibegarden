import React from "react";
import ContainerSection from "../Container";
import VidCard from "../VidCard";
import images from "../../constants/images";
import FormGroupAuth from "../FormInputAuth";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const FourColumnVideoLayout = ({
  leftHeading,
  leftPara,
  noPara,
  whiteHeading,
  whitePara,
  heading = "Heading Here",
  whiteLink,
  whiteSubText,
  searchInput,
  secondRow,
  dataArray = [],
  seeAllOnClick = () => null,
  backLink,
}) => {
  const navigate = useNavigate();
  return (
    <section className="fcvl">
      <ContainerSection isFluid={"yes"}>
        <div className="container fcvl-container ">
          <h2
            className={`fcvl-heading ${!leftHeading && "text-center"} ${
              leftHeading && "fcvl-left-heading"
            } ${whiteHeading && "color-white"}`}
          >
            {heading}
          </h2>
          {searchInput && (
            <div className="fcvl-search-input-container">
              <div className="fcvl-search-input">
                <FormGroupAuth noLabel placeHolder="Search..." icon />
                <div className="fcvl-search-input-icon-container">
                  <FilterAltIcon fontSize="large" sx={{ color: green[700] }} />
                </div>
              </div>
            </div>
          )}
          {!noPara && (
            <p
              className={`fcvl-para ${
                !leftPara && "text-center center-align"
              }  ${whitePara && "color-white"} ${
                leftPara && "fcvl-left-para "
              }`}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kas
            </p>
          )}
          <div className="fcvl-row row">
            {dataArray.map((video, index) => (
              <div className="col-lg-3 fcvl-col" key={`video${index}`}>
                <VidCard
                  titleIcon
                  blackTitle
                  title={video.title}
                  time={video.duration}
                />
                <div className="subtext-container">
                  <p
                    className={`subtext ${whiteSubText && "color-white"}`}
                    onClick={() =>
                      navigate("/individualGroundWork", {
                        state: {
                          // title: video.title,
                          // desc: video.description,
                          // image: video.image,
                          // video: video.video,
                          ...video,
                        },
                      })
                    }
                  >
                    {video.subTitle1}
                  </p>
                  <p className={`subtext ${whiteSubText && "color-white"}`}>
                    {video.subTitle2}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {secondRow && (
            <div className="fcvl-row row">
              <div className="col-lg-3 fcvl-col">
                <VidCard titleIcon blackTitle />
                <div className="subtext-container">
                  <p className={`subtext ${whiteSubText && "color-white"}`}>
                    Lorem
                  </p>
                  <p className={`subtext ${whiteSubText && "color-white"}`}>
                    Lorem
                  </p>
                </div>
              </div>
              <div className="col-lg-3 fcvl-col">
                <VidCard titleIcon blackTitle image={images.placeholder1} />
                <div className="subtext-container">
                  <p className={`subtext ${whiteSubText && "color-white"}`}>
                    Lorem
                  </p>
                  <p className={`subtext ${whiteSubText && "color-white"}`}>
                    Lorem
                  </p>
                </div>
              </div>
              <div className="col-lg-3 fcvl-col">
                <VidCard titleIcon blackTitle image={images.placeholder2} />
                <div className="subtext-container">
                  <p className={`subtext ${whiteSubText && "color-white"}`}>
                    Lorem
                  </p>
                  <p className={`subtext ${whiteSubText && "color-white"}`}>
                    Lorem
                  </p>
                </div>
              </div>
              <div className="col-lg-3 fcvl-col" image={images.placeholder6}>
                <VidCard titleIcon blackTitle />
                <div className="subtext-container">
                  <p className={`subtext ${whiteSubText && "color-white"}`}>
                    Lorem
                  </p>
                  <p className={`subtext ${whiteSubText && "color-white"}`}>
                    Lorem
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* <Link to={`${seeAllDestination}`}> */}
          {!backLink && (
            <h5
              className={`fcvl-link ${whiteLink && "color-white"}`}
              onClick={() => seeAllOnClick()}
            >
              {`See All >`}
            </h5>
          )}
          {backLink && (
            <h5
              className={`fcvl-link ${whiteLink && "color-white"}`}
              onClick={() => seeAllOnClick()}
            >
              {`< Back To All GroundWork`}
            </h5>
          )}
          {/* </Link> */}
        </div>
      </ContainerSection>
    </section>
  );
};

export default FourColumnVideoLayout;
