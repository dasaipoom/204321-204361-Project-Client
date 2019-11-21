import { createAction } from "redux-starter-kit";

export const haveNew = createAction("haveNew");

export const readNew = createAction("readNew");

export const getChat = createAction("getChat", chat => {
  return {
    payload: {
      chat
    }
  };
});

export const replaceChat = createAction("replaceChat", chat => {
  return {
    payload: {
      chat
    }
  };
});
