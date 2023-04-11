import React from "react";

import { MainLogo } from "../../ui/logos/MainLogo";
import { StyledDrawerHeader } from "./StylesAndComponents";

export const DrawerHeader = () => {
  return (
    <StyledDrawerHeader>
      <MainLogo />
    </StyledDrawerHeader>
  );
};
