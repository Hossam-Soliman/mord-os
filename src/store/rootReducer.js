import { combineReducers } from "redux";
import app from "../store/app/AppReducer";
import auth from "../store/auth/AuthReducer";
import news from "../store/news/NewsReducer";
import media from "../store/media/MediaReducer";

const rootReducer = combineReducers({
  app,
  auth,
  news,
  media,
});

export default rootReducer;
