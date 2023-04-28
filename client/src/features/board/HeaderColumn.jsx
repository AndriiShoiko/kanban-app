import React from "react";

import { Stack, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export const HeaderColumn = ({ count, name }) => {
  return (
    <Stack
      sx={{ minHeight: "20px", minWidth: "280px" }}
      direction="row"
      spacing={2}
      alignItems="center"
    >
      <CircleIcon color="success" fontSize="small" />
      <Typography variant="h4">
        {name} ({count})
      </Typography>
    </Stack>
  );
};
