import React, { useState } from "react";
import { Tabs, Tab, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";

const TabsStyled = styled(Tabs)(({ theme }) => ({
  textDecoration: "none",
  height: "100%",
}));

const TabStyled = styled(Tab, {
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

const headerStyle = (theme) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  paddingLeft: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(3),
  },
});

const listBoard = ["Board 1", "Board 2", "Board 3"];

export const BoardsList = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography variant="h4" sx={headerStyle}>
        ALL BOARDS {listBoard.length}
      </Typography>
      <TabsStyled
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        component={Link}
      >
        {listBoard.map((element, index) => (
          <TabStyled
            icon={<DashboardOutlinedIcon sx={{ fontSize: 16 }} />}
            label={element}
            iconPosition="start"
            wrapped
            key={index}
          />
        ))}

        <TabStyled
          icon={<DashboardCustomizeOutlinedIcon sx={{ fontSize: 16 }} />}
          label="+ Create New Board"
          iconPosition="start"
          wrapped
          newBoard
        />
      </TabsStyled>
    </>
  );
};
