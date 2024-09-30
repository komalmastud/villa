import React from "react";

const CartToggle = ({ label, amount, setDecrease, setIncrease }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <button onClick={setDecrease}>-</button>
        <span>{amount}</span>
        <button onClick={setIncrease}>+</button>
      </div>
    </div>
  );
};

export default CartToggle;
