import { updateObject } from "../utility";
// import jwt_decode from 'jwt-decode';

const initialState = {
  isLoggedIn: !!localStorage.getItem("ACCESS_TOKEN"),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_LOGGED_IN_TRUE": {
      return updateObject(state, { isLoggedIn: true });
    }
    case "SET_IS_LOGGED_IN_FALSE": {
      localStorage.removeItem("ACCESS_TOKEN");
      return updateObject(state, { isLoggedIn: false });
    }

    default:
      return state;
  }
};

export default reducer;
