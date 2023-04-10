import React from "react";
import { Typography, Stack, Link } from "@mui/material";
import logo from "public/images/main-logo.svg";

export const MainLogo = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      component={Link}
      sx={{ cursor: "pointer", alignItems: "center", textDecoration: "none" }}
    >
      <img src={logo} width={25} height={25} alt="main logo" />
      <Typography variant="h1" sx={{ color: "text.primary" }}>
        kanban
      </Typography>
    </Stack>
  );
};
