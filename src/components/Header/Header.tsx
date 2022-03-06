import React from "react";
import Banner from "../../assets/header.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header content-margin">
      <img src={Banner} alt="" />
    </div>
  );
};

export default Header;
