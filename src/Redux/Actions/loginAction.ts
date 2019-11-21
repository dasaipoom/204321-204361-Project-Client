import { createAction } from "redux-starter-kit";

export const loginStart = createAction("loginStart");

export const loginSuccess = createAction(
  "loginSuccess",
  (username, jwt, userType, expireOn, adv?) => {
    return {
      payload: {
        username,
        adv,
        jwt,
        userType,
        expireOn
      }
    };
  }
);

export const loginError = createAction("loginError", errInfo => {
  return {
    payload: {
      errInfo
    }
  };
});

export const logoutStart = createAction("logoutStart");

export const logoutSuccess = createAction("logoutSuccess");

export const resumeSession = createAction("resumeSession");
