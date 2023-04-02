// Library Imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
// Redux Slices
import { setUser } from "../../redux/slices/userSlice.js";
import { setLoading } from "../../redux/slices/loadingSlice";
// Custom Imports
import Loader from "../../components/Modal/loader.js";
import PinCodeInput from "../../components/PinCodeInput.js";
import ButtonFilled from "../../components/Button/ButtonFilled.js";
import AlertModal from "../../components/Modal/AlertModal";
import { useResendOtp, useVerifyUser } from "../../api/auth.js";

const EmailConfirmation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // States
  const [error, setError] = useState(false);
  const [btnText, setBtnText] = useState(false);
  const [pci, setPci] = useState({
    pci1: "",
    pci2: "",
    pci3: "",
    pci4: "",
    pci5: "",
    pci6: "",
  });
  // Redux State Reads
  const user = useSelector((state) => state?.user?.user);
  const { email } = user;

  // OnClick Handlers
  // No 1
  const {
    mutate: verifyUser,
    error: err,
    isLoading,
  } = useVerifyUser(() => {
    setTimeout(() => {
      setBtnText(true);
      setError("OTP Verified Successfully");
    }, 500);
  });
  const {
    mutate: resendOTP,
    error: err2,
    isLoading: isLoading2,
  } = useResendOtp(() => {
    setTimeout(() => {
      setError("OTP has been resent successfully"); //////    This is not an error
    });
  });

  useEffect(() => {
    if (err) {
      console.log("err", err);
      if (err.message === "Network Error") return setError("Network Error");
      const data = err?.response?.data;
      setError(data?.message);
    }
  }, [err]);
  useEffect(() => {
    if (err2) {
      console.log("err", err2);
      if (err2.message === "Network Error") return setError("Network Error");
      const data = err2?.response?.data;
      setError(data?.message || data);
    }
  }, [err2]);

  return (
    <section className="ec">
      {isLoading && <Loader />}
      <AlertModal state={error} message={error} setState={setError} />
      <div className="ec-icon" onClick={() => navigate("/join-us")}>
        <ArrowBackIosRoundedIcon
          color="success"
          fontSize="large"
          className="icon"
        />
      </div>
      <div className="container ec-container">
        <h3 className="ec-heading">Email Confirmation</h3>
        <p className="ec-para">
          {`Please enter the 6 digits code sent to you registered email address
                ${email}`}
        </p>
        <PinCodeInput pci={pci} setPci={setPci} />
        {!btnText ? (
          <div
            className="ec-btn-container"
            onClick={() => {
              const inputOTP = Object.values(pci).join("");
              verifyUser({ otp: inputOTP, email });
            }}
          >
            <ButtonFilled bgGradient={"yes"} text="Confirm" paddingX />
          </div>
        ) : (
          <div
            className="ec-btn-container"
            onClick={() => {
              // navigate("/join-us", { state: { isEmailVerified: "yes" } })
              dispatch(setUser(null));
              navigate("/login");
            }}
          >
            <ButtonFilled bgGradient={"yes"} text="Confirmed" paddingX />
          </div>
        )}
        <p
          className="resend-otp"
          onClick={() => {
            console.log("oysmlsm", email);
            resendOTP({ email });
          }}
        >
          Resend OTP
        </p>
      </div>
    </section>
  );
};

export default EmailConfirmation;
