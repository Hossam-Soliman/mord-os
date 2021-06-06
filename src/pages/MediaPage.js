import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//actions
import {
  setUpdatedMedia,
  setNewImgPath,
  setAddNewImage,
} from "../store/media/MediaActions";
//selectors
import { getUpdatedMediaList } from "../store/media/MediaSelectors";
import { getIsLoaderOpen } from "../store/app/AppSelectors";

let date = new Date();

const MediaPage = () => {
  const mediaList = useSelector((state) => getUpdatedMediaList({ state })),
    showLoader = useSelector((state) => getIsLoaderOpen({ state })),
    dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUpdatedMedia());
  }, []);

  const addNewImagePath = async (e) => {
    dispatch(setNewImgPath(window.URL.createObjectURL(e.target.files[0])));
  };

  const handleSubmitImage = () => {
    dispatch(setAddNewImage());
  };

  return (
    <div className='article-section comment-wrapper'>
      {!showLoader && (
        <div class='post'>
          <input
            className='textarea'
            onChange={addNewImagePath}
            type='file'
            accept='image/*'
            style={{ width: "65%" }}></input>
          <button onClick={handleSubmitImage}>Post</button>
        </div>
      )}

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
                <span className='time'>{date.toDateString()} | </span>
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
