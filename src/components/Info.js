import React from "react";

const Info = ({ data }) => {
  return (
    <div className="info-container">
      <h3>General Info</h3>
      <div className="info-row">
        <p>Website</p>
        <div className="chip">
          <a href={data.links.homepage[0]}>
            {data.links.homepage[0].replace(/[http://www]/gi, "")}
          </a>
        </div>
      </div>
      <div className="info-row">
        <p>Explorers</p>
        <div className="chips-wrapper">
          {data.links.blockchain_site?.map((site) => {
            if (site !== "") {
              return (
                <div className="chip">
                  <a href={site} target="_blank">
                    {site.replace(/[https://|http://]/gi, "").substring(0, 10)}
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="info-row">
        <p>Wallets</p>
        <div className="chip">
          <a href="https://gcko.io/ledger">Ledger</a>
        </div>
        <div className="chip">
          <a href="https://coin98.com/wallet">Coin98</a>
        </div>
      </div>
      <div className="info-row">
        <p>Community</p>
        <div className="chip">
          <a href={data.links.homepage[0]}>
            {data.links.homepage[0].replace(/[http://www.]/gi, "")}
          </a>
        </div>
      </div>
      <div className="info-row">
        <p>Source Code</p>
        <div className="chip">
          <a href={data.links.homepage[0]}>
            {data.links.homepage[0].replace(/[http://www.]/gi, "")}
          </a>
        </div>
      </div>
      <div className="info-row">
        <p>ApI id</p>
        <div className="chip">
          <a href={data.links.homepage[0]}>
            {data.links.homepage[0].replace(/[http://www.]/gi, "")}
          </a>
        </div>
      </div>
      <div className="info-row">
        <p>Tags</p>
        <div className="chip">
          <a href={data.links.homepage[0]}>
            {data.links.homepage[0].replace(/[http://www.]/gi, "")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
