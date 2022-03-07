import React from "react";
import "./CommentsList.scss";
import Comment from "../Comment/Comment";

function CommentsList({ comments }) {
  return (
    <div className="list">
      {comments.map((comment, index) => {
        return <Comment comment={comment} key={index} />;
      })}
    </div>
  );
}

export default CommentsList;
