import React from "react";

const ButtonSection = ({ activeSection, handleButtonClick }) => {
  return (
    <div className="button-container">
      {[
        "Overview",
        "Highlights",
        "Spaces",
        "Reviews",
        "Amenities",
        "Meals",
        "Location",
        "Experience",
        "FAQ",
      ].map((label, index) => (
        <li key={index} className="Button-item">
          <a
            href={`#${label}`} // Link to section with id corresponding to button label
            className={`alibaug-button ${
              activeSection === label ? "active" : ""
            }`}
            onClick={() => handleButtonClick(label)} // Update active state on click
          >
            {label}
          </a>
        </li>
      ))}
    </div>
  );
};

export default ButtonSection;
