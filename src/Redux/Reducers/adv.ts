import { createReducer } from "redux-starter-kit";

const defaultState = {
  student: [],
  curr: null
};

const adv = createReducer(defaultState, {
  replaceUser: (state, action) => {
    return {
      ...state,
      student: action.payload.student
    };
  },
  changeCurr: (state, action) => {
    return {
      ...state,
      curr: action.payload.curr
    };
  }
});

export default adv;
