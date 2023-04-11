import React from "react";

import { useDispatch } from "react-redux";

import { toggleMode } from "../theme-mode/theme-mode-slice";
import { toggleIsOpen } from "../drawer/drawer-is-open-slice";

import { useDarkMode } from "../../hooks/useDarkMode";

import { useDrawerIsOpen } from "../../hooks/useDrawerIsOpen";
import { BoardsList } from "../boards-list/BoardsList";
import { ThemeSwitcher } from "../../ui/buttons/ThemeSwitcher";
import { HideSidebar } from "../../ui/buttons/HideSidebar";
import { StyledDrawer } from "./StylesAndComponents";
import { DrawerHeader } from "./DrawerHeader";

export const Drawer = (props) => {
  const dispatch = useDispatch();

  return (
    <StyledDrawer
      variant="persistent"
      anchor="left"
      open={useDrawerIsOpen()}
      darkMode={useDarkMode()}
      {...props}
    >
      <DrawerHeader />
      <BoardsList />
      <ThemeSwitcher onChange={() => dispatch(toggleMode())} />
      <HideSidebar onClick={() => dispatch(toggleIsOpen())} />
    </StyledDrawer>
  );
};
