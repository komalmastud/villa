import React, { useState } from "react";
import "./Pricedetails.css"; // Make sure to import the CSS file

const PriceDetails = () => {
  const [couponCode, setCouponCode] = useState("");
  const [total, setTotal] = useState(53218);
  const [couponApplied, setCouponApplied] = useState(false);

  const handleApplyCoupon = () => {
    if (couponCode === "DIWALI10" && !couponApplied) {
      setTotal(total - 2000); // Apply ₹2,000 discount
      setCouponApplied(true);
    }
  };

  return (
    <div className="price-details-container">
      <div className="price-details-box">
        <h3>Price Details</h3>

        <div className="row">
          <h4>Rental Charges</h4>
          <p>₹45,100</p>
        </div>

        <div className="row">
          <h5>GST (As per government guidelines)</h5>
          <p>₹8,118</p>
        </div>

        <div className="coupon-section">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            disabled={couponApplied}
          />
          <button onClick={handleApplyCoupon} disabled={couponApplied}>
            {couponApplied ? "Applied" : "Apply"}
          </button>
          <p>Apply to save up to ₹2,000</p>
        </div>

        <div className="total-section">
          <h2>Total Payable</h2>
          <p>₹{total}</p>
        </div>

        <div className="terms">
          <input type="checkbox" checked readOnly />
          <label>
            I have read and accepted the <a href="#">Terms & Conditions</a>,{" "}
            <a href="#">Privacy Policies</a>,{" "}
            <a href="#">Cancellation Policy</a>, and{" "}
            <a href="#">Indemnity Form</a>.
          </label>
        </div>

        <button className="continue-button">Continue</button>
      </div>
    </div>
  );
};

export default PriceDetails;
