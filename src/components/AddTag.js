import React, { useState } from 'react';

function AddTag() {
	const initialTags = [];

	const [tags, setTags] = useState(initialTags);
	const [inputValue, setInputValue] = useState('');
	const addTags = (event) => {
		if (event.key === 'Enter') {
			setTags([...tags, event.target.value]);
			setInputValue('');
		}
	};

	return (
		<div className="w-[600px]">
			<ul>
				{tags.map((tag) => {
					return (
						<li>
							<span>{tag}</span>
						</li>
					);
				})}
			</ul>
			<input
				value={inputValue}
				onChange={(event) => setInputValue(event.target.value)}
				type="text"
				onKeyUp={(event) => {
					addTags(event);
				}}
			/>
		</div>
	);
}

export default AddTag;
