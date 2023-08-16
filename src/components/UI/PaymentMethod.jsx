import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  // const history = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleReserveClick = () => {
    if (!selectedOption) {
      alert("Please select a payment method.");
    } else {
      alert("PAYMENT SUCESSFULLY COMPLETED");
      // history.push('/cars/:slug/confirmation');
      // history.push("/:slug/confirmation");
    }
  };

  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            onChange={() => handleOptionChange("directBankTransfer")}
            checked={selectedOption === "directBankTransfer"}
          />{" "}
          Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            onChange={() => handleOptionChange("chequePayment")}
            checked={selectedOption === "chequePayment"}
          />{" "}
          Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            onChange={() => handleOptionChange("masterCard")}
            checked={selectedOption === "masterCard"}
          />{" "}
          Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            onChange={() => handleOptionChange("paypal")}
            checked={selectedOption === "paypal"}
          />{" "}
          Paypal
        </label>

        <img src={paypal} alt="" />
      </div>

      <div className="payment text-end mt-5">
        <button onClick={handleReserveClick}>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;
