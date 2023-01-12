import { Grid } from "@mui/material";
import { format } from "date-fns";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/coinize2.svg";

const Footer = () => {
  return (
    <footer>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
        <Grid item lg={3} md={4} sm={12}>
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
        <Grid item lg={2} md={2} sm={4}>
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
        <Grid item lg={2} md={2} sm={4}>
          <ul>
            {" "}
            <h4>Info</h4>
            <li>About Us</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>
        </Grid>
        <Grid item lg={2} md={2} sm={4}>
          <ul>
            {" "}
            <h4>Community</h4>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Reddit</li>
          </ul>
        </Grid>
        <Grid item lg={3} md={4} sm={4}>
          <div className="subscribe-container">
            <p>
              Subscribe to get the latest crypto news, updates, and reports by
              subscribing to our free newsletter.
            </p>
            <form className="footer-form">
              <input type="text" placeholder="Email" />
              <button>Subscribe</button>
            </form>
          </div>
        </Grid>
      </Grid>
      <hr />
      <div className="copywright-section">
        <p>©Coinize {format(new Date(), "yyyy")}</p>
        <p>Made with 💙 by Sujoy Dutta</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
