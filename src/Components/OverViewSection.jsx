import React from "react";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faBed,
  faUtensils,
  faBathtub,
} from "@fortawesome/free-solid-svg-icons";

const OverviewSection = () => {
  return (
    <div className="Overview-button" id="Overview">
      <div className="button-divider"></div>
      <div className="left-aligned">
        <h3>Hamptons Charm</h3>
        <p>Alibaug, Maharashtra</p>
      </div>

      <div className="green-buttons-container">
        {[
          { label: "Up to 14 Guests", icon: faUserFriends },
          { label: "1-5 Rooms", icon: faBed },
          { label: "Meals Available", icon: faUtensils },
          { label: "5 Baths", icon: faBathtub },
        ].map((item, index) => (
          <button key={index} className="green-button" disabled>
            <FontAwesomeIcon icon={item.icon} style={{ marginRight: "8px" }} />
            {item.label}
          </button>
        ))}
      </div>
      <Sidebar />
    </div>
  );
};

export default OverviewSection;
