import React, { useState } from "react";
import ButtonFilled from "../Button/ButtonFilled";
import { Link } from "react-router-dom";

const AlertModal = ({
  message = "Please write a message",
  state = false,
  setState = () => null,
  extraFunc = () => null,
  linkTo = "#",
}) => {
  //   const [showModal, setShowModal] = useState(state);

  return (
    <>
      {state && (
        <div className="alertModal-overlay">
          <div className="alertModal">
            <h4>{message}</h4>
            <Link to={linkTo}>
              <span
                onClick={() => {
                  setState(false);
                  extraFunc();
                }}
              >
                <ButtonFilled
                  text="Ok"
                  bgGradient={"yes"}
                  padXResponsive
                  paddingYSmall
                />
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertModal;