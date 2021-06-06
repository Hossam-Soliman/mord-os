//utilities
import { updateObject } from "../utility";

const initialState = {
  mediaList: [],
  imgPath: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_UPDATED_MEDIA": {
      return updateObject(state, {
        mediaList: action.payload,
      });
    }

    case "SET_NEW_IMG_VALUE": {
      return updateObject(state, {
        imgPath: action.payload,
      });
    }
    default:
      return state;
  }
};

export default reducer;
