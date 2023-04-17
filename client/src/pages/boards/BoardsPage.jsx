import React from "react";
import { Workspace } from "../../features/workspace/Workspace";
import { BoardTable } from "../../features/board/BoardTable";
import { EmptyBoard } from "../../features/board/EmptyBoard";

export const BoardsPage = () => {
  return (
    <Workspace>
      <BoardTable />
      {/* <EmptyBoard /> */}
    </Workspace>
  );
};
