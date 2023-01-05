import React, { useEffect, useState } from "react";
import Logo from "../images/coinize2.svg";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ handleChange, coinId }) => {
  const [scrolled, setScrolled] = useState();

  let activeClassName = "nav-active";
  const location = useLocation();
  const isActive = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar-container ${scrolled ? "header-scroll" : ""}`}>
      <div className="coin-logo-container">
        <div className="coin-image-container" style={{ userSelect: "none" }}>
          <NavLink to="/">
            <img className="coin-logo" src={Logo} alt="logo" />
          </NavLink>
        </div>

        <div
          className={`coin-pages-container ${
            isActive === "/market" ? activeClassName : undefined
          }`}
        >
          <NavLink to="/market">
            <h3>Market</h3>
          </NavLink>
        </div>

        <div
          className={`coin-pages-container ${
            isActive === "/exchange" ? activeClassName : undefined
          }`}
        >
          <NavLink to="/exchange">
            <h3>Exchange</h3>
          </NavLink>
        </div>

        <div
          className={`coin-pages-container ${
            isActive === "/categories" ? activeClassName : undefined
          }`}
        >
          <NavLink to="/categories">
            <h3>Categories</h3>
          </NavLink>
        </div>
      </div>
      {coinId ? null : (
        <form className="coin-input-container">
          <input
            type="text"
            placeholder="Search a currency"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      )}
    </nav>
  );
};

export default Navbar;
