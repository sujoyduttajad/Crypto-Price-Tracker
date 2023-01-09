import { ArrowDropDown, ArrowDropUp, Star } from "@mui/icons-material";
import React from "react";
import Tilt from "react-parallax-tilt";
import { Chip } from "@mui/material";
import { useStyles } from "../materialUi/GlobalStyles";
import { formatter } from "../utils/functions";

export const extractDigits = (num) => {
  let extrNum;
  if (num >= 1000) {
    let numString = parseInt(num.toString().slice(0, 1)) + "k";
    if (num >= 1000000) {
      numString = parseInt(num.toString().slice(0, 2)) + "M";
    }
    if (num >= 1000000000) {
      numString = parseInt(num.toString().slice(0, 2)) + "B";
    }
    extrNum = numString;
  } else {
    extrNum = num;
  }
  return extrNum;
};

const CoinCard = ({ data }) => {
  const classes = useStyles();

  const priceChange = data.market_data.price_change_percentage_24h;
  const followers = extractDigits(
    data.community_data.reddit_subscribers +
      data.community_data.twitter_followers
  );

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
              <div>
                <Star style={{ fontSize: "2rem" }} />{" "}
                <p className="followers">{followers}</p>
              </div>
            </div>
            <div className="market-info">
              <h2>{formatter.format(data.market_data.current_price.usd)} </h2>
              <div className="price-change">
                {priceChange > 0 ? (
                  <Chip
                    className={classes.chipStyles}
                    variant="contained"
                    style={{
                      color: "#13A206",
                      backgroundColor: "#e2e2e2",
                      fontSize: ".55em",
                    }}
                    icon={<ArrowDropUp style={{ color: "#13A206" }} />}
                    label={`${priceChange.toFixed(2)}%`}
                  />
                ) : (
                  <Chip
                    className={classes.chipStyles}
                    variant="contained"
                    style={{
                      color: "#BD1B1B",
                      backgroundColor: "#e2e2e2",
                      fontSize: ".55em",
                    }}
                    icon={<ArrowDropDown style={{ color: "#BD1B1B" }} />}
                    label={`${Math.abs(priceChange.toFixed(2))}%`}
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
