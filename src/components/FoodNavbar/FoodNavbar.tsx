import React from "react";
import "./FoodNavbar.scss";
const FoodNavbar = () => {
  return (
    <div className="food content-padding">
      <div className="food-menu">
        <p>
          <a href="#reccomended">Rekomendacijos</a>
        </p>
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
      <div className="food-checkout"></div>
    </div>
  );
};

export default FoodNavbar;
