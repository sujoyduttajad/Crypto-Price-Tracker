import React from "react";
import { FacebookRounded, GitHub, Twitter } from "@mui/icons-material";
import CopyText from "./CopyText";
import Dropdown from "./Dropdown";
import { Tooltip } from "@mui/material";
import { useStyles } from "../materialUi/GlobalStyles";

const Info = ({ data }) => {
  const regexSite = /.+\/\/|www.|\..+/g;
  const classes = useStyles();
  
  return (
    <div className="info-container">
      <h3>General Info</h3>
      <div className="info-row">
        <p>Website</p>
        <div className="website-chip" >
          <a href={data.links.homepage[0]} target="_blank" rel="noreferrer">
            {data.links.homepage[0]?.replace(regexSite, "").replace("/", "")}
          </a>
        </div>
      </div>
      <div className="info-row">
        <p>Explorers</p>
        <Dropdown content={data.links.blockchain_site} />
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
        {/* Twitter */}
        <Tooltip
          title={`${data.community_data.twitter_followers} followers`}
          placement="top"
          className={classes.tooltip}
        >
          <div className="chip">
            <Twitter style={{ fontSize: "1.2rem" }} />
            <a
              href={`https://twitter.com/${data.links.twitter_screen_name}`}
              target="_blank"
              rel="noreferrer"
            >
              {data.links.twitter_screen_name}
            </a>
          </div>
        </Tooltip>
        {/* Facebook */}
        <div className="chip">
          <FacebookRounded style={{ fontSize: "1.2rem" }} />
          <a
            href={`https://www.facebook.com/${data.links.facebook_username}`}
            target="_blank"
            rel="noreferrer"
          >
            {data.links.facebook_username}
          </a>
        </div>
      </div>
      <div className="info-row">
        <p>Source Code</p>
        <div className="chip">
          <GitHub style={{ fontSize: "1.2rem" }} />
          <a
            href={data.links.repos_url.github[0]}
            target="_blank"
            rel="noreferrer"
          >
            {data.links.repos_url.github[0]?.replace(/^https:\//, "")}
          </a>
        </div>
      </div>
      <div className="info-row">
        <p>Tags</p>
        <Dropdown content={data.categories} />
      </div>
      <div className="info-row">
        <p>API id</p>
        <div className="chip">
          <CopyText data={data} />
        </div>
      </div>
    </div>
  );
};

export default Info;
