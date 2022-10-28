/* eslint-disable react/prop-types */
import React from 'react';

function PageButton({ total, limit, page, setPage }) {
	const numPages = Math.ceil(total / limit);
	const numbers = [];
	for (let i = 1; i <= numPages; i += 1) {
		numbers.push(i);
	}
	return (
		<nav className="flex justify-between">
			<button
				onClick={() => setPage(page - 1)}
				disabled={page === 1}
				type="button"
			>
				Prev
			</button>
			{numbers.map((num, i) => (
				<button
					key={num - 1}
					type="button"
					disabled={page === num}
					// eslint-disable-next-line no-unused-vars
					onClick={() => {
						setPage(() => setPage(i + 1));
					}}
					value={num}
				>
					{num}
				</button>
			))}
			<button
				onClick={() => {
					setPage(page + 1);
				}}
				disabled={page === numPages}
				type="button"
			>
				Next
			</button>
		</nav>
	);
}

export default PageButton;
