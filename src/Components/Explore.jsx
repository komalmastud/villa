// Explore.jsx
import React from "react";
import "./Explore.css";

const Explore = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="explore-popup">
      <div className="explore-popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Explore Locations</h2>
        <ul>
          <li>
            <a href="#">Location 1</a>
          </li>
          <li>
            <a href="#">Location 2</a>
          </li>
          <li>
            <a href="#">Location 3</a>
          </li>
          {/* Add more locations as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Explore;
