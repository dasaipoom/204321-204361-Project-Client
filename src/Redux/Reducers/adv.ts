import { createReducer } from "redux-starter-kit";

const defaultState = {
  student: []
};

const adv = createReducer(defaultState, {
  replaceUser: (state, action) => {
    return {
      ...state,
      student: action.payload.student
    };
  }
});

export default adv;
