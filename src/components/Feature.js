import React from "react";
import { features } from "../utils/data";

const Feature = () => {
  return (
    <div className="feature">
      <div className="left-container" aria-label="left-content">
        <h3>Our advantages, which you can enjoy</h3>
        <p>
          Coinize will always provide you the best quality service platform for
          your convinience
        </p>
      </div>
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
    </div>
  );
};

export default Feature;
