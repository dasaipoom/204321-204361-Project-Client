import _axios from "axios";
import * as actions from "../Redux/Actions/advAction";
import { store } from "../index";

const axios = _axios.create({
  baseURL: "http://10.80.6.161:4000/api/adv"
});

export function getStudent() {
  return dispatch => {
    axios
      .get("/stuli", {
        headers: { Authorization: store.getState().login.jwt }
      })
      .then(res => {
        dispatch(actions.replaceUser(res.data));
      })
      .catch(err => {
        console.error(err);
      });
  };
}
