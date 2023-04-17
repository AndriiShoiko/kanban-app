import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { WorkspacePage } from "./pages/WorkspacePage";
import { LoginPage } from "./pages/LoginPage";
import { Layout } from "./features/layout/Layout";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<WorkspacePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
