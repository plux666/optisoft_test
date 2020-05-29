import React, { useState } from 'react';


export default function DropBox(props) {

	const [done, setDone] = useState(false);

	function onDrop(e) {
		e.preventDefault();

		let file = e.dataTransfer.items[0].getAsFile();
		let fileName = file.name;

		file.text().then(res => {setDone(true); props.file(res, fileName);})
	}

	if (!done) {
		return(
			<div className='drop-box-container'
				id='drop-zone'
				onDrop={onDrop}
				onDragOver={(e) => {e.preventDefault()}}>
				<h2>DROP FILE HERE</h2>
			</div>
		)
	} else if (props.error) {
		return(
			<div className='drop-box-container'
				id='drop-zone'
				onDrop={onDrop}
				onDragOver={(e) => {e.preventDefault()}}>
				<h2>{"COULDN'T PROCESS FILE \n DROP AGAIN"}</h2>
			</div>
		)
	} else if (done) {
		return(
			<div className='drop-box-container'
				id='drop-zone'>
				<h2>PROCESSING...</h2>
			</div>
		)
	}
}
