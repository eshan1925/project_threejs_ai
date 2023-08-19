import React from "react";
import "./product.css";
import { product } from "../assets";

const Product = () => {
  return (
    <div>
      <div className="product">
        <img src={product} alt="Product 1" />
        <h3>Product 1</h3>
        <p>$19.99</p>
      </div>
    </div>
  );
};

export default Product;
