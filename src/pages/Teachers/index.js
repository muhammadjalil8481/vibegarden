import React, { useState } from "react";
import NavBar from "../../components/Navbar";
import VidCard from "../../components/VidCard";
import GreenLineBreak from "../../components/GreenLineBreak";
import FormGroupAuth from "../../components/FormInputAuth";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { green } from "@mui/material/colors";
import TeacherInfo from "../../components/TeacherInfo";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Teachers = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <NavBar />
      <div className="teachers">
        <h2 className=" teahers-heading">teachers</h2>
        <section className="teachers-top container-lg">
          <div className="row teachers-row">
            <div className="col-lg-4  teachers-left-col">
              <VidCard />
            </div>
            <div className="col-lg-8  teachers-right-col">
              <p>
                Body copy style for white text on dark or gradient backgrounds
                (Medium Weight) Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Mauris placerat euismod porttitor. Nam nec
                mauris non magna facilisis volutpat ac sit amet nulla. Nullam
                vestibulum velit vitae sem commodo tempor. Sed dapibus, est non
                pulvinar fringilla, lorem libero laoreet erat, ac tristique elit
                nisl eu metus. Sed fermentum erat sit amet enim blandit, quis
                dictum nisi tempus. Etiam dui tellus, porttitor vitae rutrum a,
                ultrices pharetra nulla.
              </p>
            </div>
          </div>
        </section>
        <GreenLineBreak />
        <section className="container teacher-search">
          <FormGroupAuth
            noLabel
            placeHolder="Search..."
            icon
            value={searchValue}
            setValue={setSearchValue}
          />
          <div
            className="teachers-filter-icon"
            // onClick={() => console.log(searchValue)}
          >
            <FilterAltIcon fontSize="large" sx={{ color: green[700] }} />
          </div>
          {searchValue && (
            <div className="search-box">
              <Link to="/groundwork/family-of-light">
                <div className="search-box-container">
                  <div className="search-box-icon">#</div>
                  <div className="search-box-info">
                    <h5>Buddhism</h5>
                    <p>Topic Page</p>
                  </div>
                </div>
              </Link>
              <div className="search-box-container">
                <div className="search-box-icon">#</div>
                <div className="search-box-info">
                  <h5>Buddhism</h5>
                  <p>Topic Page</p>
                </div>
              </div>
              <div className="search-box-container">
                <div className="search-box-icon">#</div>
                <div className="search-box-info">
                  <h5>Buddhism</h5>
                  <p>Topic Page</p>
                </div>
              </div>
              <div className="search-box-container">
                <div className="search-box-icon">#</div>
                <div className="search-box-info">
                  <h5>Buddhism</h5>
                  <p>Topic Page</p>
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="teachers-info bg-lightGreen">
          <TeacherInfo tools />
        </section>
        <section className="teachers-info bg-lightPink">
          <TeacherInfo groundwork />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Teachers;
