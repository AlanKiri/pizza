import React from "react";
import { NavigationBar, FoodNavbar, Store, Footer } from "../components";

const Catalog = () => {
  return (
    <div className="catalog">
      <NavigationBar />
      <FoodNavbar />
      <Store />
      <Footer />
    </div>
  );
};

export default Catalog;
