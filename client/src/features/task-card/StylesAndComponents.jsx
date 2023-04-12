import { Card, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardTaskStyle = styled(Card, {
  shouldForwardProp: (prop) => prop !== "darkMode",
})(({ theme, darkMode }) => ({
  ...theme.components.cardTask,
  boxShadow: "0px 4px 6px rgba(54, 78, 126, 0.101545)",
  "&:hover": {
    cursor: "pointer",
  },
  ...(darkMode && {
    backgroundColor: theme.palette.common.darkGrey,
  }),
}));

export const ViewTaskBoxStyle = styled(Box, {
  shouldForwardProp: (prop) => prop !== "darkMode",
})(({ theme, darkMode }) => ({
  ...theme.components.modalDialog,
  backgroundColor: theme.palette.common.white,
  color: theme.palette.text.primary,
  padding: theme.spacing(4),

  ...(darkMode && {
    backgroundColor: theme.palette.common.darkGrey,
  }),
}));
