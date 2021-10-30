import React, { useContext } from "react";
import { MoneyContext } from "../contexts/MoneyContext";

const Cart = ({ cartItem }) => {
  const context = useContext(MoneyContext);
  return (
    <div>
      <h3>
        {cartItem.count} {cartItem.title} 
      </h3>
      
    </div>
  );
};

export default Cart;
