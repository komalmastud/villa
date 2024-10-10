import React from "react";

const CartToggle = ({ label, amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-toggle">
      <h5>
        {label}: {amount}
      </h5>
      <button onClick={setDecrease}>-</button>
      <button onClick={setIncrease}>+</button>
    </div>
  );
};

export default CartToggle;
