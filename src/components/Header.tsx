import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header__container">
      <div className="header__logo">
        {" "}
        <Link
          className="header__santuary"
          style={{
            textDecoration: "none",
            color: "black"
          }}
          to="/"
        >
          <h3>Santuary Blue</h3>
        </Link>
      </div>
      <div className="header__nav">
        <Link
          className="header_about"
          style={{
            textDecoration: "none",
            color: "black"
          }}
          to="/aboutUs"
        >
          <h3>About Us</h3>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black"
          }}
          to="/shopping"
        >
          <h3>Shopping</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
