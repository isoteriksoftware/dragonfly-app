"use client";

import { Box, Typography } from "@mui/material";
import { memo, useMemo, useState } from "react";
import { LinearProgressWithLabel, RowStack, StylableImage } from "..";
import { truncateFileName } from "../../../../common/utils";
import checkIcon from "../../../assets/icons/check.svg";

export type ImageUploaderProps = {
  file: File;
};

const Component = ({ file }: ImageUploaderProps) => {
  const [isCompleted, setIsCompleted] = useState(true);
  const [progress, setProgress] = useState(50);
  const previewUrl = useMemo(() => URL.createObjectURL(file), [file]);

  return (
    <Box
      sx={{
        padding: "16px",
        borderRadius: "8px",
        border: (theme) => `1px solid ${theme.colors.border.imageUploader}`,
      }}
    >
      <RowStack spacing="16px" alignItems="flex-start">
        <StylableImage
          src={previewUrl}
          alt="Preview"
          width={40}
          height={40}
          sx={{
            borderRadius: "4px",
          }}
        />

        <Box flexGrow={1}>
          <RowStack justifyContent="space-between">
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: "0.875rem",
              }}
            >
              {truncateFileName(file, 20)}
            </Typography>

            {isCompleted && <StylableImage src={checkIcon} alt="Done" />}
          </RowStack>

          <LinearProgressWithLabel value={progress} />
        </Box>
      </RowStack>
    </Box>
  );
};

export const ImageUploader = memo(Component);
