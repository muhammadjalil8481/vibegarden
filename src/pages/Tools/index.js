import React, { useState, useEffect } from "react";
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import GradientImageInfoSection from "../../components/GradientImageInfoSection";
import FourColumnVideoLayout from "../../components/FourColumnVideoLayout.js";
import BrowseByTags from "../../components/BrowseByTags";
import Footer from "../../components/Footer";
import { dummyVideodata } from "../../constants/dummyVideoData";
import { useDispatch, useSelector } from "react-redux";
import { apiRequest } from "../../api/axios";
import { setToolCategories } from "../../redux/slices/toolCategories";
import { setLoading } from "../../redux/slices/loadingSlice";
import AlertModal from "../../components/Modal/AlertModal";

const Tools = () => {
  const array8 = dummyVideodata.slice(0, 8);
  const [error, setError] = useState(false);
  const categories = useSelector((state) => state.toolCategories.categories);
  const dispatch = useDispatch();
  const setCategories = async () => {
    try {
      dispatch(setLoading(true));
      const { data } = await apiRequest.get("/getAllToolCategories");
      dispatch(setToolCategories(data.data));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));
      console.log(err);
    }
  };
  useEffect(() => {
    setCategories();
  }, []);

  return (
    <div className="tools">
      <AlertModal state={error} message={error} setState={setError} />;
      <NavBar />
      <div className="bg-lightFlower ">
        <Hero
          quote2ndPart="lorem ipsum lorem ipsum.”"
          quote1stPart="“Lorem ipsum lorem ipsum lorem;"
          greenColor
          author="– Lorem Ipsum Dolar"
          heading="Lorem Ipsum"
          topPadding
        />
      </div>
      <div className="bg-gradient-green">
        <GradientImageInfoSection
          videoCardLeftMargin={"30px"}
          heading="What Tools?"
          noButton
        />
      </div>
      {categories &&
        categories.map((cat, index) => {
          return (
            <div className={`${index % 2 === 1 && "bg-gradient-pinkMask"}`}>
              <FourColumnVideoLayout
                searchInput={index === 0 ? true : false}
                leftHeading={index === 0 ? true : false}
                leftPara={index === 0 ? true : false}
                dataArray={cat.videos.slice(0, 8) || array8}
                heading={cat.title}
                desc={cat?.description}
                linkDestination={`/toolscategory/${cat._id}`}
                tools
                searchState="tools"
              />
            </div>
          );
        })}
      {!categories &&
        <div>
          <FourColumnVideoLayout
            searchInput
            leftHeading
            leftPara
            dataArray={array8}
            heading="Tools For Light"
            linkDestination="/toolsforconnecting"
            tools
            searchState="tools"
          />
          <div className="bg-gradient-pinkMask">
            <FourColumnVideoLayout
              dataArray={array8}
              heading={`Tools For Worker & Shadow`}
              linkDestination="/toolsforworker"
              tools
            />
          </div>
          <FourColumnVideoLayout
            dataArray={array8}
            heading={`Tools For Connection`}
            linkDestination="/toolsforconnection"
            tools
          />
        </div>
      }
      <BrowseByTags />
      <Footer />
    </div>
  );
};

export default Tools;
