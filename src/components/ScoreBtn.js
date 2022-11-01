import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

function ScoreBtn() {
	const { refetch } = useQuery(
		['questions'],
		() => {
			return axios.get('http://localhost:4000/items/sort_by_score');
		},
		{
			staleTime: Infinity,
			cacheTime: Infinity,
			suspense: true,
		},
	);

	return (
		<button
			type="button"
			onClick={() => refetch}
			className=" py-[5px] px-4 text-[13px] h-full text-[#64686e] bg-white border-y focus:bg-[#e4e6e8] border-[hsl(210,8%,65%)] hover:bg-[#f2f4f6]  hover:text-gray-900 focus:z-10  focus:text-gray-900"
		>
			<div>Score</div>
		</button>
	);
}

export default ScoreBtn;
