import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import Sidebar from "./SideBar";
import Popup from "./Popup";
import Sharepopup from "./Sharepopup";
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
  faHeart,
  faShareAlt,
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
  const [activeSection, setActiveSection] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // State to manage Popup visibility
  const [showSharePopup, setShowSharePopup] = useState(false); // State to manage Sharepopup visibility

  const handleButtonClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Updated to show 4 images at once
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
          <button className="Heart-button" onClick={() => setShowPopup(true)}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button
            className="Share-button"
            onClick={() => setShowSharePopup(true)}
          >
            <FontAwesomeIcon icon={faShareAlt} />
          </button>
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
            className={`alibaug-button ${
              activeSection === label ? "active" : ""
            }`}
            onClick={() => handleButtonClick(label)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Overview Section */}
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
              <FontAwesomeIcon
                icon={item.icon}
                style={{ marginRight: "8px" }}
              />
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
              <FontAwesomeIcon
                icon={item.icon}
                style={{ marginRight: "8px" }}
              />
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
      </div>

      {/* Highlights Section */}
      <div className="Highlight-button" id="Highlights">
        <div className="Name">
          <h3>Hamptons Charm - Villa in Alibaug</h3>
          <p>
            Surrounded by greenery and close to the beach, Hamptons Charm is a
            stylishly elegant villa in Alibaug. The furnishing is a superb
            balance of traditional and contemporary comfort. Most rooms surround
            the pool and even open up to it, including the pavilion. Two can
            play table tennis by the pool, or simply lounge around it. This
            villa is an ideal place for you to relax and spend quality time with
            friends and family, head here for a charming time!
          </p>
        </div>

        <div className="hampstren-container">
          {[
            "Explore Your Stay",
            "Home Rules and Truth",
            "Booking & Cancellation Policy",
            "FAQ's",
          ].map((label, index) => (
            <button key={index} className="hampstren-button">
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Spaces Section */}
      <div className="spaces-header" id="Spaces">
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
                It has an attached bathroom with a bathtub, geyser, towel, and
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
                It has an attached bathroom with a geyser, towel, and basic
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
                It has an attached bathroom with a geyser, towel, and basic
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
                It has an attached bathroom with a geyser, towel, and basic
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
                It has an attached bathroom with a geyser, towel, and basic
                toiletries.
              </li>
            </ul>
          </div>
          <div>
            <img src={spaces6} alt="Space 6" className="spaces-image" />
            <ul>
              <li>This bedroom is on the ground floor.</li>
              <li>The room offers pool views, AC, WiFi, king-sized bed.</li>
              <li>
                It has an attached bathroom with a geyser, towel, and basic
                toiletries.
              </li>
            </ul>
          </div>
        </Slider>
      </div>

      {/* Popup Component */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}

      {/* Share Popup Component */}
      {showSharePopup && (
        <Sharepopup onClose={() => setShowSharePopup(false)} />
      )}
      <Sidebar />
    </div>
  );
};

export default Alibaug;
