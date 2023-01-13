// Library Imports
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
// Redux Slices
import { signUpUser } from "../../redux/slices/signUpUserSlice.js";
import { setLoading } from "../../redux/slices/loadingSlice";
// Custom Imports
import { apiRequest } from "../../api/axios";
import PinCodeInput from "../../components/PinCodeInput.js";
import ButtonFilled from "../../components/Button/ButtonFilled.js";
import AlertModal from "../../components/Modal/AlertModal";

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
  const user = useSelector((state) => state?.signUpUser?.user);
  const { email, otp } = user;

  // OnClick Handlers
  // No 1
  const verifyUser = async (otp) => {
    try {
      dispatch(setLoading(true));
      const { data } = await apiRequest.post("/verifyUser", {
        otp,
        email,
      });
      if (data?.status === "ok") {
        dispatch(signUpUser(data.data));
        setTimeout(() => {
          dispatch(setLoading(false));
          setBtnText(true);
          setError("OTP Verified Successfully");
        }, 1000);
      }
    } catch (err) {
      dispatch(setLoading(false));
      const data = err?.response?.data;
      setError(data?.message);
    }
  };
  // No 2
  const resendOTP = async () => {
    try {
      dispatch(setLoading(true));
      const { data } = await apiRequest.post("/resendOTP", { email });
      if (data.status === "ok") {
        dispatch(signUpUser(data.data));
        setTimeout(() => {
          dispatch(setLoading(false));
          setError("OTP has been resent successfully"); //////    This is not an error
        });
      }
    } catch (err) {
      dispatch(setLoading(false));
      if (err.response.status === 429)
        return setError("1 OTP can be resent 2 in minutes only");
      const data = err?.response?.data;
      setError(data?.message);
    }
  };

  return (
    <section className="ec">
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
              verifyUser(inputOTP);
            }}
          >
            <ButtonFilled bgGradient={"yes"} text="Confirm" paddingX />
          </div>
        ) : (
          <div
            className="ec-btn-container"
            onClick={() =>
              navigate("/join-us", { state: { isEmailVerified: "yes" } })
            }
          >
            <ButtonFilled bgGradient={"yes"} text="Confirmed" paddingX />
          </div>
        )}
        <p
          className="resend-otp"
          onClick={() => {
            resendOTP();
          }}
        >
          Resend OTP
        </p>
      </div>
    </section>
  );
};

export default EmailConfirmation;
