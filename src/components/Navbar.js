import React from "react";
import Logo from "../images/coinize2.svg";
import { NavLink } from "react-router-dom";

const Navbar = ({ handleChange }) => {
  let activeClassName = "nav-active";

  return (
    <nav className="coin-search">
      <div className="coin-logo-container">
        <NavLink to="/">
          <div className="coin-image-container">
            <img className="coin-logo" src={Logo} alt="logo" />
          </div>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="coin-pages-container">
            <h3>Market</h3>
          </div>
        </NavLink>
        <NavLink
          to="/exchange"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="coin-pages-container">
            <h3>Exchange</h3>
          </div>
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="coin-pages-container">
            <h3>Categories</h3>
          </div>
        </NavLink>
      </div>

      <form className="coin-input-container">
        <input
          type="text"
          placeholder="Search a currency"
          className="coin-input"
          onChange={handleChange}
        />
      </form>
    </nav>
  );
};

export default Navbar;
