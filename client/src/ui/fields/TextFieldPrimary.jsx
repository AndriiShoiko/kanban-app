import React from "react";
import { OutlinedInput } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TextFieldPrimary = styled(OutlinedInput)(({ theme }) => ({
  "&:not(.Mui-error)": {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.common.mainPurpleHover,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.common.mainPurpleHover,
    },
  },
}));
