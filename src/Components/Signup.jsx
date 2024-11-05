import React, { useState } from "react";
import "./signup.css"; // Import the CSS for styling

const LoginPopup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleContinue = () => {
    // Here, you can handle the phone number submission logic
    console.log("Phone Number Submitted: ", phoneNumber);
    setIsPopupVisible(false); // Close the pop-up after submission
  };

  return (
    isPopupVisible && (
      <div className="login-popup">
        <div className="popup-content">
          <h2>Welcome to Stay Vista</h2>
          <h3>Login/Signup</h3>
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter your phone number"
          />
          <button className="continue-button" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    )
  );
};

export default LoginPopup;
