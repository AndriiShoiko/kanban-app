import { useSelector } from "react-redux";

import { tokenSelector } from "../features/authorization/auth-user-slice";

export const useToken = () => {
  const token = useSelector((store) => tokenSelector(store));
  return token;
};
