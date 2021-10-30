import React, { useContext } from "react";
import { MoneyContext } from "../contexts/MoneyContext";
import Product from "./Product";

const ProductList = (props) => {
  const context = useContext(MoneyContext);
  //console.log(context);
  return (
    <div>
        
      {context.state.product.map((product) => (
        <Product key={product.id} product={product}  />
      ))}
    </div>
  );
};

export default ProductList;
