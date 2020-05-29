import React from 'react';
import UserRow from './user-row.js'


export default function MainList(props) {

	function mapUsers() {
		let names = Object.keys(props.users).sort();
		return names.map(name => {
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
