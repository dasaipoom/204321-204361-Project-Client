import { createReducer } from "redux-starter-kit";

const defaultState = {
  chat: [],
  newChat: false
};

const chat = createReducer(defaultState, {
  haveNew: (state, action) => {
    return {
      ...state,
      newChat: true
    };
  },
  readNew: (state, action) => {
    return {
      ...state,
      newChat: false
    };
  },
  getChat: (state, action) => {
    return {
      ...state,
      chat: [...state.chat, ...action.payload.chat]
    };
  },
  replaceChat: (state, action) => {
    return {
      ...state,
      chat: [...action.payload.chat]
    };
  }
});

export default chat;
