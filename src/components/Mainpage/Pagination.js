/* eslint-disable react/prop-types */
import React from 'react';
import PageButton from './PageButton';
import PerPageBtn from './PerPageBtn';

function Pagination({ limit, questions, page, setPage, setLimit }) {
	return (
		<div className="flex justify-between ">
			<PageButton
				total={questions.length}
				limit={limit}
				page={page}
				setPage={setPage}
			/>
			<PerPageBtn setLimit={setLimit} limit={limit} setPage={setPage} />
		</div>
	);
}

export default Pagination;
