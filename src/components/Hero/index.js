import { red } from "@mui/material/colors";
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
  greenColor,
  shortPadding,
  reduceFont,
}) => {
  return (
    <Container
      fluid
      className={`hero text-center px-4 ${shortPadding && "short-padding"}`}
    >
      <h2
        className={`hero-quote ${greenColor && "text-green"} ${
          reduceFont && "hero-font-quote"
        }`}
      >
        {quote1stPart}
      </h2>
      <h2
        className={`hero-quote ${greenColor && "text-green"} ${
          reduceFont && "hero-font-quote"
        }`}
      >
        {quote2ndPart}
      </h2>
      <p
        className={`hero-author ${greenColor && "text-green"} ${
          reduceFont && "hero-font-author"
        }`}
      >
        {author}
      </p>
      <h1
        className={`hero-heading ${greenColor && "text-green"} ${
          reduceFont && "hero-font-heading"
        }`}
      >
        {heading}
      </h1>
    </Container>
  );
};

export default Hero;
