import { configureStore } from "@reduxjs/toolkit";

import { themeModeReducer } from "./features/theme-mode/theme-mode-slice";
import { drawerIsOpenReducer } from "./features/drawer/drawer-is-open-slice";
import { authUserReducer } from "./features/authorization/auth-user-slice";
import { boardsReducer } from "./features/boards-list/boards-list-slice";
import { boardReducer } from "./features/board/board-slice";

export const store = configureStore({
  reducer: {
    themeMode: themeModeReducer,
    drawerIsOpen: drawerIsOpenReducer,
    authUser: authUserReducer,
    boards: boardsReducer,
    board: boardReducer,
  },
  devTools: true,
  middleware: (getDeafaultMiddlware) => getDeafaultMiddlware(),
  enhancers: [],
});
