import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Typography,
} from "@mui/material";

export type LinearProgressWithLabelProps = LinearProgressProps & {
  value: number;
};

export const LinearProgressWithLabel = (
  props: LinearProgressWithLabelProps
) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          sx={{
            borderRadius: "5px",
            height: "5px",
          }}
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontWeight: 400,
          }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};
