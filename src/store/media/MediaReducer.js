//utilities
import { updateObject } from "../utility";

const initialState = {
  mediaList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_UPDATED_MEDIA": {
      return updateObject(state, {
        mediaList: action.payload,
      });
    }
    default:
      return state;
  }
};

export default reducer;
