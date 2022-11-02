import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

function QuestionHeader() {
	const { questionId } = useParams();
	const { data } = useQuery(['question', questionId], () => {
		return axios.get(
			`http://ec2-15-165-146-60.ap-northeast-2.compute.amazonaws.com:8080/questions/${questionId}`,
		);
	});

	function elapsed(string) {
		const minute = 1000 * 60;
		const hour = minute * 60;
		const day = hour * 24;
		const month = day * 30;
		const year = day * 365;

		const today = new Date();
		const targetDate = new Date(string);
		const elapsedSec = today.getTime() - targetDate.getTime();

		const elapsedMin = Math.round(elapsedSec / minute);
		const elapsedHour = Math.round(elapsedSec / hour);
		const elapsedDay = Math.round(elapsedSec / day);
		const elapsedMonth = Math.round(elapsedSec / month);
		const elapsedYear = Math.round(elapsedSec / year);

		if (elapsedYear > 0) {
			if (elapsedYear > 1) return `${elapsedYear} years ago`;
			return '1 year ago';
		}
		if (elapsedMonth > 0) {
			if (elapsedMonth > 1) return `${elapsedMonth} months ago`;
			return '1 month ago';
		}
		if (elapsedDay > 0) {
			if (elapsedDay > 1) return `${elapsedDay} days ago`;
			return '1 day ago';
		}
		if (elapsedHour > 0) {
			if (elapsedHour > 1) return `${elapsedHour} hours ago`;
			return '1 hour ago';
		}
		if (elapsedMin > 0) {
			if (elapsedMin > 1) return `${elapsedMin} mins ago`;
			return '1 min ago';
		}
		if (elapsedSec > 0) {
			if (elapsedSec > 1) return `${elapsedSec} seconds ago`;
			return '1 second ago';
		}
		return null;
	}

	return (
		<div className="mt-[47px] py-[20px]">
			<div className="flex flex-row justify-between">
				<h1 className="text-2xl">{data?.data.title}</h1>
				<button
					className="rounded-sm text-sm p-2 text-white bg-[#0a94ff] hover:bg-[#0074CC]"
					type="button"
				>
					Ask Question
				</button>
			</div>
			<div className="border-gray-200 flex border-b-2 flex-row mb-4">
				<div>
					<span className="text-sm py-2 mr-3 text-gray-500">Asked</span>
					<span className="text-sm py-2 mr-3">
						{elapsed(data?.data.creationDate)}
					</span>
				</div>
				<div>
					<span className="text-sm py-2 mr-3 text-gray-500">Modified</span>
					<span className="text-sm py-2 mr-3">
						{elapsed(data?.data.modifiedAt)}
					</span>
				</div>
				<div>
					<span className="text-sm py-2 mr-3 text-gray-500">Viewed</span>
					<span className="text-sm py-2 mr-3">
						{data?.data.viewCount} times
					</span>
				</div>
			</div>
		</div>
	);
}

export default QuestionHeader;
