import { createReducer } from "redux-starter-kit";

const defaultState = {
  table: null,
  isOnProgress: false,
  isError: false,
  maxYear: null
};

const table = createReducer(defaultState, {
  tableLoadStart: (state, action) => {
    return {
      ...state,
      table: null,
      isOnProgress: true,
      isError: false,
      maxYear: null
    };
  },
  tableLoadSuccess: (state, action) => {
    return {
      ...state,
      table: action.payload.table,
      isOnProgress: false,
      isError: false,
      maxYear: action.payload.table
        .map(val => val.Year)
        .reduce((a, b) => {
          return Math.max(a, b);
        })
    };
  },
  tableLoadError: (state, action) => {
    return {
      ...state,
      isOnProgress: false,
      isError: true
    };
  },
  updateEditedGrade: (state, action) => {
    const newTable = state.table.map(ele => {
      if (ele.CourseID !== action.payload.course.CourseID) return ele;
      return {
        ...ele,
        EditedGrade: action.payload.course.EditedGrade
      };
    });
    return {
      ...state,
      table: newTable
    };
  }
});

export default table;
