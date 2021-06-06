import axios from "axios";
//local storage
import { getFromLocalStorage } from "../../services/localStorageService/localStorageService";
//actions
import { setLoaderOpenTrue, setLoaderOpenFalse } from "../app/AppActions";
//selectors
import { getUpdatedMediaList, getNewImgPath } from "./MediaSelectors";

export const setUpdatedMedia = () => async (dispatch) => {
  dispatch(setLoaderOpenTrue());
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
    dispatch({
      type: "SET_UPDATED_MEDIA",
      payload: res.data,
    });
    dispatch(setLoaderOpenFalse());
  } catch (err) {
    dispatch(setLoaderOpenFalse());
  }
};

export const setNewImgPath = (value) => ({
  type: "SET_NEW_IMG_VALUE",
  payload: value,
});

export const setAddNewImage = () => async (dispatch, getState) => {
  const state = getState(),
    mediaList = getUpdatedMediaList({ state }),
    newImgPath = getNewImgPath({ state }),
    newItem = {
      title: getFromLocalStorage("ACCESS_TOKEN"),
      thumbnailUrl: newImgPath,
    };
  if (newImgPath) {
    dispatch({
      type: "SET_UPDATED_MEDIA",
      payload: [newItem, ...mediaList],
    });
  } else {
    alert("Please attach a photo!");
  }
};
