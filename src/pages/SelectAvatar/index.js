// Library Imports
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
// Redux Slices
import { setUser } from "../../redux/slices/userSlice";
// Custom Imports
import ButtonFilled from "../../components/Button/ButtonFilled";
import AlertModal from "../../components/Modal/AlertModal";
import { useAvatars } from "../../api/avatars";
import Loader from "../../components/Modal/loader";
import { useSelectAvatar } from "../../api/user";

const SelectAvatar = () => {
  // Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // States
  const [choice, setChoice] = useState("");
  const [error, setError] = useState(false);
  // Redux State Read
  const user = useSelector((state) => state.user.user);

  const { data, isLoading, error: err } = useAvatars();

  const {
    mutate: selectAvatar,
    isLoading: isLoading2,
    error: err2,
  } = useSelectAvatar(({ data }) => {
    dispatch(setUser(data.user));
    navigate("/selectbloom");
  });

  const setUserAvatar = () => {
    if (!choice) return setError("Please select an avatar");
    selectAvatar({ userid: user._id, choice });
  };
  useEffect(() => {
    if (err || err2) {
      console.log("err", err, err2);
      setError(err || err2);
    }
  }, [err, err2]);

  return (
    <div className="selectavatar">
      {(isLoading || isLoading2) && <Loader />}
      <AlertModal message={error} state={error} setState={setError} />
      <div className="select-avatar bg-lightGreenMask">
        <h2>
          Which of these avatars
          <br /> resonate you most?
        </h2>

        <div className="avatar-container">
          {data?.data?.avatars?.map((avatar) => {
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
