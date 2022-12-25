import { MoreVert } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";

const Dropdown = ({ content }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div className="chips-wrapper">
      <div className="chip" style={{ borderRadius: "4.55px 0 0 4.55px" }}>
        <a href={content[0]} target="_blank" rel="noreferrer">
          {content[0]
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
        {content?.map((site) => {
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
                <a href={site} target="_blank" rel="noreferrer">
                  {site?.replace(/[https://|http://]/gi, "").substring(0, 20)}
                </a>
              </MenuItem>
            );
          }
        })}
      </Menu>
    </div>
  );
};

export default Dropdown;
