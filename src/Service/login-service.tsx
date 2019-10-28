import _axios from "axios";
import * as actions from "../Redux/Actions";

const axios = _axios.create({
  baseURL: "http://localhost:4000/auth"
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
        if (res.status !== 200) {
          dispatch(actions.loginError());
        } else actions.loginSuccess(res.data.username, res.data.jwt);
      })
      .catch(err => {
        console.error(err);
      });
  };
}
