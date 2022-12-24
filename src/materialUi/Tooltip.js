import React from "react";
import Tooltip from '@mui/material/Tooltip';

const TooltipComp = ({ content, children }) => {
  return (
    <Tooltip title={content} disableInteractive>
      {children}
    </Tooltip>
  );
};

export default TooltipComp;
