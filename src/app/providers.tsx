import { PropsWithChildren } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { DefaultTheme } from "../ui/assets/styles/theme";
import { ToastContainer } from "react-toastify";
import { ServiceProvider } from "../common/services";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={DefaultTheme}>
        <CssBaseline />

        <ServiceProvider>{children}</ServiceProvider>
        <ToastContainer />
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
