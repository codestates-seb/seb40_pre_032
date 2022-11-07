import React from 'react';

function Arrow() {
	return (
		<div className="flex-col">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6 hover:text-red-500 cursor-pointer"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M4.5 15.75l7.5-7.5 7.5 7.5"
				/>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-6 h-6 hover:text-red-500 cursor-pointer"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M19.5 8.25l-7.5 7.5-7.5-7.5"
				/>
			</svg>
		</div>
	);
}

export default Arrow;
