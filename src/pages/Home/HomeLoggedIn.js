// Library Imports
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Custom Imports
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
import ButtonFilled from "../../components/Button/ButtonFilled";
import { useHomepageLI } from "../../api/pages";
import Loader from "../../components/Modal/loader";
import AlertModal from "../../components/Modal/AlertModal";

const HomeLoggedIn = () => {
  const [error, setError] = useState(false);
  const { data, isLoading, error: err } = useHomepageLI();
  const homedata = data?.data?.data;
  console.log("homeloggedin", homedata);

  useEffect(() => {
    if (err) {
      console.log("err", err);
      if (err.message === "Network Error") return setError("Network Error");
      const data = err?.response?.data;
      setError(data?.message);
    }
  }, [err]);
  return (
    <div className="remove-overflow">
      {isLoading && <Loader />}
      <AlertModal state={error} message={error} setState={setError} />
      <NavBar />
      <div className="bg-gradient-blueflowers">
        <Hero
          quote={homedata?.mainQuotation}
          // quote1stPart={`"You can put all the flowers`}
          // quote2ndPart={`but you can't stop the spring"`}
          // author="P.Neauda"
          // heading="Welcome Back, You"
        />
      </div>
      <WhiteImageInfoSection2 freshBlooms data={homedata?.freshBloomsInfo} />
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
          data={homedata?.featuredTools}
          whiteHeading
          whitePara
          recentVibes
          idgwHeading="Tools Tag Video"
          tool
        />
      </div>
      <GroundWorkEssentials
        heading={homedata?.groundworkEssentials?.heading}
        text={homedata?.groundworkEssentials?.text}
        gwVideo1={homedata?.gwVideo1}
        gwVideo2={homedata?.gwVideo2}
        gwVideo3={homedata?.gwVideo3}
      />
      <LineBreak />
      <FeaturedTools
        leftHeading
        heading={homedata?.recentVibesHeading}
        noPara
        recentVibes
        idgwHeading="Recent Vibes Video"
        toolDummy
      />
      <HowItWorks data={homedata} />
      <BrowseByTags heading={homedata?.browseByTagsHeading} />
      <div className="bg-gradient-pinkMask ">
        <WhiteImageInfoSection
          heading={homedata?.goDeeperVibeGuides?.heading}
          desc={homedata?.goDeeperVibeGuides?.text}
          btnText={homedata?.goDeeperVibeGuides?.buttonText}
          videoDuration={homedata?.goDeeperVibeGuides?.videoDuration}
          videoImage={homedata?.goDeeperVibeGuides?.thumbnail}
          videoLink={homedata?.goDeeperVibeGuides?.video}
          noHeading
          topHeading
          videoCardWidth="350px"
          height="270px"
          homeLogged
          link="/guides"
        />
      </div>
      <div className="remove-overflow">
        <div className="bg-gradient-greenMask">
          <WhiteImageInfoSection
            heading={homedata?.featuredTeacher?.heading}
            desc={homedata?.featuredTeacher?.text}
            btnText={homedata?.featuredTeacher?.buttonText}
            videoDuration={homedata?.featuredTeacher?.videoDuration}
            videoImage={homedata?.featuredTeacher?.thumbnail}
            videoLink={homedata?.featuredTeacher?.video}
            noHeading
            topHeading
            videoCardWidth="350px"
            height="270px"
            orderReverse
            rightAlignBtn
            rightAlignHeading
            whiteHeading
            whitePara
            link="/guides"
          />
        </div>
      </div>
      <div className="my70">
        <LineBreak />
      </div>
      <BigImageSection data={homedata?.vibeBloom} />
      <Footer />
    </div>
  );
};

export default HomeLoggedIn;
