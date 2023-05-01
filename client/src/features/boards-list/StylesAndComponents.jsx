import { Tab, Tabs } from "@mui/material";

import { styled } from "@mui/material/styles";

export const TabsStyled = styled(Tabs)(({ theme }) => ({
  textDecoration: "none",
  height: "100%",
}));

export const TabStyled = styled(Tab, {
  shouldForwardProp: (prop) => prop !== "newBoard",
})(({ theme, newBoard }) => ({
  justifyContent: "flex-start",
  color: theme.palette.common.mediumGrey,
  opacity: 1,
  padding: 0,
  paddingLeft: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(3),
  },
  marginRight: "32px",
  minHeight: "48px",
  height: "48px",
  borderRadius: "0px 100px 100px 0px",

  "&:hover": {
    backgroundColor: theme.palette.menuHover.backgroundColor,
    color: theme.palette.common.mainPurple,
  },

  "&.Mui-selected": {
    backgroundColor: theme.palette.common.mainPurple,
    color: theme.palette.common.white,
  },

  ...(newBoard && {
    backgroundColor: "inherit",
    color: theme.palette.common.mainPurple,
    "&.Mui-selected": {
      backgroundColor: "inherit",
      color: theme.palette.common.mainPurple,
    },
  }),
}));

export const headerStyle = (theme) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  paddingLeft: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(3),
  },
});

export const formControlStyles = (theme) => ({
  marginBottom: theme.spacing(3),
});

export const formControlStylesList = (theme) => ({
  marginBottom: theme.spacing(1.5),
});
