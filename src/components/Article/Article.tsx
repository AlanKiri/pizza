import React from "react";
import "./Article.scss";

const Article = ({ Image, Time, Title, Description }: { Image: any; Time: string; Title: string; Description: string }) => {
  return (
    <div className="article">
      <img src={Image} alt="Image" />
      <h5>{Time}</h5>
      <h4>{Title}</h4>
      <p>{Description}</p>
    </div>
  );
};

export default Article;
