
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