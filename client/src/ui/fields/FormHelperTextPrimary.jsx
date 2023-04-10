import React from "react";
import { FormHelperText } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FormHelperTextPrimary = styled(FormHelperText)(({ theme }) => ({
  color: "common.mediumGrey",
  marginBottom: theme.spacing(1),
  marginLeft: 0
}));
