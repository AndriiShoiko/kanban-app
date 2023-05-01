import React from "react";

import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export const ButtonClear = (props) => {
  return (
    <IconButton
      sx={(theme) => ({
        color: theme.palette.common.mediumGrey,
        paddingRight: 0,
      })}
      {...props}
    >
      <ClearIcon />
    </IconButton>
  );
};
