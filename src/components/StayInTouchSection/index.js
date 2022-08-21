import React from "react";
import { Container } from "react-bootstrap";
import images from "../../constants/images";
import ButtonFilled from "../Button/ButtonFilled";

const sectionStyle = {
  backgroundImage: `url(${images.pinkMask})`,
  //   backgroundColor: "red",
};
const StayInTouch = () => {
  return (
    <Container
      fluid
      className="sit text-center px-4 py-5 "
      style={sectionStyle}
    >
      <h2 className="sit-heading">Want To Stay In Touch</h2>
      <p className="sit-para">
        Default body copy style for text on white / light color backgrounds
        (Regular weight). Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Mauris placerat euismod porttitor.
      </p>
      <input
        type={"email"}
        placeholder="Enter your email address"
        className="sit-input"
      />
      <ButtonFilled text="Subscribe" bgGradient="yes" paddingX="60px" />
    </Container>
  );
};

export default StayInTouch;
