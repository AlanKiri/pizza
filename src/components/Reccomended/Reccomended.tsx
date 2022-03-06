import React from "react";
import "./Reccomended.scss";

const Reccomended = ({
  Image,
  Title,
  Price,
  Ingredients,
  Compact,
}: {
  Image: any;
  Title: string;
  Ingredients?: string;
  Price?: number;
  Compact: boolean;
}) => {
  return (
    <>
      {Compact && (
        <div className="store-reccomended__element_compact">
          <img src={Image} alt="" />
          <div>
            <h4>{Title}</h4>
            <p>{Price} €</p>
          </div>
        </div>
      )}

      {!Compact && (
        <>
          {" "}
          <div className="store-reccomended__element">
            <img src={Image} alt="" />
            <div>
              <h4>{Title}</h4>
              <p>{Ingredients}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Reccomended;
