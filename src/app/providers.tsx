import { PropsWithChildren } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { DefaultTheme } from "../ui/assets/styles/theme";
import { ToastContainer } from "react-toastify";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={DefaultTheme}>
        <CssBaseline />

        {children}
        <ToastContainer />
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
