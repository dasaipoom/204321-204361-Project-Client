import { createAction } from "redux-starter-kit";

export const replaceUser = createAction("replaceUser", student => {
  return {
    payload: {
      student
    }
  };
});

export const changeCurr = createAction("changeCurr", curr => {
  return {
    payload: {
      curr
    }
  };
});
