import { createSlice } from "@reduxjs/toolkit";

const drawerIsOpenSlice = createSlice({
  name: "@@drawerIsOpen",
  initialState: false,
  reducers: {
    toggleIsOpen: (state) => {
      if (state === false) {
        return true;
      } else {
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
