import React from "react";
import { Typography } from "@mui/material";
import { Layout } from "src/features/layout/Layout";
import { Workspace } from "./workspace/Workspace";

export const App = () => {
  return (
    <Layout>
      <Workspace>
        <Typography variant="h1">Hello</Typography>
      </Workspace>
    </Layout>
  );
};
