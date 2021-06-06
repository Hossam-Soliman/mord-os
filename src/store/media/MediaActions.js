import axios from "axios";
//actions
import { setLoaderOpenTrue, setLoaderOpenFalse } from "../app/AppActions";

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
