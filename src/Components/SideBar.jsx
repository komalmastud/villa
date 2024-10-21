import React, { useState } from "react";
import { DatePicker } from "antd";
import "./Sidebar.css"; // Update the path if necessary
import CartToggle from "./Carttoggle"; // Assuming you have this for guest toggles

const Sidebar = () => {
  const [guestCount, setGuestCount] = useState({ adults: 1, rooms: 1 });
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [isCheckInOpen, setCheckInOpen] = useState(false);
  const [isCheckOutOpen, setCheckOutOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
    setCheckInOpen(false);
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
    setCheckOutOpen(false);
  };

  const toggleModal = () => setModal((prev) => !prev);

  return (
    <div className="pink-square">
      <div className="search-price">₹ 43,000</div>
      <div className="inner-square">
        <div className="button-row">
          {isCheckInOpen ? (
            <DatePicker
              onChange={handleCheckInChange}
              onBlur={() => setCheckInOpen(false)}
              className="date-picker"
              placeholder="Add Date"
              size="small"
            />
          ) : (
            <button
              className="check-in-button"
              onClick={() => setCheckInOpen(true)}
            >
              <strong style={{ color: "black" }}>
                {checkInDate
                  ? checkInDate.format("YYYY-MM-DD")
                  : "Add Check-In Date"}
              </strong>
            </button>
          )}
          {isCheckOutOpen ? (
            <DatePicker
              onChange={handleCheckOutChange}
              onBlur={() => setCheckOutOpen(false)}
              className="date-picker"
              placeholder="Add Date"
              size="small"
            />
          ) : (
            <button
              className="select-date-button"
              onClick={() => setCheckOutOpen(true)}
            >
              <strong style={{ color: "black" }}>
                {checkOutDate
                  ? checkOutDate.format("YYYY-MM-DD")
                  : "Add Check-Out Date"}
              </strong>
            </button>
          )}
        </div>
        <div className="button-row">
          <button className="side-guests-button" onClick={toggleModal}>
            Guests: {guestCount.adults}
          </button>
          <button className="rooms-button" onClick={toggleModal}>
            Rooms: {guestCount.rooms}
          </button>
        </div>
        <div className="blue-text">Select dates for best price</div>
        <button className="final-select-button">SELECT DATE</button>
      </div>

      {modal && (
        <div className="modal" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>Select Guests</h4>
            <CartToggle
              label="Adults"
              amount={guestCount.adults}
              setDecrease={() =>
                setGuestCount((prev) => ({
                  ...prev,
                  adults: Math.max(prev.adults - 1, 0),
                }))
              }
              setIncrease={() =>
                setGuestCount((prev) => ({
                  ...prev,
                  adults: Math.min(prev.adults + 1, 10),
                }))
              }
            />
            <CartToggle
              label="Rooms"
              amount={guestCount.rooms}
              setDecrease={() =>
                setGuestCount((prev) => ({
                  ...prev,
                  rooms: Math.max(prev.rooms - 1, 0),
                }))
              }
              setIncrease={() =>
                setGuestCount((prev) => ({
                  ...prev,
                  rooms: Math.min(prev.rooms + 1, 5),
                }))
              }
            />
            <button className="close-modal" type="button" onClick={toggleModal}>
              Close
            </button>
            <button className="ok-modal" type="button" onClick={toggleModal}>
              APPLY & SEARCH
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
