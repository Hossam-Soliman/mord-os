import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//actions
import { setUpdatedMedia } from "../store/media/MediaActions";
//selectors
import { getUpdatedMediaList } from "../store/media/MediaSelectors";

const MediaPage = () => {
  const mediaList = useSelector((state) => getUpdatedMediaList({ state })),
    dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUpdatedMedia());
  }, []);

  return (
    <div className='article-section'>
      <h2 className='title'>Gallery</h2>
      <ul className='article-list'>
        {mediaList.map((item, i) => (
          <li key={i} className='item'>
            <div className='article-card'>
              <div className='media'>
                <a className='link' href='#'>
                  <img className='image' src={item.thumbnailUrl} />
                </a>
              </div>
              <div className='meta'>
                <span className='time'>6th June, 2021 | </span>
                <span className='byline'>Gallery </span>
              </div>
              <h5 className='title-style'>{item.title}</h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaPage;
