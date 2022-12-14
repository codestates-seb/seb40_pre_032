import React from 'react';
import ButtonGroup from '../ButtonGroup';

function NumNBtn({ questions }) {
	return (
		<div className="text-left w-[678px] h-[35px] flex mb-[12px] items-center justify-between">
			<div>{questions.length} questions</div>
			<ButtonGroup />
		</div>
	);
}

export default NumNBtn;
