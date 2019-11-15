import _axios from "axios";
import * as actions from "../Redux/Actions/loginAction";
import { store } from "../index";

const axios = _axios.create({
  baseURL: "http://localhost:4000/auth"
});