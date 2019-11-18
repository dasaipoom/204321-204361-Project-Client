import _axios from "axios";
import * as actions from "../Redux/Actions/loginAction";
import { store } from "../index";

const axios = _axios.create({
  baseURL: "http://localhost:4000/api/auth"
});

export function loggingIn(username: string, password: string) {
  return dispatch => {
    dispatch(actions.loginStart());
    axios
      .post("/login", {
        username,
        password
      })
      .then(res => {
        if (res.status === 200 && res.data.jwt)
          dispatch(
            actions.loginSuccess(
              res.data.username,
              res.data.jwt,
              res.data.userType,
              res.data.expireOn
            )
          );
        else dispatch(actions.loginError(res.data));
      })
      .catch(err => {
        if (err.response) dispatch(actions.loginError(err.response.data));
        else {
          dispatch(actions.loginError(null));
        }
        console.error(err);
      });
  };
}

export function loggingOut() {
  return dispatch => {
    dispatch(actions.logoutStart());
    axios
      .post("/logout", null, {
        headers: { Authorization: store.getState().login.jwt }
      })
      .then(_ => {
        dispatch(actions.logoutSuccess());
      })
      .catch(err => {
        dispatch(actions.logoutSuccess());
        console.error(err);
      });
  };
}
