import React from "react";
import { FaAward } from "react-icons/fa";
import GreenButton from "../Button/GreenButton";
import { TiTick } from "react-icons/ti";

const PaymentSuccessfulModal = ({ state = false, setState = () => null }) => {
  return (
    <>
      {state && (
        <div className="paysuc-modal-overlay">
          <div className="paysuc-modal">
            <FaAward color="#1C5C2E" size={70} />
            <h3>
              Payment Processed <br />
              Successfully
            </h3>
            <p>
              1 year upgraded
              <span>
                <TiTick size={12} />
              </span>
            </p>
            <span onClick={() => setState(false)}>
              <GreenButton text="Done" padXResponsive />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentSuccessfulModal;
