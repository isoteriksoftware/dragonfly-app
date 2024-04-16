import "@mui/material/styles";

interface ThemeExtension {
  colors: {
    error: string;
    info: string;
    warning: string;
  };
}

declare module "@mui/material/styles" {
  interface Theme extends ThemeExtension {}

  interface ThemeOptions extends ThemeExtension {}
}

export {};
