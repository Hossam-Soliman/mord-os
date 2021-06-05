import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//actions
import { setUpdatedNews } from "../store/news/NewsActions";
//selectors
import { getUpdatedNewsList } from "../store/news/NewsSelectors";

const NewsPage = () => {
  const newslist = useSelector((state) => getUpdatedNewsList({ state })),
    dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUpdatedNews());
  }, []);

  console.log(newslist);

  return <div>news</div>;
};

export default NewsPage;
