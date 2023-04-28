import { createSlice } from "@reduxjs/toolkit";

const initialState = Boolean(localStorage.getItem("drawerIsOpen"));

const drawerIsOpenSlice = createSlice({
  name: "@@drawerIsOpen",
  initialState: initialState,
  reducers: {
    toggleIsOpen: (state) => {
      if (state === false) {
        localStorage.setItem("drawerIsOpen", true);
        return true;
      } else {
        localStorage.setItem("drawerIsOpen", false);
        return false;
      }
    },
  },
});

export function drawerIsOpenSelector(state) {
  return state.drawerIsOpen;
}

export const { toggleIsOpen } = drawerIsOpenSlice.actions;
export const drawerIsOpenReducer = drawerIsOpenSlice.reducer;
