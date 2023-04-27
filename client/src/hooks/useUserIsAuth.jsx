import { useDispatch, useSelector } from "react-redux";

import {
  isAuth,
  userIsAuthSelector,
} from "../features/authorization/auth-user-slice";

export const useUserIsAuth = () => {
  const dispatch = useDispatch();
  dispatch(isAuth());

  const userIsAuth = useSelector((store) => userIsAuthSelector(store));

  return userIsAuth;
};
