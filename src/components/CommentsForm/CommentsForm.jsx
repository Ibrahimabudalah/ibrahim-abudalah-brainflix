import React from "react";
import "./CommentsForm.scss";
import image from "../../assets/images/Mohan-muruge.jpg";
import commentLogo from "../../assets/icons/add_comment.svg";


function CommentsForm({ comments }) {
  // console.log(comments);
  return (
    <div className="form">
      <h5 className="form__header">{comments.length + " Comments"}</h5>
      <div className="form__container">
        <img src={image} alt="avatar" className="form__container__image" />
        <div className="form__container__field">
          <h6 className="form__container__field__header">
            JOIN THE CONVERSATION
          </h6>
          <input
            type="text"
            placeholder="Add a new comment"
            className="form__container__field__input"
          />
          <button className="form__container__field__button">
            {/* <img src={commentLogo} alt="comment" className="form__icon" />{" "} */}
            COMMENT
          </button>
        </div>

        <button className="form__button">
          {/* <img src={commentLogo} alt="comment" className="form__icon" />  */}
          COMMENT
        </button>
      </div>
    </div>
  );
}

export default CommentsForm;
