import React from "react";
import VideoIcon2nd from "../../assets/images/video-tag-icon.svg";
import images from "../../constants/images";
import VideoIcon from "../../assets/images/video-icon.svg";
import PinkIcon from "../../assets/images/pink-icon.svg";
import ButtonFilled from "../../components/Button/ButtonFilled";
import VidCard from "../VidCard";
import { Link, useNavigate } from "react-router-dom";

const ThreeColumnWhiteVideoInfoLayout = ({
  title1 = "Title1",
  title2 = "Title2",
  title3 = "Title3",
  noRedirect,
  groundWork,
  gwVideo1,
  gwVideo2,
  gwVideo3,
}) => {
  const navigate = useNavigate();
  return (
    <div className="container-lg tcwvil">
      <div className="row tcwvil-row">
        <div className="col-md-4 tcwvil-card-container">
          <div className="card tcwvil-card">
            <div className="tcwvil-titleAndIcon">
              <div className="tcwvil-icon">
                <img src={PinkIcon} />
              </div>
              <h5 className="tcwvil-title">{gwVideo1?.heading}</h5>
            </div>
            <p className="tcwvil-para">{gwVideo1?.text}</p>
            <div className="tcwvil-video">
              {!noRedirect ? (
                <VidCard
                  image={gwVideo1?.thumbnail}
                  videoSrc={gwVideo1?.video}
                  time={gwVideo1?.videoDuration}
                  groundwork={groundWork ? true : false}
                />
              ) : (
                <VidCard
                  image={gwVideo1?.thumbnail}
                  videoSrc={gwVideo1?.video}
                  time={gwVideo1?.videoDuration}
                  recentVibes
                  groundwork={groundWork ? true : false}
                  linkVideo="/groundwork/family-of-light"
                />
              )}
            </div>
            <div className="tcwvil-subtext-container">
              <Link
                to="/groundwork/family-of-light"
                state={{ heading: title1 }}
              >
                <p className="tcwvil-subtext">Details</p>
              </Link>
              <Link to="/topic">
                <p className="tcwvil-subtext">#Tag</p>
              </Link>
            </div>
            <Link to="/groundwork/family-of-light" state={{ heading: title1 }}>
              <div className="tcwvil-btn">
                <ButtonFilled
                  text={gwVideo1?.buttonText}
                  bgGradient={"yes"}
                  paddingX
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4  tcwvil-card-container">
          <div className="card tcwvil-card">
            <div className="tcwvil-titleAndIcon">
              <div className="tcwvil-icon">
                <img src={PinkIcon} />
              </div>
              <h5 className="tcwvil-title">{gwVideo2?.heading}</h5>
            </div>
            <p className="tcwvil-para">{gwVideo2?.text}</p>
            <div className="tcwvil-video">
              {!noRedirect ? (
                <VidCard
                  image={gwVideo2?.thumbnail}
                  videoSrc={gwVideo2?.video}
                  time={gwVideo2?.videoDuration}
                  groundwork={groundWork ? true : false}
                />
              ) : (
                <VidCard
                  image={gwVideo2?.thumbnail}
                  videoSrc={gwVideo2?.video}
                  time={gwVideo2?.videoDuration}
                  recentVibes
                  groundwork={groundWork ? true : false}
                  linkVideo="/groundwork/family-of-light"
                />
              )}
            </div>
            <div className="tcwvil-subtext-container">
              <Link
                to="/groundwork/family-of-light"
                state={{ heading: title2 }}
              >
                <p className="tcwvil-subtext">Details</p>
              </Link>
              <Link to="/topic">
                <p className="tcwvil-subtext">#Tag</p>
              </Link>
            </div>
            <Link to="/groundwork/family-of-light" state={{ heading: title2 }}>
              <div className="tcwvil-btn">
                <ButtonFilled
                  text={gwVideo2?.buttonText}
                  bgGradient={"yes"}
                  paddingX
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4 tcwvil-card-container">
          <div className="card tcwvil-card border-0">
            <div className="tcwvil-titleAndIcon">
              <div className="tcwvil-icon">
                <img src={PinkIcon} />
              </div>
              <h5 className="tcwvil-title">{gwVideo3?.heading}</h5>
            </div>
            <p className="tcwvil-para">{gwVideo3?.text}</p>
            <div className="tcwvil-video">
              {!noRedirect ? (
                <VidCard
                  image={gwVideo3?.thumbnail}
                  videoSrc={gwVideo3?.video}
                  time={gwVideo3?.videoDuration}
                  groundwork={groundWork ? true : false}
                />
              ) : (
                <VidCard
                  image={gwVideo3?.thumbnail}
                  videoSrc={gwVideo3?.video}
                  time={gwVideo3?.videoDuration}
                  recentVibes
                  groundwork={groundWork ? true : false}
                  linkVideo="/groundwork/family-of-light"
                />
              )}
            </div>
            <div className="tcwvil-subtext-container">
              <Link
                to="/groundwork/family-of-light"
                state={{ heading: title3 }}
              >
                <p className="tcwvil-subtext">Details</p>
              </Link>
              <Link to="/topic">
                <p className="tcwvil-subtext">#Tag</p>
              </Link>
            </div>
            <Link to="/groundwork/family-of-light" state={{ heading: title3 }}>
              <div className="tcwvil-btn">
                <ButtonFilled
                  text={gwVideo3?.buttonText}
                  bgGradient={"yes"}
                  paddingX
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnWhiteVideoInfoLayout;
