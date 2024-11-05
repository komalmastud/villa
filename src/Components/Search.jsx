import React, { useState } from "react";
import { DatePicker } from "antd";
import "./Search.css";
import CartToggle from "./Carttoggle";

const Search = () => {
  const [modal, setModal] = useState(false);
  const [guests, setGuests] = useState({ adults: 1, rooms: 1, infants: 0 });
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleModal = () => setModal((prev) => !prev);

  const handleSearch = () => {
    if (!location) {
      alert("Please enter a location.");
      return;
    }

    const validLocations = ["Solapur", "Indapur"];
    if (!validLocations.includes(location)) {
      alert("Page Not Found!");
      return;
    }

    console.log("Searching for location:", location);
    toggleModal();
  };

  return (
    <fieldset className="search">
      {isMobile ? (
        <div className="mobile-search">
          <input
            type="text"
            placeholder="Search..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
        </div>
      ) : (
        <>
          <div className="location">
            <label>Location</label>
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="checkin">
            <label>Check In</label>
            <DatePicker onChange={(date) => setCheckIn(date)} />
          </div>
          <div className="checkout">
            <label>Check Out</label>
            <DatePicker onChange={(date) => setCheckOut(date)} />
          </div>
          <div className="guest">
            <button type="button" onClick={toggleModal}>
              Guests
            </button>
          </div>
          <div className="black">
            <button type="button" onClick={handleSearch}>
              SEARCH
            </button>
          </div>
        </>
      )}

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
              label="Rooms"
              amount={guests.rooms}
              setDecrease={() =>
                setGuests((prev) => ({
                  ...prev,
                  rooms: Math.max(prev.rooms - 1, 0),
                }))
              }
              setIncrease={() =>
                setGuests((prev) => ({
                  ...prev,
                  rooms: Math.min(prev.rooms + 1, 5),
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
            <button className="close-modal" type="button" onClick={toggleModal}>
              Close
            </button>
            <button className="ok-modal" type="button" onClick={toggleModal}>
              APPLY & SEARCH
            </button>
          </div>
        </div>
      )}
    </fieldset>
  );
};

export default Search;
