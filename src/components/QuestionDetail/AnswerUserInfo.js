/* eslint-disable */
import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';

function AnswerUserInfo({ answerId }) {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { questionId } = useParams();
	const { data } = useQuery(['question', questionId], () => {
		return axios.get(
			`http://cors-anywhere.herokuapp.com/http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/questions/${questionId}`,
		);
	});

	const answerData = data?.data.answers.find(
		(answer) => answer.answerId === answerId,
	);

	const deleteAnswer = useMutation((deleteId) => {
		return axios.delete(
			`http://cors-anywhere.herokuapp.com/http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/answers/${answerId}/delete`,
			deleteId,
		);
	});

	const handleDelete = () => {
		deleteAnswer.mutate(answerId, {
			onSuccess: () => queryClient.invalidateQueries(['question', questionId]),
		});
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

		const elapsedMin = Math.floor(elapsedSec / minute);
		const elapsedHour = Math.floor(elapsedSec / hour);
		const elapsedDay = Math.floor(elapsedSec / day);
		const elapsedMonth = Math.floor(elapsedSec / month);
		const elapsedYear = Math.floor(elapsedSec / year);

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
			if (elapsedSec > 1) return `${Math.round(elapsedSec / 1000)} seconds ago`;
			return '1 second ago';
		}
		return null;
	}

	return (
		<div className="mt-6 flex flex-row h-[50px]">
			<div className="w-[280px]">
				<button className="mr-2 text-sm text-gray-500" type="button">
					Share
				</button>
				<button
					className="mr-2 text-sm text-gray-500"
					type="button"
					onClick={() => {
						/* access token이 있으면 수정 페이지로 이동 */
						navigate(`/answers/${answerId}/edit`, {
							state: {
								questionId,
							},
						});
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
					{/* edited (editedAt) ago */}
				</button>
			</div>
			<div className="w-[150px] px-2 py-1">
				<div className="text-gray-500 text-sm">
					asked {elapsed(answerData.creationDate)}
				</div>
				<div className="text-blue-500 text-sm">
					{/* {answerData.owner.displayName} */}
				</div>
			</div>
		</div>
	);
}

export default AnswerUserInfo;
