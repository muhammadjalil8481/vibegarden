// Library Imports
import React, { useEffect, useState } from "react";
// Custom Imports
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import GradientImageInfoSection from "../../components/GradientImageInfoSection";
import WhiteImageInfoSection from "../../components/WhiteImageInfoSection.js";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import FourColumnInfoSection from "../../components/fourColumnInfoSection";
import LineBreak from "../../components/lineBreak";
import SampleTools from "../../components/SampleToolsSection";
import MoreVG from "../../components/MoreVGSection.js";
import StayInTouch from "../../components/StayInTouchSection";
import Footer from "../../components/Footer";
import AlertModal from "../../components/Modal/AlertModal";
// Redux Slices
import { useHomepageLO } from "../../api/pages";
import Loader from "../../components/Modal/loader";

const HomePage = () => {
  // Hooks
  // States
  const [error, setError] = useState(false);
  // OnClick Handlers
  const { data, isLoading, error: err } = useHomepageLO();
  const homedata = data?.data?.data;

  // UseEffect
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
      <NavBar />
      {isLoading && <Loader />}
      <AlertModal state={error} message={error} setState={setError} />
      <div
        className="bg-gradient-blueflowers"
        style={{
          backgroundImage: `url(${homedata?.headerImage})` || "blue",
        }}
      >
        <Hero author="– Thich Nhat Hahn" quote={homedata?.mainQuotation} />
      </div>
      <div className="bg-gradient-pink">
        <GradientImageInfoSection
          heading={
            homedata?.embodyingYourFullness?.heading ||
            "Embodying Your Fullness"
          }
          desc={homedata?.embodyingYourFullness?.text || "fullness para"}
          videoCardLeftMargin={"30px"}
          buttonText={
            homedata?.embodyingYourFullness?.buttonText || "Explorer Tools"
          }
          videoLink={homedata?.embodyingYourFullness?.video}
          videoImage={homedata?.embodyingYourFullness?.thumbnail}
          videoDuration={homedata?.embodyingYourFullness?.videoDuration}
          noTitle
          btnLink="/tools"
        />
      </div>
      <WhiteImageInfoSection
        mainHeading={
          homedata?.comingHomeTogether?.heading || "Coming Home Together"
        }
        desc={
          homedata?.comingHomeTogether?.text || "coming home toghether text"
        }
        videoLink={homedata?.comingHomeTogether?.video}
        videoImage={homedata?.comingHomeTogether?.thumbnail}
        videoDuration={homedata?.comingHomeTogether?.videoDuration}
        noTitle
        btnText={homedata?.comingHomeTogether?.buttonText || "Join Us"}
        link="/join-us"
      />
      <HowItWorks data={homedata} />
      <FourColumnInfoSection data={homedata} />
      <LineBreak />
      <SampleTools data={homedata} />
      <MoreVG data={homedata} />
      <div className="bg-gradient-pinkMask">
        <StayInTouch />'
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
