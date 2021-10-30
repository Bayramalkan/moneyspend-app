import React, { useContext, useState } from "react";
import { MoneyContext } from "../contexts/MoneyContext";

const Product = ({ product }) => {
  const context = useContext(MoneyContext);

  // const [cart,setCart] = useState([])
  // const addBasket = () =>{
  //     setCart([...cart,product])
  // }
  console.log(product);
  
  let storedItem = context.state.cart.find((o) => o.id === product.id);

  const cartDisabled = storedItem ?  true  : false;
  
  return (
    <div>
      {product.title} = {product.price} TL
      <button
        disabled={cartDisabled || context.totalPrice + product.price > context.state.money}
        onClick={() => context.addToCart(product)}
      >
        sepete ekle
      </button>
      <button disabled={!cartDisabled || context.totalPrice + product.price > context.state.money } onClick={() => context.increase(product.id)}>arttır</button>
      <button disabled={!cartDisabled } onClick={() =>  context.decrease(product.id)}>azalt</button>
      <button
        disabled={!cartDisabled }
        onClick={() => context.removeFromCart(product.id)}
      >
        sepetten çıkart
      </button>
    </div>
  );
};

export default Product;
