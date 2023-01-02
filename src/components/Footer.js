import { Grid } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/coinize2.svg";

const Footer = () => {
  return (
    <footer>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <NavLink to="/">
            <div
              className="coin-image-container"
              style={{ userSelect: "none" }}
            >
              <img className="coin-logo" src={Logo} alt="logo" />
            </div>
          </NavLink>

          <p></p>
          <div></div>
        </Grid>
        <Grid item xs={2}>
          <ul> <h4>Explore</h4>
          <NavLink className="styled-link" to="/"><li>Market</li></NavLink>
          <NavLink className="styled-link" to="/exchange"><li>Exchange</li></NavLink>
          <NavLink className="styled-link" to="/categories"><li>Categories</li></NavLink>
          </ul>
        </Grid>
        <Grid item xs={2}>
          <ul> <h4>About coinize</h4>
            <li>About Us</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>
        </Grid>
        <Grid item xs={2}>
          <ul> <h4>Community</h4>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Reddit</li>
          </ul>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
