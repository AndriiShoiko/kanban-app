import React from "react";

import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import { useSelector } from "react-redux";

import { LinkPrimary } from "../../ui/fields/LinkPrimary";
import { MainLogo } from "../../ui/logos/MainLogo";
import { Layout } from "../layout/Layout";
import { STATUS_LOADING } from "./auth-user-slice";

export const IsntAuthorized = () => {
  const authUser = useSelector((state) => state.authUser);

  const loading = () => {
    return (
      <Layout>
        <Box
          sx={{
            display: "flex",
            width: "100wh",
            height: "100vh",
            backgroundColor: "background.default",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      </Layout>
    );
  };

  if (authUser.loading === STATUS_LOADING) {
    return loading();
  }

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          width: "100wh",
          height: "100vh",
          backgroundColor: "background.default",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 480,
            padding: 4,
            backgroundColor: "background.formBackground",
            borderRadius: "6px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <MainLogo />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <Typography variant="h3">User isn`t autorized</Typography>
          </Box>

          <Link to="/auth/login">
            <LinkPrimary variant="h4" component="span">
              Login
            </LinkPrimary>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};
