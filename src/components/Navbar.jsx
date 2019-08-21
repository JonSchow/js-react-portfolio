import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <nav>
        <img className="logo" src="./img/logo.svg" />
        <ul className="menu-right">
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/work">
              Work
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <div>
          <button className="burger-menu" type="button">
            MENU
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
