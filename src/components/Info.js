import React from "react";

const Info = ({ data }) => {
  return (
    <div className="info-container">
      <h3>General Info</h3>
      <div className="info-row">
        <p>Website</p>
        <div className="chip">
          <a href={data.links.homepage[0]}>
            {data.links.homepage[0].replace(/[http://www.]/gi, "")}
          </a>
        </div>
      </div>
      <div className="info-row">
        <p>Explorers</p>
        {data.links.blockchain_site?.map((site) => {
          if (site !== "") {
            return (
              <div className="chip">
                <a href={data.links.homepage[0]}>
                  {data.links.homepage[0].replace(/[https://|http://]/gi, "")}
                </a>
              </div>
            );
          }
        })}
      </div>
      <div className="info-row">
        <p>Wallets</p>
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
