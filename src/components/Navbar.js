import React, { useEffect, useState } from "react";
import Logo from "../images/coinize2.svg";
import { Link, useLocation } from "react-router-dom";
import { useStyles } from "../materialUi/GlobalStyles";

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

  // const handleIncreaseSize = (e) => {
  //   e.currentTarget.width = "34rem";
  //   e.currentTarget.style.transition =
  //     "transform 333ms cubic-bezier(.4,0,.22,1)";
  // }

  const classes = useStyles();

  return (
    <nav className={`navbar-container ${scrolled ? "header-scroll" : ""}`}>
      <div className="coin-logo-container">
        <div className="coin-image-container" style={{ userSelect: "none" }}>
          <Link to="/">
            <img className="coin-logo" src={Logo} alt="logo" />
          </Link>
        </div>

        <div
          className={`coin-pages-container ${
            isActive === "/market" ? activeClassName : undefined
          }`}
        >
          <Link to="/market">
            <h3>Market</h3>
          </Link>
        </div>

        <div
          className={`coin-pages-container ${
            isActive === "/exchange" ? activeClassName : undefined
          }`}
        >
          <Link to="/exchange">
            <h3>Exchange</h3>
          </Link>
        </div>

        <div
          className={`coin-pages-container ${
            isActive === "/categories" ? activeClassName : undefined
          }`}
        >
          <Link to="/categories">
            <h3>Categories</h3>
          </Link>
        </div>
      </div>
      {coinId ? null : (
        <form className="coin-input-container">
          <input
            type="text"
            placeholder="Search a currency"
            className="coin-input"
            onChange={handleChange}
            // onClick={handleIncreaseSize}
          />
          {/* <TextField className={classes.textfield} id="outlined-basic" variant="outlined" /> */}
        </form>
      )}
    </nav>
  );
};

export default Navbar;
