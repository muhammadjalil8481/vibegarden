// Library Imports
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// Redux Slices
import { setLoading } from "../../redux/slices/loadingSlice";
// import { signUpUser } from "../../redux/slices/signUpUserSlice";
import { setUser } from "../../redux/slices/userSlice";
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
import Loader from "../../components/Modal/loader";
import AlertModal from "../../components/Modal/AlertModal";
import { useRegisterUser } from "../../api/auth";

const JoinUs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // States
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [paymentState, setPaymentState] = useState({
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    country: "",
    state: "",
    postalCode: "",
  });
  const [error, setError] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [reload, setReload] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  // Redux State Read
  const user = useSelector((state) => state?.user?.user);
  useEffect(() => {
    if (user && user?.verified) setIsEmailVerified(true);
  }, []);

  // OnClick Handlers
  // No 1
  const {
    mutate: registerUser,
    error: err,
    isLoading,
  } = useRegisterUser(({ data }) => {
    console.log("data", data?.user);
    dispatch(setUser(data?.user));
    setTimeout(() => {
      setAccountCreated(true);
    }, 500);
  });
  // console.log("data", data);

  useEffect(() => {
    if (err) {
      console.log("err", err);
      if (err.message === "Network Error") return setError("Network Error");
      const data = err?.response?.data;
      setError(data?.message);
    }
  }, [err]);

  const signUpUserFunction2 = () => {
    if (
      !state.firstName ||
      !state.lastName ||
      !state.userName ||
      !state.email ||
      !state.password ||
      !state.confirmPassword
    )
      return setError("Please fill the remaining fields");
    const user = {
      firstName: state.firstName,
      lastName: state.lastName,
      userName: state.userName,
      email: state.email,
      password: state.password,
      confirmPassword: state.confirmPassword,
    };
    registerUser(user);
  };

  // No 2
  const acceptPay = async () => {
    try {
      console.log("accepting sign up payment");
      if (
        !paymentState.cardNumber ||
        !paymentState.expirationDate ||
        !paymentState.securityCode ||
        !paymentState.country ||
        !paymentState.state ||
        !paymentState.postalCode
      )
        return setError("Please fill the remaining fields");

      dispatch(setLoading(true));
      const { data } = await apiRequest.post("/acceptPay", {
        paymentMethod: "card",
        cardNumber: "329382039203",
        expirationDate: "12/12/22",
        country: "USA",
        state: "California",
        postalCode: "12345",
        packageType: "monthly",
        belongsTo: user._id,
      });
      dispatch(setUser(null));
      setTimeout(() => {
        dispatch(setLoading(false));
        setPaymentComplete(true);
      }, 500);
    } catch (err) {
      dispatch(setLoading(false));
      if (err.message === "Network Error") return setError("Network Error");
      const data = err?.response?.data;
      setError(data?.message);
    }
  };

  return (
    <div className="join-us">
      {isLoading && <Loader />}
      <AlertModal
        state={error}
        message={error}
        setState={setError}
        reload={reload}
      />
      <AlertModal
        state={accountCreated}
        message={"Account created Successfully! Please verify your account"}
        setState={setAccountCreated}
        navigateTo="/email-confirmation"
      />
      <AlertModal
        state={paymentComplete}
        message={"Payment Successful!"}
        setState={setPaymentComplete}
        navigateTo="/login"
      />
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
                  <FormGroupAuth
                    label="Card Number"
                    inputType="text"
                    value={paymentState.cardNumber}
                    setValue={(val) =>
                      setPaymentState({ ...paymentState, cardNumber: val })
                    }
                  />
                  <FormGroupAuth
                    label="Expiration Date"
                    inputType="date"
                    value={paymentState.expirationDate}
                    setValue={(val) =>
                      setPaymentState({ ...paymentState, expirationDate: val })
                    }
                  />
                  <FormGroupAuth
                    label="Security Code"
                    inputType="text"
                    value={paymentState.securityCode}
                    setValue={(val) =>
                      setPaymentState({ ...paymentState, securityCode: val })
                    }
                  />
                  <FormGroupAuth
                    label="Postal Code"
                    inputType="text"
                    value={paymentState.postalCode}
                    setValue={(val) =>
                      setPaymentState({ ...paymentState, postalCode: val })
                    }
                  />
                  <FormGroupAuth
                    label="Country"
                    options={["USA", "UK", "Pakistan"]}
                    isSelectInput
                    value={paymentState.country}
                    setValue={(val) =>
                      setPaymentState({ ...paymentState, country: val })
                    }
                  />
                  <FormGroupAuth
                    label="State"
                    isSelectInput
                    value={paymentState.state}
                    setValue={(val) =>
                      setPaymentState({ ...paymentState, state: val })
                    }
                  />
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
            {!isEmailVerified && (
              <h3
                className="join-us-next-btn"
                onClick={() => {
                  signUpUserFunction2();
                }}
              >
                Next&#62;
              </h3>
            )}
            {isEmailVerified && (
              <div className="join-us-submit-btn" onClick={() => acceptPay()}>
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
