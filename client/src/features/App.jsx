import React from "react";

import { Layout } from "src/features/layout/Layout";
import { Workspace } from "./workspace/Workspace";
import { BoardTable } from "./board/BoardTable";
import { EmptyBoard } from "./board/EmptyBoard";

export const App = () => {
  return (
    <Layout>
      <Workspace>
        <BoardTable />
        {/* <EmptyBoard /> */}
      </Workspace>
    </Layout>
  );
};
