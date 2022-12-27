import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const MarketInfo = ({ data }) => {
  const regexSite = /^(https?:\/\/www.)/;
  return (
    <div className="info-container">
      <h3>Price Stats</h3>
      <div className="chip">
        <a href={data.links.homepage[0]} target="_blank" rel="noreferrer">
          {data.links.homepage[0]?.replace(regexSite, "")}
        </a>
      </div>
      <div className="market-row">
        <p>Market Cap</p>
        <div className="chip">
          <p>{formatter.format(data.market_data.market_cap.usd)}</p>
        </div>
      </div>
    </div>
  );
};

export default MarketInfo;
