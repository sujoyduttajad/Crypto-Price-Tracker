import { Grid } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/coinize2.svg";

const Footer = () => {
  return (
    <footer>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div className="logo-container" style={{ userSelect: "none" }}>
            <NavLink to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
            <p>
              Coinize a Crypto tracker web app that allows you to monitor and
              track your Cryptocurrencies while learning about them. Come join
              us, and head for the unexpected miracle with Coinize.
            </p>
          </div>

          <div></div>
        </Grid>
        <Grid item xs={2}>
          <ul>
            {" "}
            <h4>Explore</h4>
            <NavLink className="styled-link" to="/">
              <li>Market</li>
            </NavLink>
            <NavLink className="styled-link" to="/exchange">
              <li>Exchange</li>
            </NavLink>
            <NavLink className="styled-link" to="/categories">
              <li>Categories</li>
            </NavLink>
          </ul>
        </Grid>
        <Grid item xs={2}>
          <ul>
            {" "}
            <h4>About coinize</h4>
            <li>About Us</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>
        </Grid>
        <Grid item xs={2}>
          <ul>
            {" "}
            <h4>Community</h4>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Reddit</li>
          </ul>
        </Grid>
        <Grid item xs={3}>
          <div className="subscribe-container">
            <p>
              Get the latest crypto news, updates, and reports by subscribing to
              our free newsletter.
            </p>
            <form className="footer-form">
              <input type="text" placeholder="Email" />
              <button className="coin-button">Subscribe</button>
            </form>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
