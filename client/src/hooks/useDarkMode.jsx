import { useSelector } from "react-redux";

import { themeModeSelector } from "../features/theme-mode/theme-mode-slice";
import { DARK } from "../features/theme-mode/theme-mode-slice";

export const useDarkMode = () => {
  const themeMode = useSelector((store) => themeModeSelector(store));
  return themeMode === DARK;
};