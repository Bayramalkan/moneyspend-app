import React, { useContext } from "react";
import Cart from "./Cart";
import { MoneyContext } from "../contexts/MoneyContext";

const CartList = () => {
  const context = useContext(MoneyContext);
  //console.log(context);
  return (
    <div>
        {
            context.state.cart.map(cartItem=>(
                
                <Cart key={cartItem.id} cartItem={cartItem} />
            ))
        }
         Toplam = {context.totalPrice}{" "}
    </div>
  );
};

export default CartList;
