import React from "react";
import "./FoodNavbar.scss";
import Cart from "../../assets/cart.svg";
const FoodNavbar = () => {
  return (
    <div className="food content-margin">
      <div className="food-menu">
        <p>
          <a href="#pizzas">Picos</a>
        </p>
        <p>
          <a href="#drinks">Gerimai</a>
        </p>
        <p>
          <a href="#desserts">Desertai</a>
        </p>
        <p>
          <a href="#snacks">Užkandžiai</a>
        </p>
        <p>
          <a href="#discounts">Akcijos</a>
        </p>
      </div>
      <div className="food-checkout">
        <div className="food-checkout__button">
          <img src={Cart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodNavbar;
