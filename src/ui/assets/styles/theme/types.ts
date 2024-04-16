interface ThemeExtension {
  colors: {
    error: string;
    info: string;
    warning: string;

    border: {
      uploader: string;
    };
  };
  gradients: {
    background: string;
  };
  boxShadows: {
    normal: string;
  };
}

declare module "@mui/material/styles" {
  interface Theme extends ThemeExtension {}

  interface ThemeOptions extends ThemeExtension {}
}

export {};
