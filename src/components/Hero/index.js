import React from "react";
import { Container } from "react-bootstrap";
import images from "../../constants/images";

const sectionStyle = {
  backgroundImage: `url(${images.hero})`,
  //   backgroundColor: "red",
};
const Hero = ({
  quote1stPart = "First Part",
  quote2ndPart = "",
  author = "Author Name",
  heading = "Hi, You",
}) => {
  return (
    <Container fluid className="hero text-center px-4  ">
      <h2 className="hero-quote">{quote1stPart}</h2>
      <h2 className="hero-quote">{quote2ndPart}</h2>
      <p className="hero-author">{author}</p>
      <h1 className="hero-heading">{heading}</h1>
    </Container>
  );
};

export default Hero;
