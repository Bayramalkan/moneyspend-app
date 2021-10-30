import React, { useContext, useEffect, useState } from "react";
import { MoneyContext } from "./contexts/MoneyContext";
import ProductList from "./components/ProductList";
import products from "./products.json";
import Header from "./components/Header";
import CartList from "./components/CartList";

const data = [
  { id: 1, title: "ayakkabı", price: 100 },
  { id: 2, title: "klavye", price: 50 },
  { id: 3, title: "telefon", price: 3500 },
  { id: 4, title: "laptop", price: 5000 },
];

function App() {

  const [state,setState] = useState({
    product: data,
    cart: [],
    money:10000
  })
  
  

  const totalAmount = state.cart.reduce((total,product)=>(total=total+product.count),0)
  const totalPrice = state.cart.reduce((total,product)=>(total=total+product.count*product.price),0)
  //const spend = state.money.reduce((total,product)=>(total = total-product.price),state.money)
  
  const addToCart = product => setState({
    ...state,
    count: 1,
    cart: state.cart.find(cartItem => cartItem.id===product.id)
    
    ? state.cart.map(cartItem=>cartItem.id === product.id 
    ? {...cartItem, count:cartItem.count+1}:cartItem)
    : [...state.cart,{...product,count:1}]
  })
  

  const removeFromCart = id => setState({
    ...state,
    cart: state.cart.filter(cartItem=>cartItem.id !== id)
  })
  const decrease = id =>{setState({
    ...state,   
    cart: state.cart.map(cartItem=> cartItem.id === id ? {...cartItem, count: cartItem.count>1 ? cartItem.count-1 :1}: cartItem)
    })
    
  }
  const increase = id =>{setState({
    ...state,
    cart: state.cart.map(cartItem=>cartItem.id === id ? {...cartItem, count:
    cartItem.count +1}:cartItem)
  })}

  console.log(state.cart);



  return (
    <MoneyContext.Provider value={{state:state, addToCart,removeFromCart,decrease,increase,totalAmount,totalPrice }}>
      <div className="App">
        <Header/>
        <ProductList />
        <CartList />
      </div>
    </MoneyContext.Provider>
  );
}

export default App;
