import React from "react";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";

import { Header } from "../header/Header";
import { Drawer } from "../drawer/Drawer";
import { DrawerHeader } from "../drawer/DrawerHeader";

import { useDrawerIsOpen } from "../../hooks/useDrawerIsOpen";

import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { StyledMain } from "./StylesAndComponents";
import { StyledOpenDrawer } from "../../ui/buttons/OpenDrawer";

import { toggleIsOpen } from "../drawer/drawer-is-open-slice";

export const Workspace = (props) => {
  
  const dispatch = useDispatch();
  const isOpen = useDrawerIsOpen();

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Header />
        <Drawer />
        <StyledMain component="main" open={isOpen}>
          <DrawerHeader />
          {props.children}
        </StyledMain>
      </Box>
      <StyledOpenDrawer onClick={() => dispatch(toggleIsOpen())}>
        <VisibilityOffOutlinedIcon />
      </StyledOpenDrawer>
    </>
  );
};
