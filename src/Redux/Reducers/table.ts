import { createReducer } from "redux-starter-kit";

const defaultState = {
  table: null,
  isOnProgress: false,
  isError: false
};

const table = createReducer(defaultState, {
  tableLoadStart: (state, action) => {
    return {
      ...state,
      table: null,
      isOnProgress: true,
      isError: false
    };
  },
  tableLoadSuccess: (state, action) => {
    console.log(action.payload.table);
    return {
      ...state,
      table: action.payload.table,
      isOnProgress: false,
      isError: false
    };
  },
  tableLoadError: (state, action) => {
    return {
      ...state,
      isOnProgress: false,
      isError: true
    };
  }
});

export default table;
