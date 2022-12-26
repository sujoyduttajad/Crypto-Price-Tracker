import React from "react";

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
    </div>
  );
};

export default MarketInfo;
