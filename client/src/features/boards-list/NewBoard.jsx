import React from "react";

import { Box, FormControl, Modal, Stack, Typography } from "@mui/material";

import { useDarkMode } from "../../hooks/useDarkMode";
import { ViewTaskBoxStyle } from "../task-card/StylesAndComponents";
import { FormHelperTextPrimary } from "../../ui/fields/FormHelperTextPrimary";
import { TextFieldPrimary } from "../../ui/fields/TextFieldPrimary";
import {
  formControlStyles,
  formControlStylesList,
} from "./StylesAndComponents";
import { ButtonClear } from "../../ui/buttons/ButtonClear";
import { ButtonSecondary } from "../../ui/buttons/ButtonSecondary";
import { ButtonPrimaryS } from "../../ui/buttons/ButtonPrimaryS";

export const NewBoard = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ViewTaskBoxStyle darkMode={useDarkMode()}>
        <Typography variant="h2" marginBottom={3}>
          Add New Board
        </Typography>
        <Box>
          <form>
            <FormControl fullWidth sx={formControlStyles}>
              <FormHelperTextPrimary id="name-helper-text">
                Name
              </FormHelperTextPrimary>
              <TextFieldPrimary
                placeholder="e.g. Web Design"
                aria-describedby="name-helper-text"
                size="medium"
              />
            </FormControl>
            <FormHelperTextPrimary id="name-helper-text">
              Columns
            </FormHelperTextPrimary>
            <FormControl fullWidth sx={formControlStylesList}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <TextFieldPrimary
                  fullWidth
                  placeholder="e.g. Todo"
                  size="medium"
                />
                <ButtonClear />
              </Stack>
            </FormControl>
            <FormControl fullWidth sx={formControlStylesList}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <TextFieldPrimary
                  fullWidth
                  placeholder="e.g. Todo"
                  size="medium"
                />
                <ButtonClear />
              </Stack>
            </FormControl>
            <Stack gap={3}>
              <ButtonSecondary>+ Add New Column</ButtonSecondary>
              <ButtonPrimaryS>Create New Board</ButtonPrimaryS>
            </Stack>
          </form>
        </Box>
      </ViewTaskBoxStyle>
    </Modal>
  );
};
