import React from "react";
import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  ThemeProvider,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { headCells } from "../utils/data";
import PropTypes from "prop-types";
import { theme } from "../materialUi/theme";
import { useStyles } from "../materialUi/GlobalStyles";

export default function EnhancedTableHead(props) {
  const { orderBy } = props;
  const classes = useStyles();

  return (
    <TableHead className={classes.tablehHead}>
      <TableRow>
        {headCells.map((headCell) => (
          <ThemeProvider theme={theme} key={headCell.id}>
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
            >
              <TableSortLabel>
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}></Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          </ThemeProvider>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
};
