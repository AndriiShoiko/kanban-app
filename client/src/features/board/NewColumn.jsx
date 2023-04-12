import React from "react";

import { useDarkMode } from "../../hooks/useDarkMode";

import { StyledButton, StyledNewColumn } from "./StylesAndComponents";

export const NewColumn = () => {
  return (
    <StyledNewColumn darkMode={useDarkMode()}>
      <StyledButton size="large">+ New Column</StyledButton>
    </StyledNewColumn>
  );
};
