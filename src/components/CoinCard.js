import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import React from "react";
import Tilt from "react-parallax-tilt";
import { Chip } from "@mui/material";
import { useStyles } from "../materialUi/GlobalStyles";

const CoinCard = ({ data }) => {
  const classes = useStyles();

  const priceChange = data.market_data.price_change_percentage_24h;

  return (
    <div className="card-container">
      <Tilt scale={0.95} transitionSpeed={300} gyroscope={true}>
        <div className="card">
          <div className="welcome">
            <div className="image-container">
              <img src={data.image.small} alt={data.name} />
              <div>Rank #{data.market_cap_rank}</div>
            </div>
          </div>
          <div className="year">
            <div className="coin-title">
              <p>
                {data.name} ({data.symbol.toUpperCase()})
              </p>
            </div>
            <div className="market-info">
              <h2>${data.market_data.current_price.usd} </h2>
              <div className="price-change">
                {priceChange > 0 ? (
                  <Chip
                    className={classes.chipStyles}
                    variant="contained"
                    style={{ color: "#13A206", fontSize: ".55em" }}
                    icon={<ArrowDropUp style={{ color: "#13A206" }} />}
                    label={priceChange.toFixed(2)}
                  />
                ) : (
                  <Chip
                    className={classes.chipStyles}
                    variant="contained"
                    style={{ color: "#BD1B1B", fontSize: ".55em" }}
                    icon={<ArrowDropDown style={{ color: "#BD1B1B" }} />}
                    label={Math.abs(priceChange.toFixed(2))}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default CoinCard;
