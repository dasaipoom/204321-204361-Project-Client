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
        if (res.status === 200 && res.data.jwt)
        dispatch(actions.loginSuccess(
            res.data.username,
            res.data.jwt,
            res.data.userType,
            res.data.expireOn
          ));
        else dispatch(actions.loginError(res.data.errInfo));
      })
      .catch(err => {
        if (err.response)
          dispatch(actions.loginError(err.response.data.errInfo));
        console.error(err);
      });
  };
}
