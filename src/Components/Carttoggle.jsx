import React from "react";

const CartToggle = ({ label, amount, setDecrease, setIncrease }) => {
  return (
    <div>
      <span>{label}:</span>
      <button type="button" onClick={setDecrease}>
        -
      </button>
      <span>{amount}</span>
      <button type="button" onClick={setIncrease}>
        +
      </button>
    </div>
  );
};

export default CartToggle;
