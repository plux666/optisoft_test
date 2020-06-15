import React from 'react';
import UserRow from './user-row.js'


export default function MainList(props) {

	function mapUsers() {
		return props.users.map(name => {
			return(
				<UserRow
					key={name}
					delete={props.delete}
					user={name}
					comment={props.users[name]}/>
			)
		})
	}

	return(
		<div className='list'>
			{mapUsers()}
		</div>
	)
}
