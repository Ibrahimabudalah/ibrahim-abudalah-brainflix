import React from 'react'
import './CommentsList.scss';
import Comment from '../Comment/Comment'

function Comments({comments}) {
  return (
    <div className='list'>
      {comments.map((comment, like) => {
        return(
          <Comment 
            comment = {comment}
            key = {like}
          />
        )
      })}
    </div>
  )
}

export default Comments