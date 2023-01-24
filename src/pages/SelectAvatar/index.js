// Library Imports
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
// Redux Slices
import { setLoading } from "../../redux/slices/loadingSlice";
import { setUser } from "../../redux/slices/userSlice";
// Custom Imports
import { apiRequest } from "../../api/axios";
import ButtonFilled from "../../components/Button/ButtonFilled";
import AlertModal from "../../components/Modal/AlertModal";

const SelectAvatar = () => {
  // Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // States
  const [choice, setChoice] = useState("");
  const [avatars, setAvatars] = useState([]);
  const [error, setError] = useState(false);
  // Redux State Read
  const user = useSelector((state) => state.user.user);

  // OnClick Handlers
  const getAvatars = async () => {
    try {
      const { data } = await apiRequest.get("/getAllAvatars");
      if (data.status === "ok") setAvatars(data?.avatars);
    } catch (err) {
      console.log(err);
    }
  };
  const setUserAvatar = async () => {
    try {
      if (!choice) return setError("Please select an avatar");
      dispatch(setLoading(true));
      const { data } = await apiRequest.patch(`/updateUserAvatar/${user._id}`, {
        avatar: choice,
      });
      // setTimeout(() => {
      dispatch(setUser(data.user));
      dispatch(setLoading(false));
      navigate("/selectbloom");
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
    getAvatars();
  }, []);

  return (
    <div className="selectavatar">
      <AlertModal message={error} state={error} setState={setError} />
      <div className="select-avatar bg-lightGreenMask">
        <h2>
          Which of these avatars
          <br /> resonate you most?
        </h2>

        <div className="avatar-container">
          {avatars.map((avatar) => {
            return (
              <div className="sa-imageAndText" key={avatar?._id}>
                {choice === avatar._id ? (
                  <span className="sa-choice-checked bg-gradient-pink">
                    <BsCheckLg size={50} fill="white" />
                  </span>
                ) : (
                  <div
                    className="sa-image"
                    onClick={() => setChoice(avatar?._id)}
                  >
                    <img
                      src={avatar?.croppedImage}
                      alt={avatar?.croppedImage}
                    />
                  </div>
                )}

                <Link
                  to="/avatarinfo"
                  state={{
                    heading: avatar?.title.split("-").join(" "),
                    description: avatar?.description,
                    image: avatar?.image,
                  }}
                >
                  <p>
                    Meet <br />
                    {avatar?.title.split("-").join(" ")}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>

        <span onClick={setUserAvatar}>
          <ButtonFilled
            text="Continue"
            bgGradient={"yes"}
            padXResponsive
            padYResponsive
          />
        </span>
      </div>
    </div>
  );
};

export default SelectAvatar;
