import React from 'react'
import './Comment.scss';

function Comment({comment}) {
    const commentsDate = new Date(parseInt(comment.timestamp));
  return (
    <div className="comment">
      <div className="comment__avatar"></div>
      <div className="comment__info">
        <h4 className="comment__info__name">{comment.name}</h4>
        <p className="comment__info__time">
          {commentsDate.toLocaleDateString("en-US")}
        </p>
      </div>
      <p>{comment.comment}</p>
    </div>
  );
}

export default Comment