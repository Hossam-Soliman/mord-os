import React, { Fragment, useEffect } from "react";
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
    <Fragment>
      {newslist.map((item, i) => (
        <div
          style={{ marginLeft: 300 }}
          className='card v-card v-sheet theme--light elevation-2'>
          <div className='header'>
            <div className='v-avatar avatar' style={{ height: 50, width: 50 }}>
              <img src='https://images.unsplash.com/photo-1490894641324-cfac2f5cd077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=70' />
            </div>
            <p className='displayName title'>{item.name}</p>
            <span className='displayName caption'>{item.body}</span>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default NewsPage;
