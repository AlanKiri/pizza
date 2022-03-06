import React from "react";
import "./News.scss";
import Article from "../Article/Article";
import Sample from "../../assets/pizza.svg";

const News = () => {
  let moment = require("moment"); // require
  let date = new Date();
  let formattedDate = moment(date).format("YYYY-MM-DD");
  let temp =
    "Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean et tortor.";
  return (
    <div className="news-element content-margin">
      <div className="news-element__container">
        <Article Image={Sample} Time={formattedDate} Title="mes atsidarome" Description={temp} />
        <Article Image={Sample} Time={formattedDate} Title="mes atsidarome" Description={temp} />
        <Article Image={Sample} Time={formattedDate} Title="mes atsidarome" Description={temp} />
        <Article Image={Sample} Time={formattedDate} Title="mes atsidarome" Description={temp} />
      </div>
    </div>
  );
};

export default News;
