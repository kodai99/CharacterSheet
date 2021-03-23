export const LOG_IN = "LOG_IN";
export const LogInAction = (userState) => {
  return {
    type: "LOG_IN",
    payload: {
      uid: userState.uid,
      username: userState.username,
      isSignedIn: true,
    }
  }
};

export const LOG_OUT = "LOG_OUT";
export const LogOutAction = () => {
  return {
    type: "LOG_OUT",
    payload: {
      uid: "",
      username: "",
      isSignedIn: false,
    }
  }
};