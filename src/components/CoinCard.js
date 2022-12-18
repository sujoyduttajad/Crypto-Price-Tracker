import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useStyles } from "../materialUi/GlobalStyles";
import Tilt from "react-parallax-tilt";

const CoinCard = ({ data }) => {
  const classes = useStyles();
  return (
    <Tilt scale={0.95} transitionSpeed={300} gyroscope={true}>
      <div className="card">
        <div className="welcome">
          <div className="image-container">
            <img src={data.image.small} alt={data.name} />
          </div>
        </div>
        <div className="year">
          <div className="coin-title">
            <h4>{data.name}</h4>
          </div>
          <div className="market-info">
            <h2 >
              {data.market_data.market_cap_change_24h}{" "}
              {data.symbol.toUpperCase()}
            </h2>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default CoinCard;
