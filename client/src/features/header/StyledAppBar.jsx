
import { AppBar } from "@mui/material";

import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
  shouldForwardProp: (prop) => prop !== "darkMode",
})(({ theme, open, darkMode }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: "none",
  alignItems: "center",
  borderBottom: "1px solid",
  borderBottomColor: theme.palette.divider,

  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  ...(open && {
    width: `calc(100% - ${theme.components.drawer.widthDesktop})`,
    marginLeft: theme.components.drawer.widthDesktop,

    [theme.breakpoints.down("md")]: {
      width: `calc(100% - ${theme.components.drawer.widthTablet})`,
      marginLeft: theme.components.drawer.widthTablet,
    },

    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),

  ...(darkMode && {
    backgroundColor: theme.palette.common.darkGrey,
  }),
}));
