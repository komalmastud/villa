//import React from "react";
import { DatePicker } from "antd";
<<<<<<< HEAD

const Search = () => {
=======
import { useState } from "react";

const Search = () => {
  const [values, setValues] = useState({
    room: "",
  });
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
>>>>>>> b0d5916 (repo changes)
  return (
    <>
      <fieldset className="search">
        <div className="location">
<<<<<<< HEAD
          <button>Location</button>
=======
          <button>
            Location
            <select name="room" id="room" onChange={handleChanges}>
              <option value="single">Where you want to go</option>
              <option value="double">Pune</option>
              <option value="other">Mumbai</option>
              <option value="double">Nashik</option>
              <option value="other">Lonavala</option>
              <option value="double">Alibag</option>
              <option value="other">Shimla</option>
            </select>
          </button>
>>>>>>> b0d5916 (repo changes)
        </div>
        <div className="checkin">
          <button>
            check in
            <DatePicker></DatePicker>
          </button>
        </div>
        <div className="checkout">
          <button>
            check out
            <DatePicker></DatePicker>
          </button>
        </div>
        <div className="guest">
          <button>Guests</button>
        </div>

        <div className="black">
          <button>SEARCH</button>
        </div>
      </fieldset>
    </>
  );
};

export default Search;
