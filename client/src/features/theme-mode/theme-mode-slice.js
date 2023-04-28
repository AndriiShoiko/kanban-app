import { createSlice } from "@reduxjs/toolkit";

export const LIGHT = "light";
export const DARK = "dark";

const initialState = localStorage.getItem("themeMode") || LIGHT;

const themeModeSlice = createSlice({
  name: "@@themeMode",
  initialState: initialState,
  reducers: {
    toggleMode: (state) => {
      if (state === LIGHT) {
        localStorage.setItem("themeMode", DARK);
        return DARK;
      } else {
        localStorage.setItem("themeMode", LIGHT);
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
