import { createReducer } from "redux-starter-kit";
import Cookies from "js-cookie";

const defaultState = {
  jwt: null,
  isOnProgress: false,
  isLogin: false,
  isError: false,
  errInfo: null,
  username: null,
  userType: null
};

const login = createReducer(defaultState, {
  resumeSession: (state, action) => {
    if (Cookies.get("username")) {
      return {
        ...state,
        isLogin: true,
        jwt: Cookies.get("jwt"),
        username: Cookies.get("username"),
        userType: Cookies.get("userType")
      };
    } else return state;
  },
  loginStart: (state, action) => {
    return {
      ...state,
      isOnProgress: true,
      isLogin: false,
      isError: false,
      jwt: null,
      errInfo: null,
      username: null,
      userType: null
    };
  },
  loginSuccess: (state, action) => {
    const { username, jwt, userType, expireOn } = action.payload;
    Cookies.set("username", username, { expires: new Date(expireOn * 1000) });
    Cookies.set("jwt", jwt, { expires: new Date(expireOn * 1000) });
    Cookies.set("userType", userType, { expires: new Date(expireOn * 1000) });
    return {
      ...state,
      isOnProgress: false,
      isLogin: true,
      username,
      jwt,
      userType
    };
  },
  loginError: (state, action) => {
    return {
      ...state,
      isOnProgress: false,
      isError: true,
      errInfo: action.payload.errInfo
    };
  },
  logoutStart: (state, action) => {
    return {
      ...state,
      isOnProgress: true
    };
  },
  logoutSuccess: (state, action) => {
    Cookies.remove("jwt"),
    Cookies.remove("username"),
    Cookies.remove("userType")
    return {
      ...state,
      jwt: null,
      isOnProgress: false,
      isLogin: false,
      isError: false,
      errInfo: null,
      username: null,
      userType: null
    };
  }
});

export default login;
