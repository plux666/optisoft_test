import React, { useState } from 'react';
import Comment from './comment.js'


export default function UserRow(props) {

	const [show, toggleShow] = useState(false);

	function mapComments() {
    return props.comment.map((v, i) => {
      return (
				<Comment
					key={i}
					delete={props.delete}
					comment={{comment: v.comment, replies: v.replies}}>
				</Comment>
			)
    })
  }

	if (!show) {
		return(
			<div className='use-row-small' onClick={() => {toggleShow(true)}}>
				<i onClick={(e) => {e.stopPropagation(); props.delete(props.user)}}
					className="material-icons delete-icon">delete</i>
				<h3>{props.user}</h3>
			</div>
		)
	} else if (show) {
		return(
			<div className={'use-row-open'}>
				<i onClick={(e) => {e.stopPropagation(); props.delete(props.user)}}
					 className="material-icons delete-icon">delete</i>
				<h3 onClick={() => {toggleShow(false)}}>{props.user}</h3>
				{mapComments()}
			</div>
		)
	}
}
