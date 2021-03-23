import React, { useState, useCallback } from 'react'
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { TextInput } from "../components/Anything/TextInput";
import { SubmitButton } from "../components/Anything/SubmitButton";
import { resetPassword } from "../reducks/users/operations";

export const Reset = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const inputEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, [setEmail]);

  return (
    <div>
      <h2>パスワードのリセット</h2>
      <TextInput
        fullWidth={true} label={"メールアドレス"} multiline={false} onChange={(e) => inputEmail(e)}
        required={true} rows={1} type={"email"} value={email}
      />

      <div>
        <SubmitButton
          label={"パスワードをリセットする"} onClick={() => dispatch(resetPassword(email))}
        />
        <p onClick={() => dispatch(push("/login"))}>ログイン画面に戻る</p>
      </div>
    </div>
  );
};