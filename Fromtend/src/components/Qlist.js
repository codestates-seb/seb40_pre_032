/* eslint-disable */
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import QuestionHeading from './Mainpage/QuestionHeading';
import NumNBtn from './Mainpage/NumNBtn';
import AllQuestions from './Mainpage/AllQuestions';
import Pagination from './Mainpage/Pagination';

function Qlist() {
	const [limit, setLimit] = useState(15);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * limit;
	const { data } = useQuery(
		['questions'],
		() => {
			return axios.get(
				'http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/questions/',
			);
		},
		{
			staleTime: 5000,
			cacheTime: Infinity,
			refetchOnWindowFocus: false,
		},
	);

	return (
		<div className="p-[24px] w-[727px]  border-l-[1px] border-solid border-[hsl(210,8%,85%)] mb-4">
			<QuestionHeading />
			<NumNBtn questions={data?.data.items} />
			<AllQuestions
				questions={data?.data.items}
				offset={offset}
				limit={limit}
			/>
			<Pagination
				limit={limit}
				questions={data?.data.items}
				page={page}
				setPage={setPage}
				setLimit={setLimit}
			/>
		</div>
	);
}

export default Qlist;
