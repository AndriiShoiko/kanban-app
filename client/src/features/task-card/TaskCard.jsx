import React from "react";

import { Card, Typography, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useDarkMode } from "../../hooks/useDarkMode";

import { CardTaskStyle } from "./StylesAndComponents";

export const TaskCard = (props) => {
  return (
    <CardTaskStyle darkMode={useDarkMode()} {...props}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Build UI for onboarding flow
        </Typography>
        <Typography variant="h4">0 of 6 substasks</Typography>
      </CardContent>
    </CardTaskStyle>
  );
};
