import React from "react";

import { Workspace } from "../../features/workspace/Workspace";
import { BoardTable } from "../../features/board/BoardTable";

export const BoardPage = () => {
  return (
    <Workspace>
      <BoardTable />
    </Workspace>
  );
};
