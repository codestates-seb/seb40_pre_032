import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

function AnswerHeader() {
	const { id } = useParams();
	const { data } = useQuery(['question', id], () => {
		return axios.get(`http://localhost:4000/questions/${id}`);
	});

	return (
		<div className="flex flex-row justify-between mr-6 align-middle mt-6 w-[805px]">
			<h2 className="text-xl">
				{data?.data.answers.length > 1
					? `${data?.data.answers.length} Answers`
					: `${data?.data.answers.length} Answer`}
			</h2>
			<div>
				{/* 기능 구현 없는 목업 드롭다운 */}
				<span className="text-xs">Sorted by: </span>
				<select className="text-sm p-2 border-2 border-gray-200">
					<option>Highest score (default)</option>
					<option>Trending (recent votes count more)</option>
					<option>Date modified (newest first)</option>
					<option>Date created (oldest first)</option>
				</select>
			</div>
		</div>
	);
}

export default AnswerHeader;
