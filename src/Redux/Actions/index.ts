import { createAction } from "redux-starter-kit";

export const loginStart = createAction("loginStart");

export const loginSuccess = createAction("loginSuccess", (username, jwt) => {
  return {
    payload: {
      username,
      jwt
    }
  };
});

export const loginError = createAction("loginError");
