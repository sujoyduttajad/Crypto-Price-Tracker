import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { theme } from "../materialUi/theme";
import EnhancedTableHead from "../components/EnhancedTableHead";
import EnhancedTableToolbar from "../components/EnhancedTollbar";
import { useStyles } from "../materialUi/GlobalStyles";
import Footer from "../components/Footer";
import { formatter } from "../utils/functions";

export default function Market({ filteredCoins, handleChange, setCoinId }) {
  /* 
  const classes = useStyles(props); 
  --------- If you need to use props use 👆  -----------
  */

  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const classes = useStyles();

  function createData(name, price, volume, coinPercent, mktCap) {
    return {
      name,
      price,
      volume,
      coinPercent,
      mktCap,
    };
  }
  const rows = filteredCoins;
  rows?.map((coin) => {
    return createData(
      coin.name,
      coin.current_price,
      coin.total_volume,
      coin.price_change_percentage_24h,
      coin.market_cap
    );
  });

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_id) => {
    setCoinId(_id);
  };

  const handleChangePage = async (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = async (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Navbar handleChange={handleChange} />
      <div className="crypto-container">
        <ThemeProvider theme={theme}>
          <Paper sx={{ width: "100%", mb: 2 }} elevation={1}>
            <EnhancedTableToolbar
              numSelected={selected.length}
              headerName={"Market Report"}
            />
            <TableContainer>
              <Table
                stickyHeader
                aria-label="sticky table"
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={"medium"}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  onSelectAllClick={handleSelectAllClick}
                  rowCount={rows.length}
                />
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <ThemeProvider theme={theme} key={row.id}>
                          <TableRow
                            hover
                            // tabIndex={-1}
                            value={row.id}
                            className={classes.tableContent}
                          >
                            <TableCell padding="checkbox" component="td">
                              <Avatar
                                className={classes.avatar}
                                sx={{ width: 30, height: 30 }}
                                style={{ colorDefault: "#000" }}
                              >
                                <p
                                  style={{
                                    fontSize: "15px",
                                    fontWeight: 500,
                                    color: "#fff",
                                  }}
                                >
                                  {row.market_cap_rank}
                                </p>
                              </Avatar>
                            </TableCell>
                            <TableCell
                              component="td"
                              id={labelId}
                              scope="row"
                              padding="none"
                              align="right"
                            >
                              <img
                                className="coin__image"
                                src={row.image}
                                alt={row.name}
                              />
                            </TableCell>
                            <TableCell
                              component="td"
                              id={labelId}
                              scope="row"
                              padding="none"
                              className={classes.tableRows}
                            >
                              <Link to={`/market/${row.id}`}>
                                <Chip
                                  label={row.name}
                                  variant="outlined"
                                  clickable
                                  onClick={() => handleClick(row.id)}
                                  className={classes.coinChip}
                                />
                              </Link>
                            </TableCell>
                            <TableCell
                              align="right"
                              component="td"
                              className={classes.tableRows}
                            >
                              {formatter.format(row.current_price)}
                            </TableCell>
                            <TableCell
                              align="right"
                              component="td"
                              className={classes.tableRows}
                            >
                              {formatter.format(row.total_volume)}
                            </TableCell>
                            <TableCell
                              align="right"
                              component="td"
                              className={classes.tableRows}
                            >
                              <span
                                style={{
                                  color: `${
                                    row.price_change_percentage_24h > 0
                                      ? "#1dd15a"
                                      : "#ef5959"
                                  }`,
                                  backgroundColor: `${
                                    row.price_change_percentage_24h > 0
                                      ? "rgba(29, 209, 90, 0.2)"
                                      : "rgba(239, 89, 89, 0.2)"
                                  }`,
                                  padding: "5px",
                                  borderRadius: "3.5px",
                                }}
                              >
                                {row.price_change_percentage_24h}
                              </span>
                            </TableCell>
                            <TableCell
                              align="right"
                              component="td"
                              className={classes.tableRows}
                            >
                              {formatter.format(row.market_cap)}
                            </TableCell>
                          </TableRow>
                        </ThemeProvider>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            {/* <ThemeProvider theme={theme}> */}
            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
            {/* </ThemeProvider> */}
          </Paper>
        </ThemeProvider>
      </div>
      <Footer />
    </>
  );
}
