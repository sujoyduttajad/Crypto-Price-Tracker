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
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

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
  },
  avatar: {
    colorDefault: 'purple'
  }
});

const theme = createTheme({
  palette: { mode: 'dark' },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          fontWeight: 600,
          fontSize: '2.1em',
          color: '#eee'
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          fontWeight: 400,
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          fontWeight: 500,
          fontSize: '1.2em'
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          fontWeight: 700,
          color: '#fff'
        },
    }},
    MuiPaper: { 
      styleOverrides: {
        root: {
          border: '0.1px solid #333333',
        },
      },
    }
  },
});

const headCells = [
  {
    id: 'rank',
    numeric: true,
    disablePadding: true,
    label: '#Rank',
  },
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
    label: '24h Change',
  },
  {
    id: 'mktCap',
    numeric: true,
    disablePadding: false,
    label: 'Market Cap(USD)',
  },
];

function EnhancedTableHead(props) {
  const { orderBy } = props;

  return (
    <TableHead>
      <TableRow>
        {
          headCells.map((headCell) => (
            <ThemeProvider theme={theme} key={headCell.id}>
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
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h4"
        id="tableTitle"
        component="div"
      >
        Market Report       
      </Typography> 
      <IconButton style={{ marginRight: '1em'}}>     
        <RefreshIcon 
          fontSize='medium'
          onClick={() => window.location.reload()}
        />
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

export default function CoinTable({ filteredCoins }) {
  /* 
  const classes = useStyles(props); 
  --------- If you needto use props use 👆  -----------
  */
  const classes = useStyles();
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
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

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <div className="crypto-container">
    <ThemeProvider theme={theme}>
      <Paper 
        sx={{ width: '100%', mb: 2 }}
        // variant='elevation'
        elevation={1}
      >
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            stickyHeader 
            aria-label="sticky table"
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
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
                    <ThemeProvider theme={theme} key={row.id}>
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}                    
                      tabIndex={-1}
                      key={row.id}
                      
                      className={classes.tableContent}
                    >
                      <TableCell padding="checkbox">
                        <Avatar 
                          className={classes.avatar} 
                          sx={{ width: 30, height: 30 }}
                          // variant='rounded'
                          style={{ colorDefault: '#000'}}
                        >
                          <p style={{ 
                            fontSize: '15px', 
                            fontWeight: 500,
                            color: '#fff'
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
                      <TableCell align="right" className={classes.tableRows}>
                        ${row.current_price}
                      </TableCell>
                      <TableCell align="right" className={classes.tableRows}>
                        ${row.total_volume}
                      </TableCell>
                      <TableCell 
                        align="right" 
                        className={classes.tableRows}                       
                      >
                        <span 
                          style={{
                            color: `${row.price_change_percentage_24h > 0 ? '#1dd15a' : '#ef5959'}`,
                            backgroundColor: `${row.price_change_percentage_24h > 0 ? 'rgba(29, 209, 90, 0.2)' : 'rgba(239, 89, 89, 0.2)'}`,
                            padding: '5px',
                            borderRadius: '3.5px',
                          }}
                        >
                          {row.price_change_percentage_24h}
                        </span>
                      </TableCell>
                      <TableCell align="right" className={classes.tableRows}>
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
  );
}
