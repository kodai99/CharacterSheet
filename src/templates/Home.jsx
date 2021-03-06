import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../reducks/users/operations";
import { getUserId, getUsername } from "../reducks/users/selectors";

export const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUsername(selector);

  return (
    <div>
      <h2>Home</h2>
      <p>ユーザーID：{uid}</p>
      <p>ユーザー名：{username}</p>
      <button
        onClick={() => dispatch(logOut())}
      >
        ログアウト
      </button>
    </div>
  );
};