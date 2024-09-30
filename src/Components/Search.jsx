import React, { useState } from "react";
import { DatePicker } from "antd";
import CartToggle from "./Carttoggle"; // Ensure you have this component

const Search = () => {
  const [values, setValues] = useState({ room: "" });
  const [modal, setModal] = useState(false);
  const [guests, setGuests] = useState({ adults: 1, rooms: 1, infants: 0 });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const toggleModal = () => setModal((prev) => !prev);
  const handleModalContentClick = (e) => e.stopPropagation();

  const setDecrease = (type) => {
    setGuests((prev) => ({ ...prev, [type]: Math.max(prev[type] - 1, 0) }));
  };

  const setIncrease = (type, max) => {
    setGuests((prev) => ({ ...prev, [type]: Math.min(prev[type] + 1, max) }));
  };

  return (
    <>
      <fieldset className="search">
        <div className="location">
          <button type="button">
            Location
            <select name="room" id="room" onChange={handleChanges}>
              <option value="">Where you want to go</option>
              <option value="pune">Pune</option>
              <option value="mumbai">Mumbai</option>
              <option value="nashik">Nashik</option>
              <option value="lonavala">Lonavala</option>
              <option value="alibag">Alibag</option>
              <option value="shimla">Shimla</option>
            </select>
          </button>
        </div>
        <div className="checkin">
          <button type="button">
            Check In
            <DatePicker />
          </button>
        </div>
        <div className="checkout">
          <button type="button">
            Check Out
            <DatePicker />
          </button>
        </div>
        <div className="guest">
          <button type="button" onClick={toggleModal}>
            Guests
          </button>
        </div>

        {modal && (
          <div className="modal" onClick={toggleModal}>
            <div className="overlay" />
            <div className="modal-content" onClick={handleModalContentClick}>
              <h4>Select Guests</h4>
              <CartToggle
                label="Adults"
                amount={guests.adults}
                setDecrease={() => setDecrease("adults")}
                setIncrease={() => setIncrease("adults", 10)} // Max adults
              />
              <CartToggle
                label="Rooms"
                amount={guests.rooms}
                setDecrease={() => setDecrease("rooms")}
                setIncrease={() => setIncrease("rooms", 5)} // Max rooms
              />
              <CartToggle
                label="Infants"
                amount={guests.infants}
                setDecrease={() => setDecrease("infants")}
                setIncrease={() => setIncrease("infants", 5)} // Max infants
              />
              <button
                className="close-modal"
                type="button"
                onClick={toggleModal}
              >
                Close
              </button>
              <button className="ok-modal" type="button" onClick={toggleModal}>
                APPLY & SEARCH
              </button>
            </div>
          </div>
        )}

        <div className="black">
          <button type="submit">SEARCH</button>
        </div>
      </fieldset>
    </>
  );
};

export default Search;
