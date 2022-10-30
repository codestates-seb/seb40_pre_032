/* eslint-disable react/prop-types */
import React from 'react';
import ButtonGroup from '../ButtonGroup';

function NumNBtn({ questions }) {
	return (
		<div className="text-left w-[727px] h-[35px] flex mb-[12px] items-center justify-between">
			<div>{questions.length} questions</div>
			<ButtonGroup />
		</div>
	);
}

export default NumNBtn;
