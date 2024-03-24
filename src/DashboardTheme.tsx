import { createTheme } from "@mui/material/styles";

const DashboardTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            // backgroundColor: "red!important",
          },
        },
      ],
    },
  },

  palette: {
    primary: {
      main: "#bada55",
    },
  },
  typography: {
    fontSize: 25,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  spacing: [4, 8, 12, 16, 20],
});
export default DashboardTheme;
