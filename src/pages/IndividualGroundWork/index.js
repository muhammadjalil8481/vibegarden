import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useNavigate, Link, useLocation, useParams } from "react-router-dom";
import NavBar from "../../components/Navbar";
import pinkIcon from "../../assets/images/pink-icon.svg";
import VidCard from "../../components/VidCard";
import GreenLineBreak from "../../components/GreenLineBreak";
import StarIcon from "@mui/icons-material/Star";
import Comment from "../../components/Comments";
import GreenButton from "../../components/Button/GreenButton";
import ButtonOutline from "../../components/Button/ButtonOutline";
import Carousel from "react-elastic-carousel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { consts } from "react-elastic-carousel";
import images from "../../constants/images";
import Footer from "../../components/Footer";
import ButtonAndHeading from "../../components/HeadingAndButton.js";
import VideoCardSlider from "../../components/VideoCardSlider";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import res1 from "../../assets/images/reson1.svg";
import res2 from "../../assets/images/reson2.svg";
import res3 from "../../assets/images/reson3.svg";
import res4 from "../../assets/images/reson4.svg";
import { BsChevronUp, BsChevronDown, BsCheckLg } from "react-icons/bs";
import AlertModal from "../../components/Modal/AlertModal";
import {
  TiStarOutline,
  TiStarFullOutline,
  TiStarHalfOutline,
} from "react-icons/ti";
import { apiRequest } from "../../api/axios";
import { setLoading } from "../../redux/slices/loadingSlice";
import { useDispatch, useSelector } from "react-redux";

function myArrow({ type, onClick, isEdge }) {
  const pointer =
    type === consts.PREV ? (
      <ArrowBackIcon
        fontSize="large"
        color={!isEdge ? "success" : "disabled"}
      />
    ) : (
      <ArrowForwardIcon
        fontSize="large"
        color={!isEdge ? "success" : "disabled"}
      />
    );
  return (
    <button
      onClick={onClick}
      disabled={isEdge}
      className={`slider-btn ${
        type === consts.PREV ? "left-btn" : "right-btn"
      }`}
    >
      {pointer}
    </button>
  );
}

