// Library Imports
import React, { useState, useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
// Redux Slices
import { setLoading } from "../../redux/slices/loadingSlice";
import { setUser } from "../../redux/slices/userSlice";
// Custom Imports
import { apiRequest } from "../../api/axios";
import AlertModal from "../../components/Modal/AlertModal";
import ButtonFilled from "../../components/Button/ButtonFilled";

const SelectBloom = () => {
  // Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // States
  const [choice, setChoice] = useState("");
  const [blooms, setBlooms] = useState([]);
  const [error, setError] = useState(false);
  // Redux State Read
  const user = useSelector((state) => state.user.user);

  const getBlooms = async () => {
    try {
      const { data } = await apiRequest.get("/getAllBlooms");
      if (data.status === "ok") setBlooms(data?.blooms);
    } catch (err) {
      console.log(err);
    }
  };
  const setUserBloom = async () => {
    try {
      console.log("selecting bloom from user");
      if (!choice) return setError("Please select a bloom");
      dispatch(setLoading(true));
      const { data } = await apiRequest.patch(`/updateUserBloom/${user._id}`, {
        bloom: choice,
      });
      console.log("next");
      console.log("data///", data);
      // setTimeout(() => {
      dispatch(setUser(data.user));
      dispatch(setLoading(false));
      navigate("/bloomcheck");
      // }, 1000);
    } catch (err) {
      dispatch(setLoading(false));
      if (err.message === "Network Error") return setError("Network Error");
      const data = err?.response?.data;
      setError(data?.message);
    }
  };
  // UseEffect
  useEffect(() => {
    getBlooms();
  }, []);

  return (
    <div className="selectavatar">
      {/* <NavBar onlyBrand /> */}
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
          {blooms.map((bloom) => {
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
