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

  return (
    <div className='comment-wrapper'>
      {newslist.map((item, i) => (
        <div key={i} className='comment-item '>
          <p>{item.name}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsPage;
