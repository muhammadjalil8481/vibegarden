import React from "react";
import VidCard from "../../components/VidCard";
import { Link } from "react-router-dom";
import PinkIcon from "../../assets/images/pink-icon.svg";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaTrash } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const TopTools = () => {
  return (
    <>
      <NavBar />
      <div className="library-list container">
        <h1>Top Tools</h1>
        <div className="library-data">
          {new Array(5).fill(null).map((item) => {
            return (
              <div className="ld-item">
                <span className="ld-trash">
                  <FaTrash size={24} color="#1C5C2E" />
                </span>
                <div className="ld-item-video">
                  {/* <Link to="/tools/tonglen"> */}
                  <VidCard tool recentVibes linkVideo="/tools/tonglen" />
                  {/* </Link> */}
                </div>
                <div className="ld-item-info">
                  <div className="ld-item-info-textAndIcon">
                    <div className="ld-item-info-icon">
                      <img src={PinkIcon} alt="" />
                    </div>
                    <h3>Title</h3>
                  </div>
                  <p className="ld-item-info-desc">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero
                  </p>
                  <div className="ld-item-info-subtext">
                    <Link
                      to="/groundwork/family-of-light"
                      state={{ heading: "Fresh Blooms Video" }}
                    >
                      <p>Details</p>
                    </Link>
                    <Link to="/topic">
                      <p>#Tag</p>
                    </Link>
                    <div className="ld-item-rating">
                      <AiFillStar size={20} color="rgba(27, 91, 47, 1)" />
                      {/* <p className="ldir-line">-</p> */}
                      <p className="ldir-num">(4.7)</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TopTools;
