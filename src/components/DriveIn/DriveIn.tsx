import React from "react";
import "./DriveIn.scss";
import Slide1 from "../../assets/slide1.svg";
import Slide2 from "../../assets/slide2.svg";
import Slide3 from "../../assets/slide3.svg";
import Market from "../../assets/market.svg";
import Maps from "../../assets/maps.svg";
import Emoji from "../../assets/emoji.svg";

const DriveIn = () => {
  return (
    <div className="drivein">
      <div className="drivein-slide content-margin">
        <img src={Slide1} alt="Slide" />
        <div className="slide-content">
          <h4>Greičiausias būdas atsiimti užsakymą</h4>
          <p>Pateikite užsakymą per mobiliąją programėlę ar išmanųjį telefoną ir laukite pranešimo apie jūsų užsakymo pasirengimą</p>
          <img src={Market} alt="Market" className="slide-content__links" />
        </div>
      </div>

      <div className="drivein-slide content-margin">
        <img src={Slide2} alt="Slide" />
        <div className="slide-content">
          <h4>Atvykyte į užsakymo atsiėmimo vietą</h4>
          <p>Gavę PUSH arba SMS pranešimą, atvykite į filialą, kuriame atlikote užsakymą</p>
          <div className="slide-content__maps">
            <img src={Maps} alt="Maps" />
            <h5>Raskite mus žemėlapiuose</h5>
          </div>
        </div>
      </div>

      <div className="drivein-slide content-margin">
        <img src={Slide3} alt="Slide" />
        <div className="slide-content">
          <h4>Sumokėkite ir atsiimkite</h4>
          <p>Sumokėkite už užsakymą ir atsiimkite užsakymą prie specialaus lauko lango, tada mėgaukitės maistu</p>
          <div className="slide-content__emoji">
            <img src={Emoji} alt="Emoji" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriveIn;
