import React, { useState } from "react";
import { Typography, Link } from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";

import {TabStyled, TabsStyled, headerStyle} from "./StylesAndComponents";

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
