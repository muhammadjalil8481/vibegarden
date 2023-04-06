import React from "react";
import ContainerSection from "../Container";
import images from "../../constants/images";
import VideoIcon2nd from "../../assets/images/video-tag-icon.svg";
import VideoIcon from "../../assets/images/video-icon.svg";
import VidCard from "../VidCard";
import ButtonFilled from "../Button/ButtonFilled";
import { Link } from "react-router-dom";

const BigImageSection = ({ data }) => {
  return (
    <section className="bis text-center ">
      <ContainerSection isFluid={"yes"}>
        <div className="container bis-container ">
          <h2 className="bis-heading">{data?.heading}</h2>
          <p className="bis-para w-75">{data?.text}</p>
          {/* <Link to="/appdownload">
            <div className="mb-5">
              <ButtonFilled
                bgGradient={"yes"}
                text="Learn More"
                paddingXSmall
              />
            </div>
          </Link> */}
          <div className="bis-video-card">
            <VidCard
              image={data?.thumbnail}
              videoSrc={data?.video}
              time={data?.videoDuration}
            />
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default BigImageSection;
