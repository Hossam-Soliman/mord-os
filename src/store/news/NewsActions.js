import axios from "axios";
//local storage
import { getFromLocalStorage } from "../../services/localStorageService/localStorageService";
//actions
import { setLoaderOpenTrue, setLoaderOpenFalse } from "../app/AppActions";
//selecctors
import { getUpdatedNewsList, getNewCommentValue } from "./NewsSelectors";

export const setUpdatedNews = () => async (dispatch) => {
  dispatch(setLoaderOpenTrue());

  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments`
    );
    dispatch({
      type: "SET_UPDATED_NEWS",
      payload: res.data,
    });
    dispatch(setLoaderOpenFalse());
  } catch (err) {
    dispatch(setLoaderOpenFalse());
  }
};

export const setNewCommentValue = (value) => ({
  type: "SET_NEW_COMMENT_VALUE",
  payload: value,
});

export const setAddNewComment = () => async (dispatch, getState) => {
  const state = getState(),
    commmentsList = getUpdatedNewsList({ state }),
    newComment = getNewCommentValue({ state }),
    newItem = {
      name: getFromLocalStorage("ACCESS_TOKEN"),
      body: newComment,
    };
  if (newComment.length > 0) {
    dispatch({
      type: "SET_UPDATED_NEWS",
      payload: [newItem, ...commmentsList],
    });

    dispatch(setNewCommentValue(""));
  } else {
    alert("Please add at least one character!");
  }
};
