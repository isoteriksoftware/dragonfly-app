"use client";

import { Box, Typography } from "@mui/material";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LinearProgressWithLabel, RowStack, StylableImage } from "..";
import { truncateFileName } from "../../../../common/utils";
import checkIcon from "../../../assets/icons/check.svg";
import { useService } from "../../../../common/services";
import { toast } from "react-toastify";

export type ImageUploaderProps = {
  file: File;
};

type Stage = "idle" | "initializing" | "staging" | "processing" | "completed";
type InitializationResponse = {
  key: string;
  url: string;
};
type ProcessingResponse = { taskId: string };
type ProcessingPayload = { key: string };
type StatusResponse = { status: "RUNNING" | "SUCCEEDED" | "FAILED" };
type StatusPayload = { taskId: string };

const Component = ({ file }: ImageUploaderProps) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<Stage>("idle");
  const initializationRef = useRef(false);

  const previewUrl = useMemo(() => URL.createObjectURL(file), [file]);
  const { apiService } = useService();

  const checkStatus = useCallback(
    async (taskId: string) => {
      const { status } = await apiService.post<StatusResponse, StatusPayload>(
        "/upload/status",
        {
          taskId,
        }
      );

      if (status === "SUCCEEDED") {
        setStage("completed");
        setIsCompleted(true);
        toast.success(file.name + " uploaded successfully");
      } else if (status === "RUNNING") {
        setTimeout(() => checkStatus(taskId), 1000);
      }
    },
    [apiService, file.name]
  );

  const doUploadTask = useCallback(async () => {
    try {
      // Update stage
      setStage("initializing");
      initializationRef.current = true;

      // Generate a URL for the image upload
      const { key, url } = await apiService.post<InitializationResponse>(
        "/upload/url"
      );

      // Update stage
      setStage("staging");

      const formData = new FormData();
      formData.append("image", file);
      formData.append("url", url);

      await apiService.post("/upload/stage", formData);

      // Update stage
      setStage("processing");
      const { taskId } = await apiService.post<
        ProcessingResponse,
        ProcessingPayload
      >("/upload/process", {
        key,
      });

      checkStatus(taskId);
    } catch (error) {
      console.error("[ImageUploader]:", error);
      toast.error("Failed to upload image: " + file.name);
    }
  }, [apiService, checkStatus, file]);

  useEffect(() => {
    // Update progress based on the stage
    switch (stage) {
      case "initializing":
        setProgress(0);
        break;
      case "staging":
        setProgress(35);
        break;
      case "processing":
        setProgress(65);
        break;
      case "completed":
        setProgress(100);
        break;
    }
  }, [stage]);

  useEffect(() => {
    if (stage === "idle" && !initializationRef.current) {
      doUploadTask();
    }
  }, [doUploadTask, stage]);

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
