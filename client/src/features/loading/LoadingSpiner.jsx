import React from "react";
import { Box, CircularProgress } from "@mui/material";

const LoadingSpiner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "background.default",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default LoadingSpiner;
