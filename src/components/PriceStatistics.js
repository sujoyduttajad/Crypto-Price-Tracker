import React from "react";
import { formatter } from "../utils/functions";

const PriceStatistics = ({ data }) => {
  const ratio =
    data.market_data.total_volume.usd / data.market_data.market_cap.usd;

  const ATHPercent = data.market_data.ath_change_percentage.usd;
  const ATLPercent = data.market_data.atl_change_percentage.usd;
  
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
            ${data.market_data.high_24h.usd.toFixed(4)} / $
            {data.market_data.low_24h.usd.toFixed(4)}
          </p>
        </div>
      </div>
      <div className="market-row">
        <p>7day Low / 7day High</p>
        <div className="chip">
          <p>
            ${data.market_data.high_24h.usd.toFixed(4)} / $
            {data.market_data.low_24h.usd.toFixed(4)}
          </p>
        </div>
      </div>
      <div className="market-row">
        <p>Trading Volume</p>
        <div className="chip">
          <p>{formatter.format(data.market_data.total_volume.usd)}</p>
        </div>
      </div>
      <div className="market-row">
        <p>Market Cap Rank</p>
        <div className="chip">
          <p>#{data.market_data.market_cap_rank}</p>
        </div>
      </div>
      <div className="market-row">
        <p>Market Cap</p>
        <div className="chip">
          <p>{formatter.format(data.market_data.market_cap.usd)}</p>
        </div>
      </div>
      <div className="market-row">
        <p>Volume / Market Cap</p>
        <div className="chip">
          <p>{ratio.toFixed(4)}</p>
        </div>
      </div>
      <div className="market-row">
        <p>All-Time High</p>
        <div className="price-chip-row">
          <span>
            <p>{formatter.format(data.market_data.ath.usd)}</p>{" "}
            <p style={{ color: "#13A206", fontWeight: 600 }}>
              {ATHPercent.toFixed(1)}%
            </p>
          </span>
        </div>
      </div>
      <div className="market-row">
        <p>All-Time Low</p>
        <div className="price-chip-row">
          <span>
            <p>{formatter.format(data.market_data.atl.usd)}</p>
            <p style={{ color: "#BD1B1B", fontWeight: 600 }}>
              {ATLPercent.toFixed(1)}%
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceStatistics;
