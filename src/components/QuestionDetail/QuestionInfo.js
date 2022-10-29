import React from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { useQuery } from 'react-query';

function QuestionInfo() {
	// const { id } = useParams();
	// const { data } = useQuery(['question', id], () => {
	// 	return axios.get(`http://localhost:4000/questions/${id}`);
	// });

	return (
		<div className="flex flex-row h-[50px]">
			<div className="w-[260px]">
				<button className="mr-2 text-sm text-gray-500" type="button">
					Share
				</button>
				<button className="mr-2 text-sm text-gray-500" type="button">
					Edit
				</button>
				<button className="mr-2 text-sm text-gray-500" type="button">
					Follow
				</button>
			</div>
			{/* 수정된 적 없으면 빈칸 */}
			<div className="w-[200px]">
				<button type="button" className="text-blue-500 text-sm">
					edited (editedAt) ago
				</button>
			</div>
			<div className="w-[190px] bg-sky-100 px-2 py-1">
				<div className="text-gray-500 text-sm">asked (createdAt) ago</div>
				<div className="text-blue-500 text-sm">(author)</div>
			</div>
		</div>
	);
}

export default QuestionInfo;
