import { HelpOutline } from "@mui/icons-material";
import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const MarketInfo = ({ data }) => {

  return (
    <div className="market-container">
      <h3>Price Stats</h3>
      <div className="market-row">
        <p>
          Market Cap{" "}
          <span>
            <HelpOutline />
          </span>
        </p>
        <div className="chip">
          <p>{formatter.format(data.market_data.market_cap.usd)}</p>
        </div>
      </div>
      <div className="market-row">
        <p>
          24 Hour Trading Vol{" "}
          <span>
            <HelpOutline />
          </span>
        </p>
        <div className="chip">
          <p>{formatter.format(data.market_data.total_volume.usd)}</p>
        </div>
      </div>
      <div className="market-row">
        <p>
          Fully Diluted Valuation{" "}
          <span>
            <HelpOutline />
          </span>
        </p>
        <div className="chip">
          <p>
            {formatter.format(data.market_data.fully_diluted_valuation.usd)}
          </p>
        </div>
      </div>
      <div className="market-row">
        <p>
          Circulating Supply{" "}
          <span>
            <HelpOutline />
          </span>
        </p>
        <div className="chip">
          <p>{formatter.format(data.market_data.circulating_supply)}</p>
        </div>
      </div>
      <div className="market-row">
        <p>
          Total Supply{" "}
          <span>
            <HelpOutline />
          </span>
        </p>
        <div className="chip">
          <p>{formatter.format(data.market_data.total_supply)}</p>
        </div>
      </div>
      <div className="market-row">
        <p>
          Max Supply{" "}
          <span>
            <HelpOutline />
          </span>
        </p>
        <div className="chip">
          <p>
            {data.market_data.max_supply
              ? formatter.format(data.market_data.max_supply)
              : "NA"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketInfo;
