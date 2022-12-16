import React from 'react'
import PropTypes from "prop-types";
import { IconButton, ThemeProvider, Tooltip, Typography, Toolbar } from '@mui/material';
import RefreshIcon from "@mui/icons-material/Refresh";
import FilterListIcon from "@mui/icons-material/FilterList";
import { theme } from '../materialUi/theme';

const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;
  
    return (
      <ThemeProvider theme={theme}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          }}
        >
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h4"
            id="tableTitle"
            component="div"
          >
            Market Report
          </Typography>
          <IconButton
            style={{ marginRight: "1em" }}
            onClick={() => window.location.reload()} // custom refresh button
          >
            <RefreshIcon fontSize="medium" />
          </IconButton>
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </ThemeProvider>
    );
  };
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

  export default EnhancedTableToolbar;