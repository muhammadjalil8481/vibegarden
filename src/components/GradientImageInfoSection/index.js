import React from "react";
import ContainerSection from "../Container";
import ButtonFilled from "../Button/ButtonFilled";
import images from "../../constants/images";
import VideoCard from "../VideoCard/VideoCard";
import VidCard from "../VidCard";
import { Link } from "react-router-dom";

const para = `Body copy style for white text on dark or gradient backgrounds
(Medium Weight) Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Mauris placerat euismod porttitor. Nam nec
mauris non magna facilisis volutpat ac sit amet nulla. Nullam
vestibulum velit vitae sem commodo tempor. Sed dapibus, est non
pulvinar fringilla, lorem libero laoreet erat, ac tristique elit
nisl eu metus. Sed fermentum erat sit amet enim blandit, quis
dictum nisi tempus. Etiam dui tellus, porttitor vitae rutrum a,
ultrices pharetra nulla.`;

const GradientImageInfoSection = ({
  button,
  videoCardLeftMargin,
  videoCardRightMargin,
  noButton,
  heading = "Heading",
  desc = para,
  buttonText = "Button",
  btnLink = "#",
}) => {
  return (
    <section className="giid">
      {/* <ContainerSection isFluid={"yes"}> */}
      <div class="container giid-container py80">
        <div class="row giid-row">
          <div class="col-md-6 giid-col giid-left-col">
            {/* <h1>Left side</h1> */}
            <h2 className="giid-heading ">{heading}</h2>
            <p className="white-text section-text mt-2 mb-5">{desc}</p>
            {!noButton && (
              <Link to={btnLink}>
                <div className="giid-btn-container">
                  <ButtonFilled
                    text={buttonText}
                    paddingYSmall
                    padXResponsive
                  />
                </div>
              </Link>
            )}
          </div>
          <div class="col-sm-6 giid-col giid-right-col">
            <div className="giid-vid-card">
              <VidCard image={images.placeholder2} title="Title" time="3:15" />
            </div>
          </div>
        </div>
      </div>
      {/* </ContainerSection> */}
    </section>
  );
};

export default GradientImageInfoSection;
