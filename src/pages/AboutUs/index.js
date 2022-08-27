import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import WhiteImageInfoSection from "../../components/WhiteImageInfoSection.js";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className="au-top-section">
        <h2 className="au-heading">ABOUT US</h2>
        <p className="au-para">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
      </div>
      <div className="au-wiis-reverse">
        <WhiteImageInfoSection orderReverseWithButton noButton />
      </div>
      <div className="au-wiis">
        <WhiteImageInfoSection noButton />
      </div>
      <div className="au-wiis-reverse">
        <WhiteImageInfoSection orderReverseWithButton noButton />
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
