"use client";

import { createTheme } from "@mui/material/styles";

export const DefaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FF5E5E",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "rgba(255, 255, 255, 0.2)",
    },
  },
  typography: {
    fontFamily: "'Work Sans', Roboto, Helvetica, Arial, sans-serif",
  },
  colors: {
    error: "#FF5E5E",
    info: "#2F80ED",
    warning: "#FFBD60",
    text: "#171113",

    border: {
      imagePicker: "#D2D3D3",
      imageUploader: "#00000014",
    },
  },
  gradients: {
    background: "linear-gradient(to bottom, #EC99E3 0%, #FF5E5E 100%)",
  },
  boxShadows: {
    normal: "@mui/material/styles",
  },
});
