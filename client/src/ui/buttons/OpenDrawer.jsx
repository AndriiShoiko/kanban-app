import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledOpenDrawer = styled(Button)(({ theme }) => ({
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.mainPurple,
    width: 56,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0px 100px 100px 0px",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.common.mainPurpleHover,
    },
    position: "absolute",
    left: 0,
    bottom: theme.spacing(4),
  }));