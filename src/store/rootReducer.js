import { combineReducers } from "redux";
import app from "../store/app/AppReducer";
import auth from "../store/auth/AuthReducer";

const rootReducer = combineReducers({
  app,
  auth,
});

export default rootReducer;
