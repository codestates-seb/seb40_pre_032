import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

function QuestionUserInfo() {
	const { id } = useParams();
	const { data } = useQuery(['question', id], () => {
		return axios.get(`http://localhost:4000/questions/${id}`);
	});

	function elapsed(string) {
		const today = new Date();
		const targetDate = new Date(string);
		const elapsedTime = today.getDate() - targetDate.getDate();

		if (elapsedTime === 0) {
			return 'today';
		}
		if (elapsedTime <= 30) {
			if (elapsedTime === 1) {
				return '1 day ago';
			}
			return `${elapsedTime} days ago`;
		}
		if (elapsedTime > 30 && elapsedTime < 365) {
			if (Math.round(elapsedTime / 30) === 1) {
				return '1 month ago';
			}
			return `${Math.round(elapsedTime / 30)} months ago`;
		}
		if (elapsedTime >= 365) {
			if (Math.round(elapsedTime / 365) === 1) {
				return '1 year ago';
			}
			return `${Math.round(elapsedTime / 365)} years ago`;
		}
		return null;
	}

	return (
		<div className="flex flex-row h-[50px]">
			<div className="w-[300px]">
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
			<div className="w-[300px]">
				<button type="button" className="text-blue-500 text-sm">
					edited (editedAt) ago
				</button>
			</div>
			<div className="w-[150px] bg-sky-100 px-2 py-1">
				<div className="text-gray-500 text-sm">
					asked {elapsed(data?.data.creationDate)}
				</div>
				<div className="text-blue-500 text-sm">{data?.data.displayName}</div>
			</div>
		</div>
	);
}

export default QuestionUserInfo;
