import React from "react";
import { formatter } from "../utils/functions";

const PriceStatistics = ({ data }) => {
  return (
    <div className="info-container">
      <h3>USDT Price Statistics</h3>
      <div className="market-row">
        <p>{data.name} Price</p>
        <div className="chip">
          <p>{formatter.format(data.market_data.current_price.usd)}</p>
        </div>
      </div>
      <div className="market-row">
        <p>24h Low / 24h High</p>
        <div className="chip">
          <p>
            ${data.market_data.high_24h.usd.toFixed(4)} /{" "}
            ${data.market_data.low_24h.usd.toFixed(4)}
          </p>
        </div>
      </div>
      <div className="market-row">
        <p>7day Low / 7day High</p>
        <div className="chip">
          <p>
            ${data.market_data.high_24h.usd.toFixed(4)} /{" "}
            ${data.market_data.low_24h.usd.toFixed(4)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceStatistics;
