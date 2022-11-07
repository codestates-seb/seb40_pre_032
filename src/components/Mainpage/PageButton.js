/* eslint-disable react/prop-types */
import React from 'react';

function PageButton({ total, limit, page, setPage }) {
	const numPages = Math.ceil(total / limit);
	const numbers = [];
	for (let i = 1; i <= numPages; i += 1) {
		numbers.push(i);
	}
	return (
		<div className="flex my-[76px]">
			{page === 1 ? null : (
				<button
					onClick={() => setPage(page - 1)}
					disabled={page === 1}
					type="button"
					className="border-[hsl(210,8%,85%)] text-[hsl(210,8%,25%)] mr-[2px]  border w-[44px] h-[27px] text-[13px] rounded-[3px] hover:bg-[rgb(215,217,220)]"
				>
					Prev
				</button>
			)}
			{numbers.map((num, i) => (
				<button
					className="border-solid border-[hsl(210,8%,85%)] border hover:bg-[rgb(215,217,220)] disabled:bg-[#f38227] disabled:text-[white] disabled:border-none w-[24px] h-[27px] rounded-[3px] mx-[2px] text-[13px]"
					key={num - 1}
					type="button"
					disabled={page === num}
					// eslint-disable-next-line no-unused-vars
					onClick={() => {
						setPage(i + 1);
					}}
					value={num}
				>
					{num}
				</button>
			))}
			{page === numPages ? null : (
				<button
					onClick={() => {
						setPage(page + 1);
					}}
					disabled={page === numPages}
					type="button"
					className="border-[hsl(210,8%,85%)] text-[hsl(210,8%,25%)]  border w-[44px] h-[27px] ml-[2px] text-[13px] rounded-[3px] hover:bg-[rgb(215,217,220)]"
				>
					Next
				</button>
			)}
		</div>
	);
}

export default PageButton;
