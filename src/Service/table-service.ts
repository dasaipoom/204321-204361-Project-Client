import _axios from "axios";
import * as actions from "../Redux/Actions/tableAction";
import { store } from "../index";

const axios = _axios.create({
<<<<<<< Updated upstream
  baseURL: "http://10.80.4.32:4000/api/plan"
=======
  baseURL: "http://localhost:4000/api/plan"
>>>>>>> Stashed changes
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
