//utilities
import { updateObject } from "../utility";

const initialState = {
  newsList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_UPDATED_NEWS": {
      return updateObject(state, {
        newsList: action.payload,
      });
    }
    default:
      return state;
  }
};

export default reducer;
