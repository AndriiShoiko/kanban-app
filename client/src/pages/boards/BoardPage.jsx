import React from "react";

import { useDispatch } from "react-redux";

import { Workspace } from "../../features/workspace/Workspace";
import { BoardTable } from "../../features/board/BoardTable";
import { getBoards } from "../../features/boards-list/boards-list-slice";

export const BoardPage = () => {
/*   const dispatch = useDispatch();

  React.useEffect(() => {
    const promiseBoards = dispatch(getBoards());
    return () => {
      promiseBoards.abort();
    };
  }, [dispatch]); */

  return (
    <Workspace>
      <BoardTable />
    </Workspace>
  );
};
