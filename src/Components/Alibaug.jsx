import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Sidebar from "./SideBar";
import Search from "./Search"; // Ensure this component exists
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

const Alibaug = () => {
  const [searchVisible, setSearchVisible] = useState(false); // State for search visibility

  const handleButtonClick = (buttonName) => {
    if (buttonName === "Select Date") {
      setSearchVisible(!searchVisible); // Toggle search visibility on "Select Date" click
    } else {
      alert(`${buttonName} clicked!`);
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
          <li
            className="alibag-navbar-item"
            onClick={() => handleButtonClick("Select Date")}
          >
            Select Date
          </li>
          <li className="alibag-navbar-item">2 Guests</li>
        </ul>
      </nav>
      {searchVisible && <Search />}{" "}
      {/* Conditionally render Search component */}
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
      <div className="Name">
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
        <button className="hampstren-button">Explore Your Stay</button>
        <button className="hampstren-button">Home Rules and Truth</button>
        <button className="hampstren-button">
          Booking & Cancellation Policy
        </button>
        <button className="hampstren-button">FAQ's</button>
      </div>
      {/* Spaces Images Section */}
      <div className="spaces-header">
        <h4>Spaces</h4>
      </div>
      <div className="spaces-slider-container">
        <Slider {...settings}>
          <div>
            <img src={space1} alt="Space 1" className="spaces-image" />
            <ul>
              <li>This bedroom is on the ground floor.</li>
              <li>The room offers pool views, AC, WiFi, king-sized beds.</li>
              <li>
                It has an attached bathroom with a bathtub, geyser, towel and
                basic toiletries.
              </li>
            </ul>
          </div>
          <div>
            <img src={space2} alt="Space 2" className="spaces-image" />
            <ul>
              <li>This bedroom is on the ground floor.</li>
              <li>The room offers pool views, AC, WiFi, king-sized bed.</li>
              <li>
                It has an attached bathroom with a geyser, towel and basic
                toiletries.
              </li>
            </ul>
          </div>
          <div>
            <img src={spaces3} alt="Space 3" className="spaces-image" />
            <ul>
              <li>This bedroom is on the ground floor.</li>
              <li>The room offers pool views, AC, WiFi, king-sized bed.</li>
              <li>
                It has an attached bathroom with a geyser, towel and basic
                toiletries.
              </li>
            </ul>
          </div>
          <div>
            <img src={spaces4} alt="Space 4" className="spaces-image" />
            <ul>
              <li>This bedroom is on the ground floor.</li>
              <li>The room offers pool views, AC, WiFi, king-sized bed.</li>
              <li>
                It has an attached bathroom with a geyser, towel and basic
                toiletries.
              </li>
            </ul>
          </div>
          <div>
            <img src={spaces5} alt="Space 5" className="spaces-image" />
            <ul>
              <li>This bedroom is on the ground floor.</li>
              <li>The room offers pool views, AC, WiFi, king-sized bed.</li>
              <li>
                It has an attached bathroom with a geyser, towel and basic
                toiletries.
              </li>
            </ul>
          </div>
          <div>
            <img src={spaces6} alt="Space 6" className="spaces-image" />
            <ul>
              <li>
                Both living rooms are on the ground floor and offer WiFi, AC,
                music system and seating for 12-15 people.
              </li>
              <li>
                One of them has a modern setting with a TV, while the other has
                an antique setting.
              </li>
              <li>
                The dining room is part of the living room, and has AC, TV, with
                seating for 10 people.
              </li>
            </ul>
          </div>
        </Slider>
      </div>
      <div>
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
