import React from 'react';
import { IoFilterSharp } from 'react-icons/io5';
import { useQuery } from 'react-query';
import axios from 'axios';

function ButtonGroup() {
	const { refetch } = useQuery(
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

	return (
		<div className="w-[363px] flex">
			<div className="flex  h-[34px] items-center mr-4">
				<button
					type="button"
					onClick={() => refetch()}
					className="rounded-l-[3px] py-[5px] px-4 text-[13px] focus:bg-[#e4e6e8] h-full text-[#64686e] bg-white border border-[hsl(210,8%,65%)] hover:bg-[#f2f4f6]  hover:text-gray-900 focus:text-gray-900 focus:z-10  "
				>
					<div>ViewCount</div>
				</button>
				<button
					type="button"
					onClick={() => refetch()}
					className=" py-[5px] px-4 text-[13px] h-full text-[#64686e] bg-white border-y focus:bg-[#e4e6e8] border-[hsl(210,8%,65%)] hover:bg-[#f2f4f6]  hover:text-gray-900 focus:z-10  focus:text-gray-900"
				>
					<div>Score</div>
				</button>
				<button
					type="button"
					onClick={() => refetch()}
					className="rounded-r-[3px] py-[5px] px-4 text-[13px] h-full text-[#64686e] bg-white border focus:bg-[#e4e6e8] border-[hsl(210,8%,65%)] hover:bg-[#f2f4f6] hover:text-gray-900 focus:z-10   focus:text-gray-900  "
				>
					<div>Unanswered</div>
				</button>
			</div>
			<div className="border-border-blue rounded-[5px] border-solid flex border h-[34px] hover:bg-[#b3d3e9] text-[#37739c] bg-[#e0ecf3] text-[13px]">
				<button
					type="button"
					className="w-[68px] flex items-center justify-center decoration-[#e0ecf3] "
				>
					<IoFilterSharp className="decoration-[#e0ecf3]" />
					&nbsp;Filter
				</button>
			</div>
		</div>
	);
}

export default ButtonGroup;
