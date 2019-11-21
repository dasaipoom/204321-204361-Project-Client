import { createAction } from "redux-starter-kit";

export const replaceUser = createAction("replaceUser", student => {
  return {
    payload: {
      student
    }
  };
});
