import React from "react";
import sw from "../../../../sw.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="center">
      <img src={sw} alt="logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Characters</a>
          </li>
          <li>
            <a href="/species">Species</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
