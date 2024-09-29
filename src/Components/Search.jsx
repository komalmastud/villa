import React, { useState } from "react";
import { DatePicker } from "antd";
import CartToggle from "./Carttoggle"; // Make sure to import your CartToggle component

const Search = () => {
  const [values, setValues] = useState({ room: "" });
  const [modal, setModal] = useState(false);

  const [adults, setAdults] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);
  const [infants, setInfants] = useState(0);

  const maxAdults = 10;
  const maxRooms = 5;
  const maxGuests = 10; // Assuming max guests including adults and infants
  const maxInfants = 5;

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation(); // Prevent click from closing the modal
  };

  const setDecrease = (setter) => {
    setter((prev) => Math.max(prev - 1, 0)); // Ensure minimum is 0
  };

  const setIncrease = (setter, max) => {
    setter((prev) => Math.min(prev + 1, max)); // Ensure maximum is within limit
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
            <div className="overlay"></div>
            <div className="modal-content" onClick={handleModalContentClick}>
              <h4>Select Guests</h4>
              <CartToggle
                label="Adults"
                amount={adults}
                setDecrease={() => setDecrease(setAdults)}
                setIncrease={() => setIncrease(setAdults, maxAdults)}
              />
              <CartToggle
                label="Rooms"
                amount={rooms}
                setDecrease={() => setDecrease(setRooms)}
                setIncrease={() => setIncrease(setRooms, maxRooms)}
              />
              <CartToggle
                label="Guests"
                amount={guests}
                setDecrease={() => setDecrease(setGuests)}
                setIncrease={() => setIncrease(setGuests, maxGuests)}
              />
              <CartToggle
                label="Infants"
                amount={infants}
                setDecrease={() => setDecrease(setInfants)}
                setIncrease={() => setIncrease(setInfants, maxInfants)}
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
