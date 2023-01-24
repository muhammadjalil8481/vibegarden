import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import GradientImageInfoSection from "../../components/GradientImageInfoSection";
import FourColumnVideoLayout from "../../components/FourColumnVideoLayout.js";
import BrowseByTags from "../../components/BrowseByTags";
import Footer from "../../components/Footer";
import { dummyVideodata } from "../../constants/dummyVideoData";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apiRequest } from "../../api/axios";
import { setGWCategories } from "../../redux/slices/groundWorkCategories";
import { setLoading } from "../../redux/slices/loadingSlice";
import AlertModal from "../../components/Modal/AlertModal";

const GroundWork = () => {
  const [error, setError] = useState(false);
  const array4 = dummyVideodata.slice(0, 4);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.groundWorkCategories.categories
  );
  const setCategories = async () => {
    try {
      dispatch(setLoading(true));
      const { data } = await apiRequest.get("/getAllGroundWorkCategories");
      console.log("data", data.data, categories);
      dispatch(setGWCategories(data.data));
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
    <div className="groundwork">
      <NavBar />
      <AlertModal state={error} message={error} setState={setError} />
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
      <div className="bg-gradient-pink">
        <GradientImageInfoSection
          videoCardLeftMargin={"30px"}
          noButton
          heading="Why Ground Work?"
        />
      </div>
      {categories &&
        categories?.map((cat, index) => {
          return (
            <div className={`${index === 1 ? "bg-gradient-greenMask" : ""}`}>
              <FourColumnVideoLayout
                heading={cat.title}
                desc={cat?.description}
                dataArray={cat?.videos?.slice(0, 4) || array4}
                linkDestination={`/groundworkcategory/${cat?._id}`}
                searchState="groundwork"
                searchInput={index === 0 ? true : false}
                whiteHeading={index === 1 ? true : false}
                whitePara={index === 1 ? true : false}
                whiteLink={index === 1 ? true : false}
                whiteSubText={index === 1 ? true : false}
                groundWork
              />
              {index !== 0 &&
                index !== 1 &&
                index !== categories.length - 1 && (
                  <div
                    style={{
                      backgroundColor: "green",
                      height: "1px",
                      width: "80%",
                      margin: "0 auto",
                    }}
                  ></div>
                )}
            </div>
          );
        })}
      {!categories && (
        <div>
          <FourColumnVideoLayout
            searchInput
            heading="Essentials"
            dataArray={array4}
            linkDestination="/essentials"
            groundWork
            searchState="groundwork"
          />
          <div className="bg-gradient-greenMask">
            <FourColumnVideoLayout
              whiteHeading
              whitePara
              whiteLink
              whiteSubText
              heading="Building Slocks"
              dataArray={array4}
              linkDestination="/buildingslocks"
              groundWork
            />
          </div>
          <FourColumnVideoLayout
            heading="Deeper Cuts"
            dataArray={array4}
            linkDestination="/deepercuts"
            groundWork
          />
          <div
            style={{
              backgroundColor: "green",
              height: "1px",
              width: "80%",
              margin: "0 auto",
            }}
          ></div>
          <FourColumnVideoLayout
            heading="Play"
            dataArray={array4}
            seeAllOnClick={() => navigate("/play")}
            linkDestination="/play"
            groundWork
          />
        </div>
      )}

      <BrowseByTags />
      <Footer />
    </div>
  );
};

export default GroundWork;
