import React, { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme, alpha } from "@mui/material/styles";

import { theme as customTheme } from "../../styles/theme.js";

export const Layout = (props) => {
  const theme = useMemo(() => {
    let baseTheme = { ...customTheme };
    baseTheme.palette.mode = "light";

    if (baseTheme.palette.mode === "dark") {
      baseTheme.palette.background.default = baseTheme.palette.common.darkBG;
      baseTheme.palette.menuHover.backgroundColor = "white";
      baseTheme.palette.background.formBackground =
        baseTheme.palette.common.darkGrey;
    } else {
      baseTheme.palette.background.default = baseTheme.palette.common.lightBG;
      baseTheme.palette.background.formBackground = "white";
      baseTheme.palette.menuHover.backgroundColor = alpha(
        baseTheme.palette.common.mainPurple,
        0.1
      );
    }

    return createTheme(baseTheme);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};
