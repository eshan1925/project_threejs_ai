import React from "react";
import "../components/product.css";
import Product from "../components/product";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../components";

const Catalogue = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/customize");
  };
  return (
    <div>
      <div className="navbar">
        <div id="logo">Logo</div>
        <div id="user-greeting">Hi, eshan1925</div>
      </div>
      <div className="center-text">
        Here is the set of most trending searches this week which we have
        figured out for you!!!
        <br />
      </div>
      <div className="product-container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="button-centering">
        <CustomButton
            type="filled"
            title="Create more!!"
            handleClick={navigateToHome}
            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
        />
      </div>
    </div>
  );
};

export default Catalogue;
