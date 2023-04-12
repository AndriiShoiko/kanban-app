import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledNewColumn = styled(Box, {
  shouldForwardProp: (prop) => prop !== "darkMode",
})(({ theme, darkMode }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: `calc(100% - ${theme.spacing(4)})`,
  width: "100%",
  marginTop: theme.spacing(4),
  background:
    "linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.5) 100%)",
  borderRadius: "6px",
  ...theme.components.cardTask,
  ...(darkMode && {
    background:
      "linear-gradient(180deg, rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.125) 100%)",
  }),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "30px",
  backgroundColor: "inherit",
  color: theme.palette.common.mediumGrey,
  "&:hover": {
    backgroundColor: "inherit",
    cursor: "pointer",
    color: theme.palette.common.mainPurple,
  },
}));
