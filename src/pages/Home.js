import React from "react";
import { NavigationBar, FoodNavbar, Header, Store, Footer } from "../components";

const Home = () => {
  return (
    <div className="home">
      <NavigationBar />
      <FoodNavbar />
      <Header />
      <Store />
      <Footer />
    </div>
  );
};

export default Home;
