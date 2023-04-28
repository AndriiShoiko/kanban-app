import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography, Link } from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";

import { TabStyled, TabsStyled, headerStyle } from "./StylesAndComponents";

import {
  STATUS_LOADING,
  getBoards,
  getBoardsSelector,
} from "../boards-list/boards-list-slice";
import LoadingSpiner from "../loading/LoadingSpiner";

export const BoardsList = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = React.useCallback(
    (_, newValue) => {
      setValue(newValue);
    },
    [setValue]
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    const promise = dispatch(getBoards());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const boardsState = useSelector((state) => getBoardsSelector(state));

  if (boardsState.loading === STATUS_LOADING) {
    return <LoadingSpiner />;
  }

  const listBoard = boardsState.entities;

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
            label={element.name}
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
