import React, { useState, useEffect } from "react";
import NavBar from "../../components/Navbar";
import { BsChevronUp, BsChevronDown, BsCheckLg } from "react-icons/bs";
import res1 from "../../assets/images/reson1.svg";
import res2 from "../../assets/images/reson2.svg";
import res3 from "../../assets/images/reson3.svg";
import res4 from "../../assets/images/reson4.svg";
import ButtonFilled from "../../components/Button/ButtonFilled";
import VidCard from "../../components/VidCard";
import images from "../../constants/images";
import QuestionsData from "../../constants/dummyQuestions";
import { Link } from "react-router-dom";

const ResonanceFinder = () => {
  const [count, setCount] = useState(1);
  const [heading, setHeading] = useState("Plants are sentilents");
  const [questions, setQuestions] = useState(QuestionsData[0]);
  const [choice, setChoice] = useState("");

  useEffect(() => {
    if (count === 1) {
      setHeading("Plants are sentilents");
      setQuestions(QuestionsData[0]);
    }
    if (count === 2) {
      setHeading("The Multiverse is Real");
      setQuestions(QuestionsData[1]);
    }
    if (count === 3) {
      setHeading("Data Help me Accept new concepts.");
      setQuestions(QuestionsData[2]);
    }
    if (count === 4) {
      setHeading("We Each Have Angles?");
      setQuestions(QuestionsData[3]);
    }
  }, [count]);

  return (
    <div className="res-finder">
      <NavBar />
      <div className="container-lg rf-container">
        <div className="rf-row row">
          <div className={`rf-left ${count !== 5 && "col-lg-6 col-md-6"}`}>
            <div className="rf-top">
              <h4>Resonance Finder</h4>
              <span className="rf-topright">
                <Link to="/home">
                  <span>&#10005;</span>
                </Link>
              </span>
            </div>
            {count <= 4 && (
              <div>
                <p className="rf-count">{count}/20</p>
                {count !== 1 && (
                  <div className="rf-star">
                    <img src={images.resonanceStar} />
                  </div>
                )}
                <p className="rf-direction">
                  <span>Direction: </span>Flow Through
                  {count === 1 ? (
                    <span className="rfd-sign">
                      <BsChevronUp size={25} style={{ marginBottom: 5 }} />
                    </span>
                  ) : (
                    <span className="rfd-sign">
                      <BsChevronDown size={25} style={{ marginBottom: 5 }} />
                    </span>
                  )}
                </p>
                {count === 1 && (
                  <p className="rf-text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    di At vero eos et accusam et justo duo.
                  </p>
                )}
                <p className="rf-statement">Statement:</p>
                <h3 className="rf-heading">{heading}</h3>
                <div className="rf-choices">
                  {questions.map((ques) => {
                    return (
                      <span
                        className="rf-choice-container"
                        onClick={() => setChoice(ques.question)}
                      >
                        {ques.question === choice ? (
                          <span className="rf-choice-checked bg-gradient-pink">
                            <BsCheckLg size={25} fill="white" />
                          </span>
                        ) : (
                          <span className="rf-choice">
                            <img src={ques.image} />
                          </span>
                        )}
                        <label
                          className={`${
                            ques.question === "?" && "rf-choicequestion"
                          }`}
                        >
                          {ques.question}
                        </label>
                      </span>
                    );
                  })}
                </div>
                <div
                  className="rf-btn"
                  onClick={() => {
                    count < 5 && setCount(count + 1);
                  }}
                >
                  <ButtonFilled
                    bgGradient={"yes"}
                    text="Save"
                    padXBig
                    paddingY
                  />
                </div>
              </div>
            )}
            {count === 5 && (
              <div className="rf-result">
                <div className="row rf-row">
                  <div className="col-lg-4 col-md-6 rf-col-1">
                    <h4>Result!</h4>
                    <div className="rf-rainbow">
                      <img src={images.resonanceRainbow} />
                    </div>
                    <p className="top-resonance">
                      What fun your top areas resonance?
                    </p>
                    <div className="rf-result-list">
                      <div className="rf-result-item">
                        <span className="rf-result-no">1</span>
                        <p className="rf-result-topic">Buddhism</p>
                      </div>
                      <div className="rf-result-item">
                        <span className="rf-result-no">2</span>
                        <p className="rf-result-topic">Plant Wisdom</p>
                      </div>
                      <div className="rf-result-item">
                        <span className="rf-result-no">3</span>
                        <p className="rf-result-topic">
                          Quantum Physics Science
                        </p>
                      </div>
                    </div>
                    <p className="rf-rest">
                      And The rest , in Descending Order:
                    </p>
                    <div className="rf-result-list">
                      <div className="rf-result-item">
                        <span className="rf-result-no">1</span>
                        <p className="rf-result-topic">
                          Inner dim light Beings
                        </p>
                      </div>
                      <div className="rf-result-item">
                        <span className="rf-result-no">2</span>
                        <p className="rf-result-topic">Mindfullness</p>
                      </div>
                      <div className="rf-result-item">
                        <span className="rf-result-no">3</span>
                        <p className="rf-result-topic">Buddhism</p>
                      </div>
                      <div className="rf-result-item">
                        <span className="rf-result-no">4</span>
                        <p className="rf-result-topic">Western Physics</p>
                      </div>
                      <div className="rf-result-item">
                        <span className="rf-result-no">5</span>
                        <p className="rf-result-topic">Ascent Wisdom</p>
                      </div>
                      <div className="rf-result-item">
                        <span className="rf-result-no">6</span>
                        <p className="rf-result-topic">Nature</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 rf-col-2">
                    <h4>Note:</h4>
                    <p>
                      as You grow and heal your feelings of resonance will
                      definitely change as it moves close your the essential
                      resonance!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {count === 1 && (
            <div className="rf-right col-lg-6 col-md-6">
              <div className="rf-video">
                <VidCard />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResonanceFinder;
