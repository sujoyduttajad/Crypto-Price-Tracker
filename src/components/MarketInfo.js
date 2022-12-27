import { HelpOutline } from "@mui/icons-material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import React from "react";
import { cryptoData } from "../utils/data";
import { styled } from '@mui/material/styles';
import { formatter, regexFormat } from "../utils/functions";



const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    fontFamily: '"Montserrat", sans-serif',
    fontSize: "0.8rem",
    fontWeight: 300,
    whiteSpace: "pre-line"
  },
}));

const MarketInfo = ({ data }) => {
  return (
    <div className="market-container">
      <h3>Price Stats</h3>
      <div className="market-row">
        <p>
          Market Cap{" "}
          <BootstrapTooltip
            title={cryptoData[0].para}
            placement="right"
            style={{ whiteSpace: "pre-line" }}
          >
            <span>
              <HelpOutline />
            </span>
          </BootstrapTooltip>
        </p>
        <div className="chip">
          <p>{formatter.format(data.market_data.market_cap.usd)}</p>
        </div>
      </div>
      <div className="market-row">
        <p>
          24 Hour Trading Vol{" "}
          <BootstrapTooltip
            title={cryptoData[1].para}
            placement="right"
            style={{ whiteSpace: "pre-line" }}
          >
            <span>
              <HelpOutline />
            </span>
          </BootstrapTooltip>
        </p>
        <div className="chip">
          <p>{formatter.format(data.market_data.total_volume.usd)}</p>
        </div>
      </div>
      <div className="market-row">
        <p>
          Fully Diluted Valuation{" "}
          <BootstrapTooltip
            title={cryptoData[2].para}
            placement="right"
            style={{ whiteSpace: "pre-line" }}
          >
            <span>
              <HelpOutline />
            </span>
          </BootstrapTooltip>
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
          <BootstrapTooltip
            title={cryptoData[3].para}
            placement="right"
            style={{ whiteSpace: "pre-line" }}
          >
            <span>
              <HelpOutline />
            </span>
          </BootstrapTooltip>
        </p>
        <div className="chip">
          <p>{regexFormat(data.market_data.circulating_supply)}</p>
        </div>
      </div>
      <div className="market-row">
        <p>
          Total Supply{" "}
          <BootstrapTooltip
            title={cryptoData[4].para}
            placement="right"
            style={{ whiteSpace: "pre-line" }}
          >
            <span>
              <HelpOutline />
            </span>
          </BootstrapTooltip>
        </p>
        <div className="chip">
          <p>{regexFormat(data.market_data.total_supply)}</p>
        </div>
      </div>
      <div className="market-row">
        <p>
          Max Supply{" "}
          <BootstrapTooltip
            title={cryptoData[5].para}
            placement="right"
            style={{ whiteSpace: "pre-line" }}
          >
            <span>
              <HelpOutline />
            </span>
          </BootstrapTooltip>
        </p>
        <div className="chip">
          <p>
            {data.market_data.max_supply
              ? regexFormat(data.market_data.max_supply)
              : "NA"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketInfo;
