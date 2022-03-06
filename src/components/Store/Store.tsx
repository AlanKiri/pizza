import React from "react";
import "./Store.scss";
import Reccomended from "../Reccomended/Reccomended";
import Card from "../../assets/pizza.svg";

const Store = () => {
  let temp: string = "Cheese, tomatoes, leaves, beef, chicken, tomato sauce, mushrooms";
  return (
    <div className="store  content-margin">
      <h4>Rekomenduojame</h4>
      <div className="store-reccomended" id="reccomended">
        <Reccomended Image={Card} Title="Mushroom" Price={11.5} Compact />
        <Reccomended Image={Card} Title="Mushroom" Price={11.5} Compact />
        <Reccomended Image={Card} Title="Mushroom" Price={11.5} Compact />
        <Reccomended Image={Card} Title="Mushroom" Price={11.5} Compact />
        <Reccomended Image={Card} Title="Mushroom" Price={11.5} Compact />
        <Reccomended Image={Card} Title="Mushroom" Price={11.5} Compact />
        <Reccomended Image={Card} Title="Mushroom" Price={11.5} Compact />
        <Reccomended Image={Card} Title="Mushroom" Price={11.5} Compact />
        <Reccomended Image={Card} Title="Mushroom" Price={11.5} Compact />
        <Reccomended Image={Card} Title="Mushroom" Price={11.5} Compact />
      </div>
      <h4>Picos</h4>
      <div className="store-pizzas" id="pizzas">
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
      </div>
      <h4>Gerimai</h4>
      <div className="store-drinks" id="drinks">
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
      </div>
      <h4>Desertai</h4>
      <div className="store-desserts" id="desserts">
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
      </div>
      <h4>Užkandžiai</h4>
      <div className="store-snacks" id="snacks">
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
      </div>
      <h4>Akcijos</h4>
      <div className="store-discounts" id="discounts">
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
        <Reccomended Image={Card} Title="Mushroom" Ingredients={temp} Compact={false} />
      </div>
    </div>
  );
};

export default Store;
