import { auth, db, FirebaseTimestamp } from "../../firebase/firebase";
import { push } from "connected-react-router";
import { LogInAction, LogOutAction } from "./actions";

const getUserDataFromFirestore = async (dispatch, user) => {
  const uid = user.uid;

  const snapshot = await db.collection("users").doc(uid).get();
  const username = snapshot.data().username;

  dispatch(LogInAction({
    uid: uid,
    username: username,
  }));
};

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    // バリデーション
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      alert("必須項目が未入力です、再度入力して下さい。");
      return;
    }

    const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    if (!reg.test(email)) {
      alert("メールアドレスの形式が間違っています、再度入力して下さい。");
      return;
    }

    if (password.length < 6) {
      alert("パスワードは６文字以上で入力して下さい。");
      return;
    }

    if (password !== confirmPassword) {
      alert("パスワードが一致しません、再度入力して下さい。");
      return;
    }

    // サインアップ処理
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      const uid = result.user.uid;
      const timestamp = FirebaseTimestamp.now();

      const userData = {
        uid: uid,
        username: username,
        email: email,
        created_at: timestamp,
        updated_at: timestamp,
      }

      await db.collection("users").doc(uid).set(userData);
      dispatch(push("/login"));

    } catch (err) {
      alert("アカウント登録に失敗しました。再度登録して下さい。");
      console.log(err);
    }
  };
};

export const resetPassword = (email) => {
  return async (dispatch) => {
    if (email === "") {
      alert("メールアドレスが未入力です、再度入力して下さい。");
      return;
    }

    try {
      await auth.sendPasswordResetEmail(email);
      alert("入力されたメールアドレスにメールを送信しました、ご確認下さい。");
      dispatch(push("/login"));

    } catch (err) {
      alert("パスワードのリセットに失敗しました。");
      console.log(err);
    }
  };
};

export const logIn = (email, password) => {
  return async (dispatch) => {
    // バリデーション
    if (email === "" || password === "") {
      alert("必須項目が未入力です、再度入力して下さい。");
      return;
    }

    // ログイン処理
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const user = result.user;

      getUserDataFromFirestore(dispatch, user);
      dispatch(push("/"));

    } catch (err) {
      alert("ログインに失敗しました、再度ログインして下さい。");
      console.log(err);
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    try {
      await auth.signOut();
      dispatch(LogOutAction());
      dispatch(push("/login"));
    } catch (err) {
      alert("ログアウトに失敗しました。再度ログアウトして下さい。");
      console.log(err);
    }
  };
};

export const checkAuthState = () => {
  return async (dispatch) => {
    try {
      const result = await auth.onAuthStateChanged(user => {
        if (user) {
          getUserDataFromFirestore(dispatch, user);
        } else {
          dispatch(push("/login"));
        }
      });
      return result;

    } catch (err) {
      alert("ログインしていません、再度ログインして下さい。");
      console.log(err);
    }
  };
};