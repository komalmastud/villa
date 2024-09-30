import React from "react";

const CartToggle = ({ label, amount, setDecrease, setIncrease }) => (
  <div className="cart-toggle">
    <span>{label}</span>
    <button onClick={setDecrease}>-</button>
    <span>{amount}</span>
    <button onClick={setIncrease}>+</button>
  </div>
);

export default CartToggle;
