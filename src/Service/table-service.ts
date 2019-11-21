import _axios from "axios";
import * as actions from "../Redux/Actions/tableAction";
import { store } from "../index";

const axios = _axios.create({
  baseURL: "http://10.80.6.161:4000/api/plan"
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

export function supdate(CourseID, Year, Term, EditedGrade) {
  axios
    .put(`/${store.getState().login.username}`, {
      CourseID, Year, Term, EditedGrade
    }, {
      headers: { Authorization: store.getState().login.jwt }
    })
    .catch(err => {
      console.error(err);
    });
}
