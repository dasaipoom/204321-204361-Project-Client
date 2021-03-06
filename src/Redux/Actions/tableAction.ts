import { createAction } from "redux-starter-kit";

export const tableLoadStart = createAction("tableLoadStart");

export const tableLoadSuccess = createAction("tableLoadSuccess", table => {
  return {
    payload: {
      table
    }
  };
});

export const tableLoadError = createAction("tableLoadError");

export const updateEditedGrade = createAction("updateEditedGrade", course => {
  return {
    payload: {
      course
    }
  };
});
