import React from "react";

import { styled } from "@mui/material/styles";
import { MainLogo } from "../../ui/logos/MainLogo";

const StyledDrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  ...theme.mixins.toolbar,
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3),
  },
}));

export const DrawerHeader = () => {
  return (
    <StyledDrawerHeader>
      <MainLogo />
    </StyledDrawerHeader>
  );
};
