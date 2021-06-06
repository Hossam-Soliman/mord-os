import { updateObject } from "../utility";
// import jwt_decode from 'jwt-decode';

const initialState = {
  isLoggedIn: !!localStorage.getItem("ACCESS_TOKEN"),
  isLoaderOpen: false,
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

    case "SET_LOADER_OPEN_TRUE": {
      return updateObject(state, { isLoaderOpen: true });
    }
    case "SET_LOADER_OPEN_FALSE": {
      return updateObject(state, { isLoaderOpen: false });
    }

    default:
      return state;
  }
};

export default reducer;
