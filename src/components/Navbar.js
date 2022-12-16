import React from "react";
import Logo from "../images/coinize2.svg";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ handleChange }) => {
  let activeClassName = "nav-active";
  const location = useLocation();
  const isActive = location.pathname;

  return (
    <nav className="coin-search">
      <div className="coin-logo-container">
        <NavLink to="/">
          <div className="coin-image-container" style={{ userSelect: "none" }}>
            <img className="coin-logo" src={Logo} alt="logo" />
          </div>
        </NavLink>
        <NavLink to="/">
          <div
            className={`coin-pages-container ${
              isActive === "/" ? activeClassName : undefined
            }`}
          >
            <h3>Market</h3>
          </div>
        </NavLink>
        <NavLink to="/exchange">
          <div
            className={`coin-pages-container ${
              isActive === "/exchange" ? activeClassName : undefined
            }`}
          >
            <h3>Exchange</h3>
          </div>
        </NavLink>
        <NavLink to="/categories">
          <div
            className={`coin-pages-container ${
              isActive === "/categories" ? activeClassName : undefined
            }`}
          >
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
