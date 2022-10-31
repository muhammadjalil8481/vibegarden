import React from "react";
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import WhiteImageInfoSection2 from "../../components/WhiteImageInfoSection2";
import FeaturedTools from "../../components/FeaturedTools/FeaturedTools";
import GroundWorkEssentials from "../../components/GroundWorkEssentials";
import LineBreak from "../../components/lineBreak";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import BrowseByTags from "../../components/BrowseByTags";
import WhiteImageInfoSection from "../../components/WhiteImageInfoSection.js";
import BigImageSection from "../../components/BigImageSection";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ButtonFilled from "../../components/Button/ButtonFilled";

const HomeLoggedIn = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="remove-overflow ">
      <NavBar />
      <div className="bg-gradient-blueflowers">
        <Hero
          quote1stPart={`"You can put all the flowers`}
          quote2ndPart={`but you can't stop the spring"`}
          author="P.Neauda"
          heading="Welcome Back, You"
        />
      </div>
      <WhiteImageInfoSection2 />
      <div className="resonance-line bg-gradient-pinkMask">
        <p>
          Check your resonance; from Buddhism to Quantum Physics, see which
          Topics you’ll vibe with most!
        </p>
        <Link to="/resonancefinder">
          <ButtonFilled
            paddingXSmall
            text="Try Resonance Finder"
            bgGradient="yes"
          />
        </Link>
      </div>
      <div className="bg-gradient-green homeloggedin-ft">
        <FeaturedTools
          whiteHeading
          whitePara
          recentVibes
          idgwHeading="Tools Tag Video"
        />
      </div>
      <GroundWorkEssentials />
      <LineBreak />
      <FeaturedTools
        leftHeading
        heading="Your Recent Vibes"
        noPara
        recentVibes
        idgwHeading="Recent Vibes Video"
      />
      <HowItWorks />
      <BrowseByTags />
      <div className="bg-gradient-pinkMask ">
        <WhiteImageInfoSection
          noHeading
          topHeading
          videoCardWidth="350px"
          height="270px"
          btnText="See More"
          homeLogged
          link="/guides"
        />
      </div>
      <div className="remove-overflow">
        <div className="bg-gradient-greenMask">
          <WhiteImageInfoSection
            noHeading
            topHeading
            videoCardWidth="350px"
            height="270px"
            orderReverse
            rightAlignBtn
            rightAlignHeading
            whiteHeading
            whitePara
            btnText="See More"
            link="/guides"
          />
        </div>
      </div>
      <div className="my70">
        <LineBreak />
      </div>
      <BigImageSection />
      <Footer />
    </div>
  );
};

export default HomeLoggedIn;
