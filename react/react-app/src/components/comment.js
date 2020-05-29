import React from 'react';


export default function Comment(props) {

  function mapReplies() {
    if (props.comment.replies) {
      return props.comment.replies.map((v, i) => {
        return(
          <Comment
            key={i}
            user={v.user}
            comment={{comment: v.comment, replies: v.replies}}>
          </Comment>
        )
      })
    }
  }

  // if user is not provided, comment considered as root comment
  let pClass = props.user ? '' : 'root'
  return(
    <div className={'comment'}>
      <h4>{props.user}</h4>
      <p className={pClass}>{props.comment.comment}</p>
      {mapReplies()}
    </div>
  )
}
