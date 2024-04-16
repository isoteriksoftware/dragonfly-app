"use client";

import { Box, Stack } from "@mui/material";
import { ImagePicker, ImageUploader } from "../../modules/components";
import { useState } from "react";

export const Home = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFilePicked = (data: FileList) => {
    setFiles([...files, ...Array.from(data)]);
  };

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
          width: "30%",
          background: (theme) => theme.palette.secondary.main,
          borderRadius: "8px",
          boxShadow: (theme) => theme.boxShadows.normal,
          padding: "20px",
        }}
      >
        <ImagePicker onChange={handleFilePicked} />

        <Stack
          spacing="12px"
          sx={{
            marginTop: "20px",
          }}
        >
          {files.map((file, index) => (
            <ImageUploader key={index} file={file} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
