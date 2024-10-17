import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Alibaugswipper.css";
import "swiper/swiper-bundle.css";

import {
  faUserFriends,
  faBed,
  faBathtub,
  faUtensils,
  faTree,
  faSwimmingPool,
  faWifi,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./alibaughNavbar.css"; // Ensure this path is correct
import Image1 from "../assets/hamptons1.jpg";
import Image2 from "../assets/hamptons-charm.360b249.jpg";
import Image3 from "../assets/hampton2.jpg";
import Spaces1 from "../assets/spaces1.jpeg";
import Spaces2 from "../assets/spaces2.jpg";
import Spaces3 from "../assets/spaces3.jpg";
import Spaces4 from "../assets/spaces4.jpg";
import Spaces5 from "../assets/spaces5.jpg";
import Spaces6 from "../assets/spaces6.jpg";
import Spaces7 from "../assets/spaces7.jpg";

const Alibaug = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleButtonClick = (buttonName) => {
    alert(`${buttonName} clicked!`);
  };

  return (
    <div className="alibaug-container">
      <nav className="alibag-navbar">
        <ul className="alibag-navbar-links">
          <li onClick={toggleSearch} className="alibag-navbar-item">
            Hampton
          </li>
          <li className="alibag-navbar-item">Select Date</li>
          <li className="alibag-navbar-item">2 Guests</li>
        </ul>
        {searchVisible && (
          <div className="alibag-search-container">
            <input
              type="text"
              placeholder="Search..."
              className="alibag-search-input"
            />
          </div>
        )}
      </nav>

      <div className="image-container">
        <div className="left-image">
          <img src={Image1} alt="Left Image" className="full-image" />
        </div>
        <div className="right-images">
          <img src={Image2} alt="Right Image 1" className="half-image" />
          <img src={Image3} alt="Right Image 2" className="half-image" />
        </div>
      </div>

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
          <button
            key={index}
            className="alibaug-button"
            onClick={() => handleButtonClick(label)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="button-divider"></div>

      <div>
        <h1>Hamptons Charm</h1>
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

      <div className="great-for-container">
        {[
          { label: "Food", icon: faUtensils },
          { label: "Service", icon: faUserFriends },
          { label: "Senior Citizens", icon: faUserFriends },
        ].map((item, index) => (
          <div key={index} className="great-for-item">
            <FontAwesomeIcon icon={item.icon} style={{ marginRight: "8px" }} />
            {item.label}
          </div>
        ))}
      </div>

      <div className="features-container">
        {[
          { label: "Heated Pool", icon: faSwimmingPool },
          { label: "Garden", icon: faTree },
          { label: "Forest View", icon: faTree },
          { label: "WiFi", icon: faWifi },
          { label: "Pet Friendly", icon: faDog },
        ].map((item, index) => (
          <div key={index} className="feature-item">
            <div className="icon-container">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            {item.label}
          </div>
        ))}
      </div>
      <br />
      <div>
        <h3>Hamptons Charm - Villa in Alibaug</h3>
        <p>
          Surrounded by greenery and close to the beach, Hamptons Charm is a
          stylishly elegant villa in Alibaug. The furnishing is a superb balance
          of traditional and contemporary comfort. Most rooms surround the pool
          and even open up to it, including the pavilion. Two can play table
          tennis by the pool, or simply lounge around it. This villa is an ideal
          place for you to relax and spend quality time with friends and family,
          head here for a charming time!
        </p>
      </div>
      <br />
      <div className="hampstren-container">
        <button className="hampstren-button">Hampstren 1</button>
        <button className="hampstren-button">Hampstren 2</button>
        <button className="hampstren-button">Hampstren 3</button>
        <button className="hampstren-button">Hampstren 4</button>
      </div>
      <div>
        <h3>Spaces</h3>
      </div>

      {/* Swiper Section */}
      <Swiper
        className="alibaug-swiper" // Unique class name
        spaceBetween={10}
        slidesPerView={4}
        pagination={{ clickable: true }}
        navigation
      >
        {[Spaces1, Spaces2, Spaces3, Spaces4, Spaces5, Spaces6, Spaces7].map(
          (image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Space ${index + 1}`}
                className="swiper-image"
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Alibaug;
