import React from "react";
import sw from "../../../../sw.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="center">
      <img src={sw} alt="logo" />
    </header>
  );
};

export default Header;
