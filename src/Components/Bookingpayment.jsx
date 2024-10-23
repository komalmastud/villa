import React from "react";
import "./Bookingpayment.css";
import Payment from "../assets/hamptons1.jpg"; // Importing local image
import Pricedetails from "./Pricedetails";

function Bookingpayment() {
  const propertyName = "Hamptons Charm";
  const location = "Alibaug, Maharashtra";
  const checkInDate = "Tue 5 Nov 2024";
  const checkInTime = "From 02:00 PM";
  const checkOutDate = "Wed 6 Nov 2024";
  const checkOutTime = "Until 11:00 AM";
  const numberOfNights = 1;
  const numberOfRooms = 5;
  const numberOfBaths = 5;
  const numberOfGuests = 2;
  const rating = 4.9;
  const guestStatus = "Guest Favourite!";

  return (
    <div className="booking-payment-container">
      {/* Booking Details Section */}
      <div className="booking-card">
        <div className="card-header">
          <h2>{propertyName}</h2>
          <p>{location}</p>
        </div>
        <div className="card-body">
          <div className="booking-details">
            <div className="check-in">
              <h4>Check-In</h4>
              <p>{checkInDate}</p>
              <p>{checkInTime}</p>
            </div>
            <div className="duration">
              <span>For {numberOfNights} night</span>
            </div>
            <div className="check-out">
              <h4>Check-Out</h4>
              <p>{checkOutDate}</p>
              <p>{checkOutTime}</p>
            </div>
          </div>

          <div className="room-details">
            <div className="rooms">
              <p>
                🛏️ {numberOfRooms} Rooms | {numberOfBaths} Baths
              </p>
            </div>
            <div className="guests">
              <p>👥 {numberOfGuests} Guests (2 Adults)</p>
            </div>
          </div>

          <div className="rating-section">
            <div className="rating">
              <span>⭐ {rating}</span>
            </div>
            <div className="status">
              <span>{guestStatus}</span>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <img src={Payment} alt="Property" className="property-image" />
        </div>
      </div>
      <Pricedetails />
      {/* Meals Section */}
      <div className="meals-card">
        <h4>Meals</h4>
        <p>
          Indulge in an all-day meal package of freshly prepared North Indian
          vegetarian and non-vegetarian local specialties.
        </p>
        <div className="meal-buttons">
          <button className="meal-btn veg-menu">
            <span className="green-dot">●</span> Veg Menu
          </button>
          <button className="meal-btn mix-menu">
            <span className="green-dot">●</span>
            <span className="red-triangle">▲</span> Mix Menu
          </button>
          <button className="meal-btn view-more">View More</button>
        </div>
      </div>

      {/* Booking & Cancellation Policy Section */}
      <div className="policy-card">
        <h4>Booking & Cancellation Policy</h4>
        <div className="policy-details">
          <div className="half-refund">
            <span className="calendar-icon">📅</span>
            <div>
              <h5>Half Refund</h5>
              <p>On/Before 28th October, 2024</p>
            </div>
          </div>
          <div className="no-refund">
            <span className="house-icon">🏠</span>
            <div>
              <h5>No Refund</h5>
              <p>After 28th October, 2024</p>
            </div>
          </div>
        </div>
        <a href="#" className="view-more-link">
          View more details
        </a>
      </div>
      <div className="request">
        <h3>Any Special Request?</h3>
        <p>(Birthday, Anniversary, Family Getaway etc.)</p>

        <textarea
          className="request-textbox"
          placeholder="Write your request here..."
        ></textarea>
        <p>
          Share your special request with us and we'll do our best to
          accommodate them!
        </p>
      </div>
    </div>
  );
}

export default Bookingpayment;
