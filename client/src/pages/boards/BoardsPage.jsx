import React from "react";

import { Workspace } from "../../features/workspace/Workspace";
import { BoardTable } from "../../features/board/BoardTable";

export const BoardsPage = () => {
  return (
    <Workspace>
      <BoardTable />
    </Workspace>
  );
};
