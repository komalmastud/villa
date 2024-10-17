import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  faUserFriends,
  faBed,
  faBathtub,
  faUtensils,
  faTree,
  faSwimmingPool,
  faWifi,
  faDog,
  faShower,
  faSoap,
  faBath,
  faGamepad,
  faCocktail,
} from "@fortawesome/free-solid-svg-icons";
import "./alibaughNavbar.css";
import Image1 from "../assets/hamptons1.jpg";
import Image2 from "../assets/hamptons-charm.360b249.jpg";
import Image3 from "../assets/hampton2.jpg";
import space1 from "../assets/spaces1.jpeg";
import space2 from "../assets/spaces2.jpg";
import spaces3 from "../assets/spaces3.jpg";
import spaces4 from "../assets/spaces4.jpg";
import spaces5 from "../assets/spaces5.jpg";
import spaces6 from "../assets/spaces6.jpg";
import Slider from "react-slick";

const Alibaug = () => {
  const overviewRef = useRef(null);
  const highlightsRef = useRef(null);
  const spacesRef = useRef(null);
  const reviewsRef = useRef(null);
  const amenitiesRef = useRef(null);

  const handleScrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="alibaug-container">
      <nav className="alibag-navbar">
        <ul className="alibag-navbar-links">
          <li className="alibag-navbar-item">Hampton</li>
          <li className="alibag-navbar-item">Select Date</li>
          <li className="alibag-navbar-item">2 Guests</li>
        </ul>
      </nav>

      <div className="image-container">
        <div className="left-image">
          <img src={Image1} alt="Full Image" className="full-image" />
        </div>
        <div className="right-images">
          <img src={Image2} alt="Half Image 1" className="half-image" />
          <img src={Image3} alt="Half Image 2" className="half-image" />
        </div>
      </div>

      <div className="button-container">
        {["Overview", "Highlights", "Spaces", "Reviews", "Amenities"].map(
          (label, index) => (
            <button
              key={index}
              className="alibaug-button"
              onClick={() => {
                if (label === "Overview") handleScrollTo(overviewRef);
                else if (label === "Highlights") handleScrollTo(highlightsRef);
                else if (label === "Spaces") handleScrollTo(spacesRef);
                else if (label === "Reviews") handleScrollTo(reviewsRef);
                else if (label === "Amenities") handleScrollTo(amenitiesRef);
              }}
            >
              {label}
            </button>
          )
        )}
      </div>

      <div className="button-divider"></div>
      <div className="left-aligned">
        <h3 ref={highlightsRef}>Hamptons Charm</h3>
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

      <div ref={overviewRef} className="Name">
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

      <div className="hampstren-container">
        <button className="hampstren-button">Explore Your Stay</button>
        <button className="hampstren-button">Home Rules and Truth</button>
        <button className="hampstren-button">
          Booking & Cancellation Policy
        </button>
        <button className="hampstren-button">FAQ's</button>
      </div>

      {/* Spaces Section */}
      <div ref={spacesRef} className="content-container">
        <div className="spaces-header">
          <h4>Spaces</h4>
        </div>
        <div className="spaces-slider-container">
          <Slider {...settings}>
            {[space1, space2, spaces3, spaces4, spaces5, spaces6].map(
              (space, index) => (
                <div key={index}>
                  <img
                    src={space}
                    alt={`Space ${index + 1}`}
                    className="spaces-image"
                  />
                  <ul>
                    <li>This bedroom is on the ground floor.</li>
                    <li>
                      The room offers pool views, AC, WiFi, king-sized bed.
                    </li>
                    <li>
                      It has an attached bathroom with a geyser, towel and basic
                      toiletries.
                    </li>
                  </ul>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>

      {/* Amenities Section */}
      <div ref={amenitiesRef}>
        <div className="villa-amenties">
          <h3>Villa Amenities</h3>
        </div>

        <div className="amenities-container">
          {[
            { label: "Steam/Sauna", icon: faShower },
            { label: "Towels", icon: faSoap },
            { label: "Geyser", icon: faShower },
            { label: "Extra Mattress", icon: faBed },
            { label: "Toiletries", icon: faSoap },
            { label: "Bathtub", icon: faBath },
            { label: "Indoor/Outdoor Games", icon: faGamepad },
            { label: "Bar", icon: faCocktail },
          ].map((item, index) => (
            <div key={index} className="amenity-item">
              <div className="amenity-icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alibaug;
