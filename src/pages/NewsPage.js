import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//actions
import {
  setUpdatedNews,
  setNewCommentValue,
  setAddNewComment,
} from "../store/news/NewsActions";
//selectors
import {
  getUpdatedNewsList,
  getNewCommentValue,
} from "../store/news/NewsSelectors";

const NewsPage = () => {
  const newslist = useSelector((state) => getUpdatedNewsList({ state })),
    comment = useSelector((state) => getNewCommentValue({ state })),
    dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUpdatedNews());
  }, []);

  const handleChangeComment = ({ target: { value } }) => {
    dispatch(setNewCommentValue(value));
  };

  const handleSubmitComment = () => {
    dispatch(setAddNewComment());
  };

  return (
    <div className='comment-wrapper'>
      <div class='post'>
        <textarea
          className='textarea'
          onChange={handleChangeComment}
          value={comment}
          type='text'
          placeholder='Add a comment'></textarea>
        <button onClick={handleSubmitComment}>Post</button>
      </div>
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