const IndividualGroundWork = ({ groundWork, freshBloom }) => {
  const dispatch = useDispatch();
  const [videoData, setVideoData] = useState();
  const { user } = useSelector((state) => state);
  const params = useParams().name.replaceAll("-", " ");
  const breakPoints = [{ width: 1, itemsToShow: 1 }];
  const { state, pathname } = useLocation();
  const route = pathname.slice(0, pathname.lastIndexOf("/"));
  const [commentsLength, setCommentsLength] = useState(0);
  const [commentText, setCommentText] = useState("");
  const [isFav, setIsFav] = useState(false);
  const [addTool, setAddTool] = useState(false);
  const [rating, setRating] = useState(0);
  const [error, setError] = useState(false);
  const [replyActive, setReplyActive] = useState(false);
  let videoType = route.replace("/", "");

  const getVideoData = async () => {
    try {
      dispatch(setLoading(true));
      const { data } = await apiRequest.get(
        `get${videoType === "tool" ? "Tool" : "GroundWork"}Video/${params}`
      );
      setVideoData(data.data);
      setCommentsLength(data.comments.length);
      dispatch(setLoading(false));
    } catch (err) {
      console.log("err", err);
      setError(err?.response?.data?.message);
      dispatch(setLoading(false));
    }
  };
  const createComment = async () => {
    try {
      if (!commentText.length) return setError("Please enter a comment");
      dispatch(setLoading(true));
      console.log("creating Comment");
      const newComment = await apiRequest.post("/createComment", {
        user: user.userId,
        postId: params,
        docModel: videoType === "tool" ? "ToolVideo" : "groundWorkVideo",
        comment: commentText,
      });
      console.log("done", newComment);
      setCommentsLength((comments) => comments + 1);
      setCommentText("");
      dispatch(setLoading(false));
    } catch (err) {
      console.log("err comment", err?.response?.data?.message);
      setError(err?.response?.data?.message);
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    getVideoData();
  }, [commentsLength]);

  return (
    <div className="individual-groundwork">
      <NavBar />
      <AlertModal state={error} message={error} setState={setError} />
      <section className="container-md idgw-1">
        <div className="idgw-1-headingAnIcon">
          <img src={pinkIcon} />
          <h2>{videoData?.title || "heading"}</h2>
        </div>
        <p className="idgw-1-desc">
          {videoData?.description ||
            `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kas`}
        </p>
        <div className="idgw-1-video">
          <VidCard
            title={videoData?.title || "Title"}
            time={videoData?.videoDuration || "00:00"}
            image={videoData?.thumbnail}
            videoSrc={videoData?.video || "//vjs.zencdn.net/v/oceans.mp4"}
          />
        </div>
        <div className="idgw-1-videoSubInfo">
          <div className="idgw-1-subtext">
            {videoData?.tags?.map((tag) => {
              return (
                <Link to={`/topic/${tag?._id}`}>
                  <p>{tag?.name || "Lorem"}</p>
                </Link>
              );
            })}
          </div>
          {/* {(groundWork || freshBloom) && ( */}
          <div className="idgw-1-icons">
            <div className="idgw-1-icon" onClick={() => setIsFav(!isFav)}>
              {!isFav ? (
                <BsHeart size={25} color="rgba(255, 84, 90, 1)" />
              ) : (
                <BsHeartFill size={25} color="rgba(255, 84, 90, 1)" />
              )}
            </div>
            {/* )} */}

            {route === "/tools" && (
              <div
                className="idgw-1-icon tool-icon"
                onClick={() => setAddTool(!addTool)}
              >
                {!addTool ? (
                  <AiOutlinePlusCircle size={28} color="rgba(255, 84, 90, 1)" />
                ) : (
                  <AiFillPlusCircle size={28} color="rgba(255, 84, 90, 1)" />
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      {/* {route === "/tools" && <GreenLineBreak />} */}
      {route === "/tools" && (
        <section className="idgw-ratings">
          <h4>Did This Tool Bloom Your Vibe ?</h4>
          <div className="idgw-rating-items">
            <div className="idgw-rating-item">
              {rating === 1 ? (
                <span className="idgw-rating-checked bg-gradient-pink">
                  <BsCheckLg size={25} fill="white" />
                </span>
              ) : (
                <span onClick={() => setRating(1)}>
                  <img src={res1} />
                </span>
              )}
              <p>Not Really</p>
            </div>
            <div className="idgw-rating-item">
              {rating === 2 ? (
                <span className="idgw-rating-checked bg-gradient-pink">
                  <BsCheckLg size={25} fill="white" />
                </span>
              ) : (
                <span onClick={() => setRating(2)}>
                  <img src={res2} />
                </span>
              )}
              <p>Baby Bloom</p>
            </div>
            <div className="idgw-rating-item">
              {rating === 3 ? (
                <span className="idgw-rating-checked bg-gradient-pink">
                  <BsCheckLg size={25} fill="white" />
                </span>
              ) : (
                <span onClick={() => setRating(3)}>
                  <img src={res3} />
                </span>
              )}
              <p>Solid Bloom</p>
            </div>
            <div className="idgw-rating-item">
              {rating === 4 ? (
                <span className="idgw-rating-checked bg-gradient-pink">
                  <BsCheckLg size={25} fill="white" />
                </span>
              ) : (
                <span onClick={() => setRating(4)}>
                  <img src={res4} />
                </span>
              )}
              <p>Big Bloom</p>
            </div>
          </div>
        </section>
      )}
      <GreenLineBreak />
      <section className="idgw-2 container-lg">
        <div className="idgw-2-headingAndRating">
          <span className="idgw-2-headingspan">
            <h4 className="idgw-2-heading">Recent Comments</h4>
            <div className="idgw-2-rating">
              <span>
                <StarIcon fontSize="large" />
              </span>
              <h5 className="idgw-2-rating-text">4.71 - 187</h5>
            </div>
          </span>
          <span className="idgw-2-ratingspan">
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              emptyIcon={<TiStarOutline />}
              halfIcon={<TiStarHalfOutline />}
              fullIcon={<TiStarFullOutline />}
              size={30}
              color="rgba(27, 91, 47, 0.4)"
              activeColor="rgba(27, 91, 47, 1)"
            />
          </span>
        </div>
        <div className="idgw-2-comment">
          <Carousel breakPoints={breakPoints} renderArrow={myArrow}>
            {videoData?.comments?.map((cmnt) => {
              return (
                <Comment
                  profile={cmnt?.user?.avatar?.croppedImage}
                  name={`${cmnt?.user?.firstName} ${cmnt?.user?.lastName}`}
                  text={cmnt?.comment}
                  replyOnClick={() => setReplyActive(true)}
                  // repliesData={cmnt?.replies}
                />
              );
            })}
            {/* <Comment />
            <Comment />
            <Comment /> */}
          </Carousel>
        </div>
        <div>
          {replyActive && (
            <div className="idgw-2-newComment">
              <textarea
                className="idgw-2-textArea"
                placeholder="Type Your Reply Comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <div className="idgw-2-btns">
                <div className="idgw-2-btn">
                  <GreenButton text="Post Reply" paddingX />
                </div>
                <div
                  className="idgw-2-btn"
                  onClick={() => setReplyActive(false)}
                >
                  <p>Cancel</p>
                </div>
              </div>
            </div>
          )}
          <div className="idgw-2-newComment">
            <h4 className="idgw-2-heading">Leave A Comment</h4>
            <textarea
              className="idgw-2-textArea"
              placeholder="Type Your Comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <div className="idgw-2-btn" onClick={() => createComment()}>
              <GreenButton text="Post Comment" paddingX />
            </div>
          </div>
        </div>
      </section>
      <div className="idgw3-video-slider container-xxl">
        <VideoCardSlider
          heading="Related Content"
          tools={route === "/tools" ? true : false}
          groundwork={route === "/groundwork" ? true : false}
          recentVibes
        />
      </div>
      <section className="container-lg idgw-links">
        <h2>Additional Resource</h2>
        <div className="link-display">
          <div className="link-display-heading">
            <span>•</span>
            <h4>Link Display Name</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasLorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor i
          </p>
        </div>
        <div className="link-display">
          <div className="link-display-heading">
            <span>•</span>
            <h4>Link Display Name</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasLorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor i
          </p>
        </div>
      </section>
      <section className="idgw-5 container-lg">
        <h2>Suggested Teacher</h2>
        <div className="idgw-5-row">
          <div className="idgw-5-col-1">
            <img src={images.teacher1} />
          </div>
          <div className="idgw-5-col-2">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasLorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor I Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut.<span>Link</span>
            </p>
          </div>
        </div>
        <div className="idgw-5-row">
          <div className="idgw-5-col-1">
            <img src={images.teacher2} />
          </div>
          <div className="idgw-5-col-2">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasLorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor I Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut.<span>Link</span>
            </p>
          </div>
        </div>
      </section>
      <GreenLineBreak />
      <ButtonAndHeading
        link="/schedule"
        heading="Want To Go Deeper?"
        text="Schedule Vibrguides"
      />
      <Footer />
    </div>
  );
};

export default IndividualGroundWork;
