import React from "react";
import { FormHelperText } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FormHelperTextPrimary = styled(FormHelperText)(({ theme }) => ({
  fontFamily: "Plus Jakarta Sans",
  fontWeight: 700,
  color: "common.mediumGrey",
  marginBottom: theme.spacing(1),
  marginLeft: 0
}));
