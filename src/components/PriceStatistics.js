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
    </div>
  );
};

export default PriceStatistics;
