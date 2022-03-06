import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.scss";

import Icon from "../../assets/icon.svg";
import Telegram from "../../assets/telegram.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Menu from "../../assets/menu.svg";

const NavigationBar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="navigation content-margin">
      <div className="navigation-logo">
        <Link to="/">
          <img src={Icon} alt="Logo" />
          <p>Fire pizza</p>
        </Link>
      </div>

      <div className={active ? "navigation__active navigation-menu" : "navigation-menu"}>
        <div className="navigation-menu__buttons">
          <Link to="/Catalog">
            <p>Maistas</p>
          </Link>
          <Link to="/Drive-in">
            <p>Drive-in</p>
          </Link>
          <Link to="/News">
            <p>Naujienos</p>
          </Link>
        </div>
      </div>
      <div className={active ? "navigation__active navigation-links" : "navigation-links"}>
        <div className="navigation-links__elements">
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
      <div className="navigation-button">
        <img
          src={Menu}
          alt="Menu toggle"
          onClick={() => {
            setActive(!active);
          }}
        />
      </div>
    </div>
  );
};

export default NavigationBar;
