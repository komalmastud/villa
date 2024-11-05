import React, { useState } from "react";
import "./MostLoved.css"; // Assuming you have a CSS file for styling

const MostLoved = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="most-loved">
      {/* Button to open the dropdown */}
      <button onClick={toggleDropdown} className="sort-button">
        Sort By : Most Loved <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Pop-up dropdown menu */}
      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-option active">
            <span role="img" aria-label="Popular">
              👍
            </span>{" "}
            Popular (Most Loved)
          </div>
          <div className="dropdown-option">
            <span role="img" aria-label="Price Low to High">
              ⬆️
            </span>{" "}
            Price (Low to High)
          </div>
          <div className="dropdown-option">
            <span role="img" aria-label="Price High to Low">
              ⬇️
            </span>{" "}
            Price (High to Low)
          </div>
        </div>
      )}
    </div>
  );
};

export default MostLoved;
