import React, { useState, useCallback } from 'react'
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { TextInput } from "../components/Anything/TextInput";
import { SubmitButton } from "../components/Anything/SubmitButton";
import { signUp } from "../reducks/users/operations";

export const SignUp = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputUsername = useCallback((e) => {
    setUsername(e.target.value);
  }, [setUsername]);

  const inputEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, [setEmail]);

  const inputPassword = useCallback((e) => {
    setPassword(e.target.value);
  }, [setPassword]);

  const inputConfirmPassword = useCallback((e) => {
    setConfirmPassword(e.target.value);
  }, [setConfirmPassword]);

  return (
    <div>
      <h2>アカウント登録</h2>
      <TextInput
        fullWidth={true} label={"ユーザー名"} multiline={false} onChange={(e) => inputUsername(e)}
        required={true} rows={1} type={"text"} value={username}
      />
      <TextInput
        fullWidth={true} label={"メールアドレス"} multiline={false} onChange={(e) => inputEmail(e)}
        required={true} rows={1} type={"email"} value={email}
      />
      <TextInput
        fullWidth={true} label={"パスワード"} multiline={false} onChange={(e) => inputPassword(e)}
        required={true} rows={1} type={"password"} value={password}
      />
      <TextInput
        fullWidth={true} label={"パスワード確認"} multiline={false} onChange={(e) => inputConfirmPassword(e)}
        required={true} rows={1} type={"password"} value={confirmPassword}
      />
      <div>
        <SubmitButton
          label={"アカウントを登録する"} onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
        />
        <p onClick={() => dispatch(push("/login"))}>既に登録済みの方はこちら</p>
      </div>
    </div>
  );
};