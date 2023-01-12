import { Grid } from "@mui/material";
import React from "react";
import { features } from "../utils/data";

const Feature = () => {
  return (
    <div className="feature">
      <Grid container spacing={1}>
        <Grid item lg={6} md={6} sm={12}>
          <div className="left-container" aria-label="left-content">
            <h3>Our advantages, which you can enjoy</h3>
            <p>
              Coinize will always provide you the best quality service platform
              for your convinience
            </p>
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
          <div className="right-container" aria-label="right-content">
            {features.map((item) => (
              <div key={item.id} className="grid-container">
                <div className="image-box">
                  <img src={item.imgSrc} alt={item.heading} />
                </div>
                <div className="content-box">
                  <h4>{item.heading}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Feature;
