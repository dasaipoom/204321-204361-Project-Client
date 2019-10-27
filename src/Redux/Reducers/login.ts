import { createReducer } from "redux-starter-kit";

const defaultState = {
  jwt: null,
  isLoggingIn: false,
  isLogin: false,
  isError: false,
  username: null
};

const login = createReducer(defaultState, {
  loginStart: (state, action) => {
    return { ...state, isLoggingIn: true, isLogin: false, isError: false };
  },
  loginSuccess: (state, action) => {
    const { username, jwt } = action.payload;
    return { ...state, isLoggingIn: true, isLogin: true, username, jwt };
  },
  loginError: (state, action) => {
    return { ...state, isLoggingIn: false, isError: true };
  },
  logoutStart: (state, action) => {},
  logoutSuccess: (state, action) => {}
});

export default login;
