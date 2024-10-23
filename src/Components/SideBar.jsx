import React, { useState, useEffect } from "react";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import CartToggle from "./CartToggle";
// Ensure this component is created

const Search = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [modal, setModal] = useState(false);
  const [roomModal, setRoomModal] = useState(false);
  const [guests, setGuests] = useState({ adults: 1, children: 0, infants: 0 });
  const [rooms, setRooms] = useState(1);
  const [pricing, setPricing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const toggleModal = () => setModal((prev) => !prev);
  const toggleRoomModal = () => setRoomModal((prev) => !prev);

  useEffect(() => {
    if (checkIn && checkOut && rooms > 0 && guests.adults > 0) {
      fetchPricing();
    }
  }, [
    checkIn,
    checkOut,
    rooms,
    guests.adults,
    guests.children,
    guests.infants,
  ]);

  const fetchPricing = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("/api/getPricing", {
        params: {
          checkIn: checkIn.format("YYYY-MM-DD"),
          checkOut: checkOut.format("YYYY-MM-DD"),
          rooms,
          guests,
        },
      });
      setPricing(response.data);
    } catch (error) {
      console.error("Error fetching pricing:", error);
      setError("Failed to fetch pricing. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = () => {
    // Navigate to the booking payment page with the relevant data
    if (pricing) {
      navigate("/booking-payment", {
        state: { checkIn, checkOut, guests, rooms, pricing },
      });
    } else {
      console.log("No pricing information available.");
    }
  };

  const formatDate = (date) =>
    date ? moment(date).format("DD MMM YYYY") : "-";

  return (
    <div className="main-pink-square">
      <div className="price-text">₹{pricing ? pricing.total : "43,000"}</div>

      <div className="white-square">
        <div className="date-picker-row">
          <div className="date-picker-box">
            <label>Check In</label>
            <DatePicker onChange={(date) => setCheckIn(date)} />
          </div>
          <div className="date-picker-box">
            <label>Check Out</label>
            <DatePicker onChange={(date) => setCheckOut(date)} />
          </div>
        </div>
        <hr className="horizontal-line" />

        <div className="guest-room-row">
          <div className="guest">
            <button
              className="guests-button"
              type="button"
              onClick={toggleModal}
            >
              <span className="guests-label">Guests</span>
              <span className="guests-info">
                {guests.adults} Adult{guests.adults !== 1 ? "s" : ""},{" "}
                {guests.children} Child{guests.children !== 1 ? "ren" : ""},{" "}
                {guests.infants} Infant{guests.infants !== 1 ? "s" : ""}
              </span>
            </button>
          </div>
          <div className="room">
            <button
              className="rooms-button"
              type="button"
              onClick={toggleRoomModal}
            >
              <span className="rooms-label">Rooms</span>
              <span className="rooms-info">
                {rooms} Room{rooms > 1 ? "s" : ""}
              </span>
            </button>
          </div>
        </div>
        <hr className="horizontal-line" />

        <button className="book-now-button">
          {loading ? (
            "Fetching Pricing..."
          ) : (
            <Link to="/bookingpayment">Proceed to Payment</Link>
          )}
        </button>

        {pricing && !loading && (
          <div className="pricing-details">
            <h4>Pricing Breakdown</h4>
            <p>Check In: {formatDate(checkIn)}</p>
            <p>Check Out: {formatDate(checkOut)}</p>
            <p>
              Guests: {guests.adults} Adult{guests.adults !== 1 ? "s" : ""},{" "}
              {guests.children} Child{guests.children !== 1 ? "ren" : ""},{" "}
              {guests.infants} Infant{guests.infants !== 1 ? "s" : ""}
            </p>
            <p>Rooms: {rooms}</p>
            <p>
              Room Price: ₹{pricing.roomPrice} x {rooms}
            </p>
            <p>Guest Fees: ₹{pricing.guestFees}</p>
            <p>Taxes: ₹{pricing.taxes}</p>
            <p>
              <strong>Total: ₹{pricing.total}</strong>
            </p>
          </div>
        )}

        {error && <p className="error-message">{error}</p>}

        {/* Modals for guest and room selection */}
        {modal && (
          <div className="modal" onClick={toggleModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h4>Select Guests</h4>
              <CartToggle
                label="Adults"
                amount={guests.adults}
                setDecrease={() =>
                  setGuests((prev) => ({
                    ...prev,
                    adults: Math.max(prev.adults - 1, 0),
                  }))
                }
                setIncrease={() =>
                  setGuests((prev) => ({
                    ...prev,
                    adults: Math.min(prev.adults + 1, 10),
                  }))
                }
              />
              <CartToggle
                label="Children"
                amount={guests.children}
                setDecrease={() =>
                  setGuests((prev) => ({
                    ...prev,
                    children: Math.max(prev.children - 1, 0),
                  }))
                }
                setIncrease={() =>
                  setGuests((prev) => ({
                    ...prev,
                    children: Math.min(prev.children + 1, 5),
                  }))
                }
              />
              <CartToggle
                label="Infants"
                amount={guests.infants}
                setDecrease={() =>
                  setGuests((prev) => ({
                    ...prev,
                    infants: Math.max(prev.infants - 1, 0),
                  }))
                }
                setIncrease={() =>
                  setGuests((prev) => ({
                    ...prev,
                    infants: Math.min(prev.infants + 1, 5),
                  }))
                }
              />
              <button
                className="close-modal"
                type="button"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {roomModal && (
          <div className="modal" onClick={toggleRoomModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h4>Select Rooms</h4>
              <CartToggle
                label="Rooms"
                amount={rooms}
                setDecrease={() => setRooms((prev) => Math.max(prev - 1, 1))}
                setIncrease={() => setRooms((prev) => prev + 1)}
              />
              <button
                className="close-modal"
                type="button"
                onClick={toggleRoomModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
