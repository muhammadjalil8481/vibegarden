import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/Navbar";
import FourColumnVideoLayout from "../../components/FourColumnVideoLayout.js";
import Footer from "../../components/Footer";
import { dummyVideodata } from "../../constants/dummyVideoData";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ToolsCategory = () => {
  const categories = useSelector((state) => state.toolCategories.categories);
  const { id } = useParams();
  const filteredCat = categories.find((cat) => cat._id === id);
  return (
    <div className="fcvl-caller">
      <NavBar />
      <FourColumnVideoLayout
        searchInput
        heading={filteredCat?.title}
        dataArray={filteredCat.videos}
        desc={filteredCat.description}
        backLink
        linkDestination="/tools"
        backText="Tools"
        tools
        searchState="tools"
        searchCatState={[filteredCat?.title?.split(" ").join("").toLowerCase()]}
      />
      <Footer />
    </div>
  );
};

export default ToolsCategory;
