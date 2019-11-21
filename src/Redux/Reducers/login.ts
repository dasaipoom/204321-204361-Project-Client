import { createReducer } from "redux-starter-kit";
import Cookies from "js-cookie";
import { socket } from "../../Service/chat-service";

const defaultState = {
  jwt: null,
  isOnProgress: false,
  isLogin: false,
  isError: false,
  errInfo: null,
  username: null,
  userType: null,
  adv: null
};

const login = createReducer(defaultState, {
  resumeSession: (state, action) => {
    if (Cookies.get("username")) {
      socket.emit("tellname", {
        name: Cookies.get("username")
      });
      return {
        ...state,
        isLogin: true,
        jwt: Cookies.get("jwt"),
        username: Cookies.get("username"),
        userType: Cookies.get("userType"),
        adv: Cookies.get("adv")
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
      userType: null,
      adv: null
    };
  },
  loginSuccess: (state, action) => {
    const { username, jwt, userType, expireOn, adv } = action.payload;
    Cookies.set("username", username, { expires: new Date(expireOn * 1000) });
    Cookies.set("jwt", jwt, { expires: new Date(expireOn * 1000) });
    Cookies.set("userType", userType, { expires: new Date(expireOn * 1000) });
    Cookies.set("adv", adv, { expires: new Date(expireOn * 1000) });
    socket.open();
    socket.emit("tellname", {
      name: username
    });
    return {
      ...state,
      isOnProgress: false,
      isLogin: true,
      username,
      jwt,
      userType,
      adv
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
    Cookies.remove("jwt");
    Cookies.remove("username");
    Cookies.remove("userType");
    Cookies.remove("adv");
    socket.close();
    return {
      ...state,
      jwt: null,
      isOnProgress: false,
      isLogin: false,
      isError: false,
      errInfo: null,
      username: null,
      userType: null,
      adv: null
    };
  }
});

export default login;
