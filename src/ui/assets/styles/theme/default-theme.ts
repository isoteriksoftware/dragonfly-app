"use client";

import { createTheme } from "@mui/material/styles";

export const DefaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#EC99E3",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#EC99E3",
    },
  },
  typography: {
    fontFamily: "'Urbanist', Roboto, Helvetica, Arial, sans-serif",
  },
  colors: {
    error: "#FF5E5E",
    info: "#2F80ED",
    warning: "#FFBD60",
  },
});
