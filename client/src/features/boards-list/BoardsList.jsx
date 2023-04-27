import React from "react";
import { useDispatch } from "react-redux";

import { Typography, Link } from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";

import { TabStyled, TabsStyled, headerStyle } from "./StylesAndComponents";

import { getBoards, getBoardsSelector } from "../boards-list/boards-list-slice";

const listBoard = ["Board 1", "Board 2", "Board 3"];

const handleChange = (_, newValue) => {
  setValue(newValue);
};

export const BoardsList = () => {
  const [value, setValue] = React.useState(0);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const promise = dispatch(getBoards());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

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
