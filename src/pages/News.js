import React from "react";
import { NavigationBar, NewsList, Footer } from "../components";

const News = () => {
  return (
    <div className="news">
      <NavigationBar />
      <NewsList />
      <Footer />
    </div>
  );
};

export default News;
