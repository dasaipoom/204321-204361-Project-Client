import { combineReducers } from "redux";
import login from "./login";
import table from "./table";
import chat from "./chat";
import adv from "./adv";

export default combineReducers({ login, table, chat, adv });
