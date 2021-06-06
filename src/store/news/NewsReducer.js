//utilities
import { updateObject } from "../utility";

const initialState = {
  newsList: [],
  newComment: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_UPDATED_NEWS": {
      return updateObject(state, {
        newsList: action.payload,
      });
    }

    case "SET_NEW_COMMENT_VALUE": {
      return updateObject(state, {
        newComment: action.payload,
      });
    }
    default:
      return state;
  }
};

export default reducer;
