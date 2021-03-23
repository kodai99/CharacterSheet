import React, { useState, useCallback } from 'react'
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { TextInput } from "../components/Anything/TextInput";
import { SubmitButton } from "../components/Anything/SubmitButton";
import { logIn } from "../reducks/users/operations";

export const LogIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, [setEmail]);

  const inputPassword = useCallback((e) => {
    setPassword(e.target.value);
  }, [setPassword]);

  return (
    <div>
      <h2>ログイン</h2>
      <TextInput
        fullWidth={true} label={"メールアドレス"} multiline={false} onChange={(e) => inputEmail(e)}
        required={true} rows={1} type={"email"} value={email}
      />
      <TextInput
        fullWidth={true} label={"パスワード"} multiline={false} onChange={(e) => inputPassword(e)}
        required={true} rows={1} type={"password"} value={password}
      />
      <div>
        <SubmitButton
          label={"ログインする"} onClick={() => dispatch(logIn(email, password))}
        />
        <p onClick={() => dispatch(push("/signup"))}>新規登録はこちら</p>
        <p onClick={() => dispatch(push("/reset"))}>パスワードをお忘れですか？</p>
      </div>
    </div>
  );
};