import React from "react";
import ContainerSection from "../Container";
import VidCard from "../VidCard";
import images from "../../constants/images";
import FormGroupAuth from "../FormInputAuth";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { green } from "@mui/material/colors";
import { useNavigate, Link } from "react-router-dom";

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
  linkDestination = "#",
  backText = "Ground Work",
  linkTo = "/",
  groundWork,
  tools,
}) => {
  const navigate = useNavigate();
  return (
    <section className="fcvl">
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
              {/* <div className="fcvl-search-input-icon-container"> */}
              {/* <FilterAltIcon fontSize="large" sx={{ color: green[700] }} /> */}
              {/* </div> */}
            </div>
          </div>
        )}
        {!noPara && (
          <p
            className={`fcvl-para ${!leftPara && "text-center center-align"}  ${
              whitePara && "color-white"
            } ${leftPara && "fcvl-left-para "}`}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kas
          </p>
        )}
        <div className="fcvl-row row">
          {dataArray.map((video, index) => (
            <div className="col-lg-3 col-sm-6 fcvl-col" key={`video${index}`}>
              <div className="fcvl-col-video">
                {groundWork || tools ? (
                  <VidCard
                    titleIcon
                    blackTitle
                    title={video.title}
                    time={video.duration}
                    groundwork={groundWork ? true : false}
                    tool={tools ? true : false}
                    recentVibes={groundWork || tools ? true : false}
                    linkVideo={
                      !tools ? `/groundwork/family-of-light` : `/tools/tonglen`
                    }
                  />
                ) : (
                  <VidCard
                    titleIcon
                    blackTitle
                    title={video.title}
                    time={video.duration}
                    groundwork={groundWork ? true : false}
                    tool={tools ? true : false}
                  />
                )}
              </div>
              <div className="subtext-container">
                <Link
                  to={!tools ? `/groundwork/family-of-light` : `/tools/tonglen`}
                  state={{ tool: tools ? true : false }}
                >
                  <p className={`subtext ${whiteSubText && "color-white"}`}>
                    {`Details`}
                  </p>
                </Link>
                <p className={`subtext ${whiteSubText && "color-white"}`}>
                  {`#Tag`}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link to={`${linkDestination}`}>
          {!backLink && (
            <h5
              className={`fcvl-link ${whiteLink && "color-white"}`}
              // onClick={() => seeAllOnClick()}
            >
              {`See All >`}
            </h5>
          )}
          {backLink && (
            <h5 className={`fcvl-link ${whiteLink && "color-white"}`}>
              {`< Back To All ${backText}`}
            </h5>
          )}
        </Link>
      </div>
    </section>
  );
};

export default FourColumnVideoLayout;
