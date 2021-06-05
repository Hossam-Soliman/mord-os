//utilities
import { updateObject } from "../utility";

const initialState = {
  email: "",
  password: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SIGNIN_FORM_EMAIL": {
      return updateObject(state, {
        email: action.value,
      });
    }
    case "SET_SIGNIN_FORM_PASSWORD": {
      return updateObject(state, {
        password: action.value,
      });
    }
    default:
      return state;
  }
};

export default reducer;
