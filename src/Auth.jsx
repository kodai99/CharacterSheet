import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getIsSignedIn } from "./reducks/users/selectors";
import { checkAuthState } from "./reducks/users/operations";

export const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);

  useEffect(() => {
    if (!isSignedIn) {
      dispatch(checkAuthState());
    }
  }, []);

  if (!isSignedIn) {
    return <></>
  } else {
    return children;
  }
};