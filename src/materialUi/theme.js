import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
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