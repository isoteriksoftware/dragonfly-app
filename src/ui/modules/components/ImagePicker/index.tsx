"use client";

import { Stack, Typography } from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import plusIcon from "../../../assets/icons/plus.svg";
import { StylableImage } from "..";

export type ImagePickerProps = {
  onChange: (files: FileList) => void;
};

export const ImagePicker = ({ onChange }: ImagePickerProps) => {
  const handleFileChange = (data: FileList) => {
    onChange(data);
  };

  return (
    <FileUploader
      name="file"
      types={["JPG", "PNG"]} // Allow only JPG and PNG files
      handleChange={handleFileChange}
      multiple={true} // Allow multiple files
      maxSize={500} // 500MB
      minSize={0} // 0MB
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          padding: "50px 30px",
          position: "relative",
          border: (theme) => `1px dashed ${theme.colors.border.imagePicker}`,
          borderRadius: "8px",
        }}
      >
        <StylableImage src={plusIcon} alt="Add" />

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: "1.3rem",
            marginTop: "10px",
          }}
        >
          Drop your images here
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: "0.875rem",
            marginTop: "5px",

            "& .highlight": {
              color: (theme) => theme.palette.primary.dark,
              fontWeight: 600,
            },
          }}
        >
          <span className="highlight">Browse image</span> from your device
        </Typography>
      </Stack>
    </FileUploader>
  );
};
