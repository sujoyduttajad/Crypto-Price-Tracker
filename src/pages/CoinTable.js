import React, { useState } from "react";
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
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../features/eachCoinSlice";
// import axios from "axios";
import { NavLink, useLocation } from "react-router-dom";
import EachCoin from "./EachCoin";
import { theme } from "../materialUi/theme";
import EnhancedTableHead from "../components/EnhancedTableHead";
import EnhancedTableToolbar from "../components/EnhancedTollbar";
import { useStyles } from "../materialUi/GlobalStyles";



export default function CoinTable({ filteredCoins, handleChange, setLoading }) {
  /* 
  const classes = useStyles(props); 
  --------- If you need to use props use 👆  -----------
  */

  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [coinId, setCoinId] = useState("");

  // Redux functions
  const dispatch = useDispatch();
  const coinState = useSelector((state) => state.eachCoin);
  console.log(coinState);

  // React-router and other utilities
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
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
  console.log(rows)
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

  // const handleClick = async (e, _id) => {
  //   await dispatch(update((state) => ({ ...state, coinId: _id })));
  //   return <EachCoin coinId={_id} />;
  // };

  // useEffect(() => {
  //   return () => handleClick();
  // }, [handleClick]);

  const handleChangePage = async (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = async (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const isSelected = (name) => selected.indexOf(name) !== -1;
  // <NavLink to={`${path}${coinState}`}>

  return (
    <>
      <Navbar handleChange={handleChange} />
      <div className="crypto-container">
        <ThemeProvider theme={theme}>
          <Paper sx={{ width: "100%", mb: 2 }} elevation={1}>
            <EnhancedTableToolbar numSelected={selected.length} />
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
                            tabIndex={-1}
                            key={row.id}
                            value={row.id}
                            className={classes.tableContent}
                          >
                            <TableCell padding="checkbox">
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
                              component="th"
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
                            {/* Coin Name */}
                            <TableCell
                              component="th"
                              id={labelId}
                              scope="row"
                              padding="none"
                              className={classes.tableRows}
                              // onClick={() => <EachCoin coinState={coinState} />}
                              // onClick={(e) => handleClick(e, row.id)}
                            >
                              <NavLink to={`/${row.id}`}>
                                <Chip
                                  label={row.name}
                                  variant="outlined"
                                  clickable
                                  className={classes.coinChip}
                                />
                              </NavLink>
                            </TableCell>
                            {/* --------- */}
                            <TableCell
                              align="right"
                              className={classes.tableRows}
                            >
                              ${row.current_price}
                            </TableCell>
                            <TableCell
                              align="right"
                              className={classes.tableRows}
                            >
                              ${row.total_volume}
                            </TableCell>
                            <TableCell
                              align="right"
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
                              className={classes.tableRows}
                            >
                              ${row.market_cap}
                            </TableCell>
                          </TableRow>
                        </ThemeProvider>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <ThemeProvider theme={theme}>
              <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </ThemeProvider>
          </Paper>
        </ThemeProvider>
      </div>
    </>
  );
}
