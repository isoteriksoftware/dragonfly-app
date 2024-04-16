"use client";

import { Box } from "@mui/material";
import { CustomFileUploader } from "../../modules/components";

export const Home = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        background: (theme) => theme.gradients.background,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "40%",
          background: (theme) => theme.palette.secondary.main,
          borderRadius: "8px",
          boxShadow: (theme) => theme.boxShadows.normal,
          padding: "20px",
        }}
      >
        <CustomFileUploader />
      </Box>
    </Box>
  );
};
