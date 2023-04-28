import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BoardsPage } from "./pages/boards/BoardsPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { Layout } from "./features/layout/Layout";
import { StartEndpoint } from "./pages/StartEndpoint";
import { BoardPage } from "./pages/boards/BoardPage";
import { NewBoardPage } from "./pages/boards/NewBoardPage";
import { EditBoardPage } from "./pages/boards/EditBoardPage";
import { DeleteBoardPage } from "./pages/boards/DeleteBoardPage";
import { NewTaskPage } from "./pages/tasks/NewTaskPage";
import { EditTaskPage } from "./pages/tasks/EditTaskPage";
import { DeleteTaskPage } from "./pages/tasks/DeleteTaskPage";
import { LogoutPage } from "./pages/auth/LogoutPage";
import { ForgotPage } from "./pages/auth/ForgotPage";
import { AuthorizationPage } from "./pages/auth/AuthorizationPage";
import { CheckAuthLayout } from "./hoc/CheckAuthLayout";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<StartEndpoint />} />
          <Route
            path="/boards"
            element={
              <CheckAuthLayout>
                <BoardsPage />
              </CheckAuthLayout>
            }
          />
          <Route
            path="/boards/:boardRefId"
            element={
              <CheckAuthLayout>
                <BoardPage />
              </CheckAuthLayout>
            }
          />
          <Route path="/boards/new" element={<NewBoardPage />} />
          <Route path="/boards/:boardRefId/edit" element={<EditBoardPage />} />
          <Route
            path="/boards/:boardRefId/delete"
            element={<DeleteBoardPage />}
          />

          <Route
            path="/boards/:taskRefId/tasks/new"
            element={<NewTaskPage />}
          />
          <Route
            path="/boards/:taskRefId/tasks/:taskRefId/edit"
            element={<EditTaskPage />}
          />
          <Route
            path="/boards/:taskRefId/tasks/:taskRefId/delete"
            element={<DeleteTaskPage />}
          />

          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/logout" element={<LogoutPage />} />
          <Route path="/auth/forgot" element={<ForgotPage />} />
          <Route path="/auth/authorization" element={<AuthorizationPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
