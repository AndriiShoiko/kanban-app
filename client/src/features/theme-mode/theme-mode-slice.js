import { createSlice } from "@reduxjs/toolkit";

export const LIGHT = "light";
export const DARK = "dark";

const themeModeSlice = createSlice({
  name: "@@themeMode",
  initialState: LIGHT,
  reducers: {
    toggleMode: (state) => {
      if (state === LIGHT) {
        return DARK;
      } else {
        return LIGHT;
      }
    },
  },
});

export function themeModeSelector(state) {
  return state.themeMode;
}

export const { toggleMode } = themeModeSlice.actions;
export const themeModeReducer = themeModeSlice.reducer;
