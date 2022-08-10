import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import RefreshIcon from "@mui/icons-material/Refresh";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";
import { update } from "../features/eachCoinSlice";

const useStyles = makeStyles({
  tableContent: {
    fontFamily: "Montserrat",
    // color: (props) => props.color,
  },
  tableRows: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 0,
  },
  avatar: {
    colorDefault: "purple",
  },
});

const theme = createTheme({
  palette: { mode: "dark" },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
          fontWeight: 600,
          fontSize: "2.1em",
          color: "#eee",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
          fontWeight: 400,
          cursor: "pointer",
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
          fontWeight: 500,
          fontSize: "1.2em",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat",
          fontWeight: 700,
          color: "#fff",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "0.1px solid #333333",
        },
      },
    },
  },
});

const headCells = [
  {
    id: "rank",
    numeric: true,
    disablePadding: true,
    label: "#Rank",
  },
  {
    id: "image",
    numeric: false,
    disablePadding: true,
    label: "",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Token Name",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price(USD)",
  },
  {
    id: "volume",
    numeric: true,
    disablePadding: false,
    label: "Volume(USD)",
  },
  {
    id: "coinPercent",
    numeric: true,
    disablePadding: false,
    label: "24h Change",
  },
  {
    id: "mktCap",
    numeric: true,
    disablePadding: false,
    label: "Market Cap(USD)",
  },
];

function EnhancedTableHead(props) {
  const { orderBy } = props;

  return (
    <TableHead>
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

export default function CoinTable({ filteredCoins, handleChange }) {
  /* 
  const classes = useStyles(props); 
  --------- If you need to use props use 👆  -----------
  */
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [coinId, setCoinId] = useState("");
  const dispatch = useDispatch();

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
  rows.map((coin) => {
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

  const handleClick = async (e, id) => {
    // await setCoinId(id);
    await dispatch(update({ coinId: id }));
  };

  // console.log(coinId);

  useEffect(() => {
    return () => handleClick();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const isSelected = (name) => selected.indexOf(name) !== -1;

  /* ------- Avoid a layout jump when reaching the last page with empty rows. -------- */
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
                      // <ThemeProvider theme={theme} key={row.id}>
                        <TableRow
                          hover
                          onClick={(e) => handleClick(e, row.id)}
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
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                            className={classes.tableRows}
                          >
                            {row.name}
                          </TableCell>
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
                      // </ThemeProvider>
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
