export const setUpdatedNews = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    dispatch({
      type: "SET_UPDATED_NEWS",
      payload: res.data,
    });
  } catch (err) {
    console.log("error");
  }
};
