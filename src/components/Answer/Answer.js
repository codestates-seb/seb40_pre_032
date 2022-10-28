import React from 'react';
import AddComment from './AddComment';
import Arrow from './Arrow';
import Date from './Date';

function Answer() {
	return (
		<div className="flex mx-auto justify-center">
			<div className="flex-col">
				<Arrow />
			</div>
			<div className="px-4 ">
				Can you explain what were you expecting to happen when clicking on the
				Edit button? With your current code editData is the exact same as data,
				so nothing changes when you click that button -{' '}
				<span className="text-blue-500">juliomalves</span>
				<Date />
				<AddComment />
				<span className="opacity-50">Shared | Edit | Follow | Flag</span>
			</div>
		</div>
	);
}

export default Answer;
