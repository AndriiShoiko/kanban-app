import { useSelector } from "react-redux";

import { drawerIsOpenSelector } from "../features/drawer/drawer-is-open-slice";

export const useDrawerIsOpen = () => {    
    const drawerIsOpen = useSelector((store) => drawerIsOpenSelector(store));
    return drawerIsOpen;
}