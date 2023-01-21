import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/Navbar";
import FourColumnVideoLayout from "../../components/FourColumnVideoLayout.js";
import Footer from "../../components/Footer";
import { dummyVideodata } from "../../constants/dummyVideoData";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const GroundWorkCategory = () => {
  const categories = useSelector(
    (state) => state.groundWorkCategories.categories
  );
  const { id } = useParams();
  const filteredCat = categories.find((cat) => cat._id === id);
  return (
    <div className="fcvl-caller">
      <NavBar />
      <FourColumnVideoLayout
        searchInput
        heading={filteredCat.title}
        desc={filteredCat.description}
        dataArray={filteredCat.videos}
        backLink
        linkDestination="/groundwork"
        groundWork
        searchState="groundwork"
        searchCatState={[filteredCat?.title?.split(" ").join("").toLowerCase()]}
      />
      <Footer />
    </div>
  );
};

export default GroundWorkCategory;
