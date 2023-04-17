import { configureStore } from "@reduxjs/toolkit";

import { themeModeReducer } from "./features/theme-mode/theme-mode-slice";
import { drawerIsOpenReducer } from "./features/drawer/drawer-is-open-slice";
import { authUserReducer } from "./features/authorization/auth-user-slice";

export const store = configureStore({
  reducer: {
    themeMode: themeModeReducer,
    drawerIsOpen: drawerIsOpenReducer,
    authUser: authUserReducer,
  },
  devTools: true,
  middleware: (getDeafaultMiddlware) => getDeafaultMiddlware(),
  enhancers: [],
});
