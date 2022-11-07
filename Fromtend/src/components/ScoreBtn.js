import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

function ScoreBtn() {
	const { refetch } = useQuery(
		['questions'],
		() => {
			return axios.get(
				'http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/questions/sortByScore',
			);
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
			onClick={refetch}
			className=" py-[5px] px-4 text-[13px] h-full text-[#64686e] bg-white border-y focus:bg-[#e4e6e8] border-[hsl(210,8%,65%)] hover:bg-[#f2f4f6]  hover:text-gray-900 focus:z-10  focus:text-gray-900"
		>
			<div>Score</div>
		</button>
	);
}

export default ScoreBtn;
