// Library Imports
import React, { useState, useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
// Redux Slices
import { setUser } from "../../redux/slices/userSlice";
// Custom Imports
import AlertModal from "../../components/Modal/AlertModal";
import ButtonFilled from "../../components/Button/ButtonFilled";
import { useBlooms } from "../../api/blooms";
import Loader from "../../components/Modal/loader";
import { useSelectBloom } from "../../api/user";

const SelectBloom = () => {
  // Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // States
  const [choice, setChoice] = useState("");
  const [error, setError] = useState(false);
  // Redux State Read
  const user = useSelector((state) => state.user.user);
  const { data, isLoading, error: err } = useBlooms();

  const {
    mutate: selectBloom,
    isLoading: isLoading2,
    error: err2,
  } = useSelectBloom(({ data }) => {
    dispatch(setUser(data.user));
    navigate("/bloomcheck");
  });

  const setUserBloom = () => {
    if (!choice) return setError("Please select aa bloom");
    selectBloom({ userid: user._id, choice });
  };
  useEffect(() => {
    if (err || err2) {
      console.log("err", err, err2);
      setError(err || err2);
    }
  }, [err, err2]);

  return (
    <div className="selectavatar">
      {/* <NavBar onlyBrand /> */}
      {(isLoading || isLoading2) && <Loader />}
      <AlertModal message={error} state={error} setState={setError} />
      <div className="select-avatar bg-lightGreenMask">
        <Link to="/selectavatar">
          <span className="bc-back">
            <RiArrowLeftLine size={30} fill="white" />
          </span>
        </Link>
        <h2>
          Brilliant! And Now which Blooms <br />
          Speaks To your heart?
        </h2>

        <div className="avatar-container">
          {data?.data?.blooms.map((bloom) => {
            return (
              <div className="sa-imageAndText" key={bloom?._id}>
                {choice === bloom._id ? (
                  <span className="sa-choice-checked bg-gradient-pink">
                    <BsCheckLg size={50} fill="white" />
                  </span>
                ) : (
                  <div
                    className="sa-image"
                    onClick={() => setChoice(bloom?._id)}
                  >
                    <img src={bloom?.croppedImage} alt={bloom?.croppedImage} />
                  </div>
                )}

                <Link
                  to="/bloominfo"
                  state={{
                    heading: bloom?.title.split("-").join(" "),
                    description: bloom?.description,
                    image: bloom?.image,
                  }}
                >
                  <p>
                    Meet <br />
                    {bloom?.title.split("-").join(" ")}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
        {/* <Link to="/bloomcheck"> */}
        <span onClick={setUserBloom}>
          <ButtonFilled
            text="Continue"
            bgGradient={"yes"}
            padXResponsive
            padYResponsive
          />
        </span>
        {/* </Link> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SelectBloom;
