// Library Imports
import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// Redux Slices
import { setLoading } from "../../redux/slices/loadingSlice";
import { signUpUser } from "../../redux/slices/signUpUserSlice";
// Custom Imports
import { apiRequest } from "../../api/axios";
import images from "../../constants/images";
import NavBar from "../../components/Navbar";
import CheckBoxList from "../../components/CheckBoxList";
import PaymentPlanCard from "../../components/PaymentPlanCard/PaymentPlanCard";
import Footer from "../../components/Footer";
import GreenButton from "../../components/Button/GreenButton";
import FormGroupAuth from "../../components/FormInputAuth";
import VidCard from "../../components/VidCard";
import AlertModal from "../../components/Modal/AlertModal";

const JoinUs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  let isEmailVerified = null;
  // Page render depending upon state
  if (location.state && location.state.isEmailVerified) isEmailVerified = "yes";
  // States
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);
  const [reload, setReload] = useState(false);
  // Redux State Read
  const user = useSelector((state) => state?.signUpUser?.user);

  // OnClick Handlers
  // No 1
  const signUpUserFunction = async () => {
    try {
      if (
        !state.firstName ||
        !state.lastName ||
        !state.userName ||
        !state.email ||
        !state.password ||
        !state.confirmPassword
      )
        return setError("Please fill the remaining fields");
      dispatch(setLoading(true));
      const { data } = await apiRequest.post("/register", {
        firstName: state.firstName,
        lastName: state.lastName,
        userName: state.userName,
        email: state.email,
        password: state.password,
        confirmPassword: state.confirmPassword,
      });
      if (data?.status === "ok") {
        dispatch(signUpUser(data?.user));
        dispatch(setLoading(false));
        navigate("/email-confirmation");
      }
    } catch (err) {
      dispatch(setLoading(false));
      const data = err?.response?.data;
      setError(data?.message);
    }
  };
  // No 2
  const acceptPay = async () => {
    try {
      console.log("accepting sign up payment");
      dispatch(setLoading(true));
      const { data } = await apiRequest.post("/acceptPay", {
        paymentMethod: "card",
        cardNumber: "329382039203",
        expirationDate: "12/12/22",
        country: "USA",
        state: "California",
        postalCode: "12345",
        packageType: "monthly",
        belongsTo: user.email,
      });
      console.log(data);
      dispatch(signUpUser(data.data));
      dispatch(setLoading(false));
      navigate("/login");
    } catch (err) {
      console.log("catching and dispatching");
      dispatch(setLoading(false));
      const data = err?.response?.data;
      setError(data?.message);
    }
  };

  return (
    <div className="join-us">
      <AlertModal
        state={error}
        message={error}
        setState={setError}
        reload={reload}
      />
      {/* {isLoading && <Loader />} */}
      <NavBar onlyBrand />
      <div className="container-lg join-us-container mt-5">
        <div className="row join-us-row">
          <div className="col-md-5 join-us-left-col">
            <div className="join-us-heading">
              <h2>Brilliant Choice You !</h2>
            </div>
            <div className="join-us-checkbox-list my-5">
              <CheckBoxList checked={true} />
            </div>
            <div className="join-us-video-card">
              <VidCard noTitle pinkVideoIcon image={images.placeholder5} />
            </div>
            <div className="join-us-info my70">
              <h3 className="join-us-info-heading mb-4">
                Reawaken Your Inner Knowing
              </h3>
              <p className="join-us-info-para ">
                Default body copy style for text on white / light color
                backgrounds Mauris placerat euismod porttitor. Nam nec mauris
                non magnaSed dapibus, est non pulvinar fringilla, loremody copy
                style for text on white / light color backgrounds Mauris
                placerat euismod porttitor. Nam nec mauris non magnaSed dapibus,
                est non pulvinar fringilla, loremody copy style for text on
                white / light color backgrounds Mauris placerat euismod
                porttitor. Nam nec mauris non magnaSed dapibus, est non pulvinar
                fringilla, lorem
              </p>
            </div>
          </div>
          <div className="col-md-1 line-break-container">
            <div className="line-break-vertical"></div>
          </div>
          <div className="col-md-6 join-us-right-col">
            <h3
              className="join-us-back-btn"
              onClick={
                isEmailVerified !== "yes"
                  ? () => navigate("/")
                  : () => navigate("/email-confirmation")
              }
            >
              &#60; Back
            </h3>
            <div className="join-us-ppc">
              <PaymentPlanCard monthly />
              {<PaymentPlanCard />}
            </div>
            {isEmailVerified === "yes" && (
              <div className="join-us-payment">
                <img src={images.paymentOptions} />
              </div>
            )}
            {isEmailVerified === "yes" && (
              <h4 className="join-us-credit-heading">
                Credit Card Or Debit Card
              </h4>
            )}

            <form className="join-us-form">
              {isEmailVerified ? (
                <>
                  <FormGroupAuth label="Card Number" inputType="text" />
                  <FormGroupAuth label="Expiration Date" inputType="date" />
                  <FormGroupAuth label="Security Code" inputType="text" />
                  <FormGroupAuth
                    label="Country"
                    options={["USA", "UK", "Pakistan"]}
                    isSelectInput
                  />
                  <FormGroupAuth label="State" isSelectInput />
                  <FormGroupAuth label="Postal Code" inputType="text" />
                </>
              ) : (
                <>
                  <FormGroupAuth
                    label="First Name"
                    inputType="text"
                    value={state.firstName}
                    setValue={(val) => setState({ ...state, firstName: val })}
                  />
                  <FormGroupAuth
                    label="Last Name"
                    inputType="text"
                    value={state.lastName}
                    setValue={(val) => setState({ ...state, lastName: val })}
                  />
                  <FormGroupAuth
                    label="Username"
                    inputType="text"
                    value={state.userName}
                    setValue={(val) => setState({ ...state, userName: val })}
                  />
                  <FormGroupAuth
                    label="Email"
                    inputType="email"
                    value={state.email}
                    setValue={(val) => setState({ ...state, email: val })}
                  />
                  <FormGroupAuth
                    label="Password"
                    inputType="password"
                    showPasswordIcon
                    value={state.password}
                    setValue={(val) => setState({ ...state, password: val })}
                  />
                  <FormGroupAuth
                    label="Confirm Password"
                    inputType="password"
                    showPasswordIcon
                    value={state.confirmPassword}
                    setValue={(val) =>
                      setState({ ...state, confirmPassword: val })
                    }
                  />
                </>
              )}
            </form>
            {isEmailVerified !== "yes" && (
              <h3
                className="join-us-next-btn"
                onClick={() => {
                  signUpUserFunction();
                }}
              >
                Next&#62;
              </h3>
            )}
            {isEmailVerified === "yes" && (
              <div
                className="join-us-submit-btn"
                onClick={() => acceptPay()}
              >
                <GreenButton paddingX text="Submit" />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JoinUs;
