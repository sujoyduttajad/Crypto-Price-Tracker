import React from "react";
import { formatter } from "../utils/functions";

const PriceStatistics = ({ data }) => {
  return (
    <div className="info-container">
      <h3>USDT Price Statistics</h3>
      <div className="market-row">
        <p>Market Cap</p>
        <div className="chip">
          <p>{formatter.format(data.market_data.market_cap.usd)}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceStatistics;
