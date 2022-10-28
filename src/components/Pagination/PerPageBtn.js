/* eslint-disable react/prop-types */
import React from 'react';

function PerPageBtn({ setLimit, limit }) {
	return (
		<div className="flex my-[76px]">
			<button
				onClick={() => setLimit(15)}
				disabled={limit === 15}
				type="button"
				className="border-solid border-[hsl(210,8%,85%)] border hover:bg-[rgb(215,217,220)] disabled:bg-[#f38227] disabled:text-[white] disabled:border-none w-[24px] h-[27px] rounded-[3px] mx-[2px] text-[13px]"
			>
				15
			</button>
			<button
				onClick={() => setLimit(30)}
				disabled={limit === 30}
				type="button"
				className="border-solid border-[hsl(210,8%,85%)] border hover:bg-[rgb(215,217,220)] disabled:bg-[#f38227] disabled:text-[white] disabled:border-none w-[24px] h-[27px] rounded-[3px] mx-[2px] text-[13px]"
			>
				30
			</button>
			<button
				onClick={() => setLimit(50)}
				disabled={limit === 50}
				type="button"
				className="border-solid border-[hsl(210,8%,85%)] border hover:bg-[rgb(215,217,220)] disabled:bg-[#f38227] disabled:text-[white] disabled:border-none w-[24px] h-[27px] rounded-[3px] mx-[2px] text-[13px]"
			>
				50
			</button>
		</div>
	);
}

export default PerPageBtn;
