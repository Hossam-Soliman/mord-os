import axios from "axios";
//actions
import { setLoaderOpenTrue, setLoaderOpenFalse } from "../app/AppActions";

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
