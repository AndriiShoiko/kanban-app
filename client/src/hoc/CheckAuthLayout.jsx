import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  isAuth,
  userIsAuthSelector,
} from "../features/authorization/auth-user-slice";
import { IsntAuthorized } from "../features/authorization/IsntAuthorized";

export const CheckAuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const promise = dispatch(isAuth());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const authUser = useSelector((state) => userIsAuthSelector(state));

  if (!authUser) {
    return <IsntAuthorized />;
  }

  return <>{children}</>;
};
