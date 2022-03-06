import React from "react";
import "./Footer.scss";

import Telegram from "../../assets/telegram.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";

const Bottom = () => {
  return (
    <div className="footer">
      <div className="footer-container content-margin">
        <div className="column">
          <div className="column-row">
            <h4>darbas</h4>
            <p>Valytojas</p>
            <p>Kepejas</p>
            <p>Vadybininkas</p>
          </div>
          <div className="column-row">
            <h4>kontaktai</h4>
            <p>Telefonas: +37061347423</p>
            <p>El. Pastas: firepizza@gmail.com</p>
          </div>
        </div>
        <div className="column">
          <div className="column-row">
            <h4>Darbo laikas</h4>
            <p>
              I-IV <span>9:00 - 23:00</span>
            </p>
            <p>
              V <span>10:00 - 23:00</span>
            </p>
            <p>
              VI-VII <span>10:00 - 22:00</span>
            </p>
          </div>
          <div className="column-row">
            <h4>Sekite mus</h4>
            <a href="https://web.telegram.org/k/">
              <img src={Telegram} alt="Telegram" />
            </a>

            <a href="https://www.instagram.com/">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={Facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-container__column"></div>
    </div>
  );
};

export default Bottom;
