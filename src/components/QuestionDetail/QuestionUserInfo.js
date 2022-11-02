/* eslint-disable */
import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';

function QuestionUserInfo() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { questionId } = useParams();
	const { data } = useQuery(['question', questionId], () => {
		return axios.get(
			`http://ec2-15-165-146-60.ap-northeast-2.compute.amazonaws.com:8080/questions/${questionId}`,
		);
	});

	const deleteQuestion = useMutation((deleteId) => {
		return axios.delete(
			`http://ec2-15-165-146-60.ap-northeast-2.compute.amazonaws.com:8080/questions/${questionId}/delete`,
			deleteId,
		);
	});

	const handleDelete = () => {
		deleteQuestion.mutate(
			{ id: questionId },
			{
				onSuccess: () => {
					console.log('delete');
					navigate('/');
					return queryClient.invalidateQueries(['question', questionId]);
				},
			},
		);
	};

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
		<div className="flex flex-row h-[50px]">
			<div className="w-[280px]">
				<button className="mr-2 text-sm text-gray-500" type="button">
					Share
				</button>
				<button
					className="mr-2 text-sm text-gray-500"
					type="button"
					onClick={() => {
						/* access token이 있으면 수정 페이지로 이동 */
						navigate(`/questions/${questionId}/edit`);
						/* 없으면 로그인 페이지로 이동 */
						// navigate('/login');
					}}
				>
					Edit
				</button>
				<button className="mr-2 text-sm text-gray-500" type="button">
					Follow
				</button>
				<button
					className="mr-2 text-sm text-gray-500"
					type="button"
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
			{/* 수정된 적 없으면 빈칸 */}
			<div className="w-[280px]">
				<button type="button" className="text-blue-500 text-sm">
					{data?.data.creationDate === data?.data.modifiedAt
						? null
						: `edited ${elapsed(data?.data.modifiedAt)}`}
				</button>
			</div>
			<div className="w-[150px] bg-sky-100 px-2 py-1">
				<div className="text-gray-500 text-sm">
					asked {elapsed(data?.data.creationDate)}
				</div>
				<div className="text-blue-500 text-sm">
					{/* {data?.data.owner.displayName} */}
				</div>
			</div>
		</div>
	);
}

export default QuestionUserInfo;
