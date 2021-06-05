import { combineReducers } from "redux";
import app from "../store/app/AppReducer";
import auth from "../store/auth/AuthReducer";
import news from "../store/news/NewsReducer";

const rootReducer = combineReducers({
  app,
  auth,
  news,
});

export default rootReducer;
