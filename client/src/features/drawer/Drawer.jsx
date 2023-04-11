import React from "react";

import { useDarkMode } from "../../hooks/useDarkMode";

import { useDrawerIsOpen } from "../../hooks/useDrawerIsOpen";
import { BoardsList } from "./BoardsList";
import { ThemeSwitcher } from "../../ui/buttons/ThemeSwitcher";
import { HideSidebar } from "../../ui/buttons/HideSidebar";
import { StyledDrawer } from "./StylesAndComponents";
import { DrawerHeader } from "./DrawerHeader";

export const Drawer = (props) => {
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
      <ThemeSwitcher onChange={() => console.log("theme swither")} />
      <HideSidebar onClick={() => console.log("hide sidebar")} />
    </StyledDrawer>
  );
};
