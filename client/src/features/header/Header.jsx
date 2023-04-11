import React from "react";

import {
  Toolbar,
  Typography,
  Stack,
  Divider,
  IconButton,
  Collapse,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { MainLogo } from "../../ui/logos/MainLogo";
import { ButtonPrimaryL } from "../../ui/buttons/ButtonPrimaryL";

import { Box } from "@mui/system";
import { StyledAppBar } from "./StylesAndComponents";

import { useDarkMode } from "../../hooks/useDarkMode";
import { useDrawerIsOpen } from "../../hooks/useDrawerIsOpen";

import { captionStyle, dividerStyle, toolbarStyle } from "./StylesAndComponents";

export const Header = (props) => {
  const drawerIsOpen = useDrawerIsOpen();

  return (
    <StyledAppBar
      position="fixed"
      open={drawerIsOpen}
      darkMode={useDarkMode()}
      {...props}
    >
      <Toolbar sx={toolbarStyle} disableGutters>
        <Collapse orientation="horizontal" in={!drawerIsOpen}>
          <MainLogo />
        </Collapse>

        {!drawerIsOpen && (
          <Divider orientation="vertical" flexItem sx={dividerStyle} />
        )}

        <Box sx={captionStyle}>
          <Typography variant="h1">Platform Launch</Typography>
        </Box>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ marginLeft: "auto" }}
        >
          <ButtonPrimaryL>+ Add New Task</ButtonPrimaryL>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </StyledAppBar>
  );
};
