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

export const toolbarStyle = (theme) => ({
  width: "100%",
  color: theme.palette.text.primary,
  backgroundColor: "inherit",
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
});

export const dividerStyle = (theme) => ({
  marginLeft: theme.spacing(4),
  marginRight: theme.spacing(4),
});

export const captionStyle = (theme) => ({
  display: "flex",
  alignItems: "center",
  minHeight: theme.components.header.heightDesktop,
  [theme.breakpoints.down("md")]: {
    minHeight: theme.components.header.heightTablet,
  },
});
