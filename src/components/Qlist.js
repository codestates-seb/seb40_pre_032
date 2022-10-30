import React, { useState, useEffect } from 'react';
import items from './Dummydata';
import QuestionHeading from './MainPage/QuestionHeading';
import NumNBtn from './MainPage/NumNBtn';
import AllQuestions from './MainPage/AllQuestions';
import Pagination from './MainPage/Pagination';

function Qlist() {
	const [limit, setLimit] = useState(15);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * limit;
	// const questions = items;
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		setQuestions(items);
	}, []);
	return (
		<div className="p-[24px] w-[727px]  border-l-[1px] border-solid border-[hsl(210,8%,85%)] mb-4">
			<QuestionHeading />
			<NumNBtn questions={questions} />
			<AllQuestions questions={questions} offset={offset} limit={limit} />
			<Pagination
				limit={limit}
				questions={questions}
				page={page}
				setPage={setPage}
				setLimit={setLimit}
			/>
		</div>
	);
}

export default Qlist;
