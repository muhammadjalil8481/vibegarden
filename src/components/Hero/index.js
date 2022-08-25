import React from "react";
import { Container } from "react-bootstrap";
import images from "../../constants/images";

const sectionStyle = {
  backgroundImage: `url(${images.hero})`,
  //   backgroundColor: "red",
};
const Hero = ({
  quote = "“There is a sun within every person; the you we call campanion.”",
  author = "– Thich Nhat Hahn",
  heading = "Hi, You",
}) => {
  return (
    <Container fluid className="hero text-center px-4  ">
      <h2 className="hero-quote">
        “There is a sun within every person;
        <br /> the you we call campanion.”
      </h2>
      <p className="hero-author">{author}</p>
      <h1 className="hero-heading">{heading}</h1>
    </Container>
  );
};

export default Hero;
