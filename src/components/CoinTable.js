import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const useStyles = makeStyles({
  tableContent: {
    fontFamily: 'Montserrat',
    // color: (props) => props.color,
  },
  tableRows: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 0,
  }
});
const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          fontWeight: 700,
          fontSize: '2.4em'
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          fontWeight: 500,
          // fontSize: '2.4em'
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          fontWeight: 700,
          fontSize: '1.3em'
        },
      },
    },
    MuiPaper: { 
      styleOverrides: {
        root: {
          // filter: 'invert(1)',
          border: '1px solid #eee',
          // backgroundColor: '#101010',
          color: '#101010',
          palette: { mode: 'dark' },
        },
      },
    }
  },
});

const headCells = [
  {
    id: 'image',
    numeric: false,
    disablePadding: true,
    label: '',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Token Name',
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Price(USD)',
  },
  {
    id: 'volume',
    numeric: true,
    disablePadding: false,
    label: 'Volume(USD)',
  },
  {
    id: 'coinPercent',
    numeric: true,
    disablePadding: false,
    label: 'Coin Percent',
  },
  {
    id: 'mktCap',
    numeric: true,
    disablePadding: false,
    label: 'Market Cap(USD)',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {
          headCells.map((headCell) => (
            <ThemeProvider theme={theme}>
              <TableCell
                key={headCell.id}
                align={headCell.numeric ? 'right' : 'left'}
                padding={headCell.disablePadding ? 'none' : 'normal'}            
              >
                <TableSortLabel>
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}></Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            </ThemeProvider>
          ))
        }
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
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="h1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h4"
            id="tableTitle"
            component="div"
          >
            Market Report
          </Typography>
        )}
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

export default function CoinTable({ filteredCoins }) {
  // const classes = useStyles(props);
  const classes = useStyles();
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
      createData(
        coin.name, 
        coin.current_price, 
        coin.total_volume, 
        coin.price_change_percentage_24h,
        coin.market_cap
        )
    });

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  // console.log(rows)
  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    // <Box sx={{ width: '100%' }}>
      <ThemeProvider theme={theme}>
      <Paper 
        sx={{ width: '100%', mb: 2 }}
        variant='elevation'
        elevation={4}
      >
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {
                rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <ThemeProvider theme={theme}>
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      className={classes.tableContent}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align='right'
                      >
                        <img className='coin__image' src={row.image} alt={row.name} />
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
                      {console.log(row.name)}
                      <TableCell align="right" className={classes.tableRows}>
                        ${row.current_price}
                      </TableCell>
                      <TableCell align="right" className={classes.tableRows}>
                        ${row.total_volume}
                      </TableCell>
                      <TableCell align="right" className={classes.tableRows}>
                        {row.price_change_percentage_24h}
                      </TableCell>
                      <TableCell align="right" className={classes.tableRows}>
                        ${row.market_cap}
                      </TableCell>
                    </TableRow>
                    </ThemeProvider>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      </ThemeProvider>
    // </Box>
  );
}
