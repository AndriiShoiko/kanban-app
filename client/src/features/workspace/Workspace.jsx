import React from "react";
import { Box } from "@mui/material";

import { Header } from "../header/Header";
import { Drawer } from "../drawer/Drawer";
import { DrawerHeader } from "../drawer/DrawerHeader";

import { useDrawerIsOpen } from "../../hooks/useDrawerIsOpen";

import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { StyledMain } from "./StylesAndComponents";
import { StyledOpenDrawer } from "../../ui/buttons/OpenDrawer";

export const Workspace = (props) => {
  
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <Header />
          <Drawer />
          <StyledMain component="main" open={useDrawerIsOpen()}>
            <DrawerHeader />
            {props.children}
          </StyledMain>
        </Box>
        <StyledOpenDrawer onClick={() => context.toogleDrawerIsOpen()}>
          <VisibilityOffOutlinedIcon />
        </StyledOpenDrawer>
      </>
    );
  };