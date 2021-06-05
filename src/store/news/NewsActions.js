import axios from "axios";

export const setUpdatedNews = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments`
    );
    dispatch({
      type: "SET_UPDATED_NEWS",
      payload: res.data,
    });
  } catch (err) {
    console.log("error");
  }
};
