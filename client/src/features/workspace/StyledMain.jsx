import { styled } from "@mui/material/styles";

export const StyledMain = styled("main", {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    flexGrow: 1,
    marginLeft: 0,
  
    height: `calc(100vh - ${theme.components.header.heightDesktop})`,
    [theme.breakpoints.down("md")]: {
      height: `calc(100vh - ${theme.components.header.heightTablet})`,
    },
  
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: theme.components.drawer.widthDesktop,
      [theme.breakpoints.down("md")]: {
        marginLeft: theme.components.drawer.widthTablet,
      },
    }),
  }));