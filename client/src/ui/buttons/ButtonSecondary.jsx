import React from "react";

import { Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import { useDarkMode } from "src/hooks/useDarkMode";

const ButtonSecondaryStyled = styled(Button, {
  shouldForwardProp: (prop) => prop !== "darkMode",
})(({ darkMode, theme }) => ({
  ...theme.components.buttonS,
  backgroundColor: darkMode
    ? theme.palette.common.white
    : alpha(theme.palette.common.mainPurple, 0.1),
  color: theme.palette.common.mainPurple,
  "&:hover": {
    backgroundColor: darkMode
      ? theme.palette.common.white
      : alpha(theme.palette.common.mainPurple, 0.25),
  },
}));

export const ButtonSecondary = ({ children, ...props }) => {
  return (
    <ButtonSecondaryStyled darkMode={useDarkMode()} {...props}>
      {children}
    </ButtonSecondaryStyled>
  );
};
