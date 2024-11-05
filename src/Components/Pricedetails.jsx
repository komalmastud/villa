import React from "react";
import "./Pricedetails.css"; // Make sure to import the CSS file

const PriceDetails = () => {
  return (
    <div className="price-details-container">
      <div className="price-details-box">
        <h3>Price Details</h3>

        <h4>Rental Charges</h4>
        <p>45,100</p>

        <h5>GST</h5>
        <p>8,118</p>

        <h2 className="total-payment">Total Payment</h2>
        <p className="total-price">53,18</p>

        <button className="continue-button">Continue</button>
      </div>
    </div>
  );
};

export default PriceDetails;
