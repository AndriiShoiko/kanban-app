import React from "react";
import { Link } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LinkPrimary = styled(Link)(({ theme }) => ({
  color: theme.palette.common.mainPurple,
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.common.mainPurpleHover,
  },
}));
