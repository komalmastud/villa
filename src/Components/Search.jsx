//import React from "react";
import { DatePicker } from "antd";

const Search = () => {
  return (
    <>
      <fieldset className="search">
        <div className="location">
          <button>Location</button>
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
