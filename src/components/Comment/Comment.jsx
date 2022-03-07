import React from "react";
import "./Comment.scss";

function Comment({ comment }) {
  const commentDate = new Date(parseInt(comment.timestamp));
  return (
    <div className="comment">
      <div className="comment__container">
        <div className="comment__container__avatar"></div>
      </div>

      <div className="comment__container-two">
        <div className="comment__container__wrapper">
          <h4 className="comment__container-two__name">{comment.name}</h4>
          <p className="comment__container-two__time">
            {commentDate.toLocaleDateString("en-US")}
          </p>
        </div>

        <p className="comment__container-two__text">{comment.comment}</p>
      </div>

      <div className="comment__info"></div>
    </div>
  );
}

export default Comment;
