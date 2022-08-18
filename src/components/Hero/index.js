import React from "react";
import { Container } from "react-bootstrap";
import images from "../../constants/images";

const sectionStyle = {
  backgroundImage: `url(${images.hero})`,
  //   backgroundColor: "red",
};
const Hero = () => {
  return (
    <Container fluid className="hero text-center px-4  " style={sectionStyle}>
      <h2 className="hero-quote">
        “There is a sun within every person;
        <br /> the you we call campanion.”
      </h2>
      <p className="hero-author">– Thich Nhat Hahn</p>
      <h1 className="hero-heading">Hi, You</h1>
    </Container>
  );
};

export default Hero;
