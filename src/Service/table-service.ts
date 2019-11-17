import _axios from "axios";
import * as actions from "../Redux/Actions/tableAction";
import { store } from "../index";

const axios = _axios.create({
  baseURL: "http://10.80.5.132:4000/api/plan"
});

export function getTable(id: string) {
  return dispatch => {
    dispatch(actions.tableLoadStart());
    axios
      .get(`/${id}`, {
        headers: { Authorization: store.getState().login.jwt }
      })
      .then(val => {
        dispatch(actions.tableLoadSuccess(val.data));
      })
      .catch(err => {
        dispatch(actions.tableLoadError());
        console.error(err);
      });
  };
}