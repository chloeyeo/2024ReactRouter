import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/style.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex justify-content-between">
        <h1>logo</h1>
        <ul className="topMenu d-flex">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/com">COMPANY</NavLink>
          </li>
          <li>
            <NavLink to="/prod">PRODUCT</NavLink>
          </li>
          <li>
            <NavLink to="/comm">COMMUNITY</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
