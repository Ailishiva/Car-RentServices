import React from "react";
import { useLocation } from "react-router-dom";
import "../../styles/payment-details.css"; // Import your CSS file for styling

const PaymentDetailsPage = () => {
  const location = useLocation();
  const { paymentMethod } = location.state;

  return (
    <div className="payment-details-container">
      <h1 className="payment-details-title">Payment Details</h1>
      <div className="payment-details">
        <p className="payment-method-text">
          Selected Payment Method: <span>{paymentMethod}</span>
        </p>
        <h2>Credit Card Details</h2>
        <form className="credit-card-form">
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" id="cardNumber" name="cardNumber" />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input type="text" id="expiryDate" name="expiryDate" />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" />
          </div>
          <button className="payment-button">Make Payment</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetailsPage;
