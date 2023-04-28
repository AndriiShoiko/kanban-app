import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Typography, Link } from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";

import { TabStyled, TabsStyled, headerStyle } from "./StylesAndComponents";

import { getBoards, getBoardsSelector } from "../boards-list/boards-list-slice";

export const BoardsList = () => {
  const { boardRefId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const promiseBoards = dispatch(getBoards());
    return () => {
      promiseBoards.abort();
    };
  }, [dispatch, boardRefId]);

  const boardsState = useSelector((state) => getBoardsSelector(state));

  const listBoard = boardsState.entities;

  const searchIndex = listBoard.findIndex(
    (element) => element.ref === boardRefId
  );

  if (!listBoard) {
    return <></>;
  }

  return (
    <>
      <Typography variant="h4" sx={headerStyle}>
        ALL BOARDS {listBoard.length}
      </Typography>
      <TabsStyled
        orientation="vertical"
        variant="scrollable"
        value={Math.max(searchIndex, 0)}
        component={Link}
      >
        {listBoard.map((element) => (
          <TabStyled
            icon={<DashboardOutlinedIcon sx={{ fontSize: 16 }} />}
            label={element.name}
            iconPosition="start"
            wrapped
            key={element.id}
            onClick={() => navigate(`/boards/${element.ref}`)}
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
