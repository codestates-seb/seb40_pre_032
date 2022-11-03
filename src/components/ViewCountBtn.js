import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

function ViewCountBtn() {
	const { refetch } = useQuery(
		['questions'],
		() => {
			return axios.get(
				// `${address}/questions/sortByViewCount`,
				'http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/questions/sortByViewCount',
			);
		},
		{
			enabled: false,
			staleTime: 5000,
			cacheTime: Infinity,
			suspense: true,
		},
	);

	return (
		<button
			type="button"
			value="sort_by_viewcount"
			onClick={refetch}
			className="rounded-l-[3px] py-[5px] px-4 text-[13px] focus:bg-[#e4e6e8] h-full text-[#64686e] bg-white border border-[hsl(210,8%,65%)] hover:bg-[#f2f4f6]  hover:text-gray-900 focus:text-gray-900 focus:z-10  "
		>
			<div>ViewCount</div>
		</button>
	);
}

export default ViewCountBtn;
