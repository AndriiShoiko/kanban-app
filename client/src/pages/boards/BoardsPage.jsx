import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Workspace } from "../../features/workspace/Workspace";
import { BoardTable } from "../../features/board/BoardTable";
import {
  getBoards,
  getBoardsSelector,
} from "../../features/boards-list/boards-list-slice";
import { useNavigate } from "react-router-dom";
import { BoardsService } from "../../services/boardsService";

export const BoardsPage = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const promiseBoards = BoardsService.getBoards();

    promiseBoards.then((res) => {
      const listBoards = res.data;
      if (listBoards.length) {
        navigate(`/boards/${listBoards[0].ref}`);
      }
    });
  }, []);

  return (
    <Workspace>
      <BoardTable />
    </Workspace>
  );
};
