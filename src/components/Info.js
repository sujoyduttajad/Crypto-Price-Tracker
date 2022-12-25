import React from "react";
import {
  ContentCopyOutlined,
  FacebookRounded,
  GitHub,
  MoreVert,
  Twitter,
} from "@mui/icons-material";
import {
  Alert,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Snackbar,
} from "@mui/material";
import { useStyles } from "../materialUi/GlobalStyles";
import CopyText from "./CopyText";

const Info = ({ data }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <div className="info-container">
      <h3>General Info</h3>
      <div className="info-row">
        <p>Website</p>
        <div className="chip">
          <a href={data.links.homepage[0]} target="_blank">
            {data.links.homepage[0]?.replace(/[http://www]/gi, "")}
          </a>
        </div>
      </div>
      <div className="info-row">
        <p>Explorers</p>
        <div className="chips-wrapper">
          <div className="chip" style={{ borderRadius: "4.55px 0 0 4.55px" }}>
            <a href={data.links.blockchain_site[0]} target="_blank">
              {data.links.blockchain_site[0]
                ?.replace(/[https://|http://]/gi, "")
                .substring(0, 20)}
            </a>
          </div>
          <IconButton
            aria-label="more"
            id="long-button"
            style={{
              fontSize: "1rem",
              fontWeight: 500,
              padding: "0.04em 0.2em",
              borderRadius: "0 4.55px 4.55px 0",
              backgroundColor: "#A0A0A0",
            }}
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVert />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {data.links.blockchain_site?.map((site) => {
              if (site !== "") {
                return (
                  <MenuItem
                    style={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      fontFamily: "inherit",
                    }}
                    onClick={handleClose}
                  >
                    <a href={site} target="_blank">
                      {site
                        ?.replace(/[https://|http://]/gi, "")
                        .substring(0, 20)}
                    </a>
                  </MenuItem>
                );
              }
            })}
          </Menu>
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
        {/* Twitter */}
        <div className="chip">
          <Twitter style={{ fontSize: "1.2rem" }} />
          <a
            href={`https://twitter.com/${data.links.twitter_screen_name}`}
            target="_blank"
          >
            {data.links.twitter_screen_name}
          </a>
        </div>
        {/* Facebook */}
        <div className="chip">
          <FacebookRounded style={{ fontSize: "1.2rem" }} />
          <a
            href={`https://www.facebook.com/${data.links.facebook_username}`}
            target="_blank"
          >
            {data.links.facebook_username}
          </a>
        </div>
      </div>
      <div className="info-row">
        <p>Source Code</p>
        <div className="chip">
          <GitHub style={{ fontSize: "1.2rem" }} />
          <a href={data.links.repos_url.github[0]} target="_blank">
            {data.links.repos_url.github[0]?.replace(/\https:\/\//, "")}
          </a>
        </div>
      </div>
      <div className="info-row">
        <p>API id</p>
        <div className="chip">
          <CopyText data={data} />
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
