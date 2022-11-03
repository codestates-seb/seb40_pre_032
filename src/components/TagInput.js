/* eslint-disable */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TagInput({ tags, setTags }) {
	const removeTags = (indexToRemove) => {
		setTags(tags.filter((_, index) => index !== indexToRemove));
	};

	const addTags = (event) => {
		setTags([...tags, event.target.value]);
		event.target.value = '';
	};

	return (
		<div className="ml-2 mt-20">
			<ul className="flex">
				{tags.map((tag, index) => (
					<li key={uuidv4()}>
						<span className="bg-[#E1ECF4] rounded-md mx-2 px-2">{tag}</span>
						<span
							role="presentation"
							className="cursor-pointer hover:opacity-60 text-blue-500 text-2xl"
							onClick={() => removeTags(index)}
						>
							&times;
						</span>
					</li>
				))}
			</ul>
			<input
				type="text"
				className="ml-2 mt-2 pr-36 rounded-sm shadow-md focus:ring-offset-2 ring-blue-400 ring-2"
				onKeyUp={(event) => {
					event.key === 'Enter' && addTags(event);
				}}
				placeholder="Press enter to add tags"
			/>
		</div>
	);
}

export default TagInput;
