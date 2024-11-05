import React, { useState } from "react";
import "./Share.css"; // For styling

const Share = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle pop-up visibility
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle Copy Link
  const handleCopyLink = () => {
    const link = "https://your-link.com"; // Replace with your actual link
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="share-container">
      {/* Button to open the share pop-up */}
      <button onClick={togglePopup} className="open-popup-btn">
        Share
      </button>

      {/* Pop-up content */}
      {isOpen && (
        <div className="popup">
          <div className="popup-header">
            <h3>Share</h3>
            <button onClick={togglePopup} className="close-btn">
              ✖
            </button>
          </div>
          <div className="popup-body">
            <img
              src="https://your-image-url.com" // Replace with your actual image URL
              alt="Villa"
              className="popup-image"
            />
            <div className="popup-actions">
              <button onClick={handleCopyLink} className="action-btn">
                <span className="icon">🔗</span> Copy Link
              </button>
              <button className="action-btn">
                <span className="icon">🟢</span> WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Share;
