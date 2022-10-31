import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
// import items from './Dummydata';
import QuestionHeading from './MainPage/QuestionHeading';
import NumNBtn from './MainPage/NumNBtn';
import AllQuestions from './MainPage/AllQuestions';
import Pagination from './MainPage/Pagination';

function Qlist() {
	const [limit, setLimit] = useState(15);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * limit;
	// const [questions, setQuestions] = useState([]);

	// useEffect(() => {
	// 	setQuestions(items);
	// }, []);
	const { data } = useQuery(
		['questions'],
		() => {
			return axios.get('http://localhost:4000/items');
		},
		{
			staleTime: Infinity,
			cacheTime: Infinity,
			suspense: true,
		},
	);
	console.log(data?.data);
	// if (isLoading) return <h2>Loading</h2>;

	return (
		<div className="p-[24px] w-[727px]  border-l-[1px] border-solid border-[hsl(210,8%,85%)] mb-4">
			<QuestionHeading />
			<NumNBtn questions={data?.data} />
			<AllQuestions questions={data?.data} offset={offset} limit={limit} />
			<Pagination
				limit={limit}
				questions={data?.data}
				page={page}
				setPage={setPage}
				setLimit={setLimit}
			/>
		</div>
	);
}

export default Qlist;
