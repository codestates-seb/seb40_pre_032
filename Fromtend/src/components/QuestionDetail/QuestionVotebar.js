/* eslint-disable */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import {
	downQuestionVoteById,
	getQuestionById,
	upQuestionVoteById,
} from '../../utils/hooks/useQuestion';

function QuestionVotebar() {
	const auth = JSON.parse(localStorage.getItem('user'));
	const queryClient = useQueryClient();
	const { questionId } = useParams();

	const data = getQuestionById(questionId);
	const upQuestionVote = upQuestionVoteById(questionId);
	const downQuestionVote = downQuestionVoteById(questionId);

	const handleUpClick = () => {
		upQuestionVote.mutate(
			{ accessToken: auth },
			{
				onSuccess: () =>
					queryClient.invalidateQueries(['question', questionId]),
			},
		);
	};

	const handleDownClick = () => {
		downQuestionVote.mutate(
			{ accessToken: auth },
			{
				onSuccess: () =>
					queryClient.invalidateQueries(['question', questionId]),
			},
		);
	};

	return (
		<div className="w-[40px] mr-4">
			<button
				type="button"
				className="flex justify-center"
				onClick={handleUpClick}
			>
				<svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36">
					<path fill="lightgrey" d="M2 25h32L18 9 2 25Z" />
				</svg>
			</button>
			<div className="flex justify-center text-gray-700">
				{data?.data.score === undefined ? '0' : data?.data.score}
			</div>
			<button
				type="button"
				className="flex justify-center mb-2"
				onClick={handleDownClick}
			>
				<svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36">
					<path fill="lightgrey" d="M2 11h32L18 27 2 11Z" />
				</svg>
			</button>
			<div className="flex justify-center mb-3">
				<button type="button">
					<svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
						<path
							fill="lightgrey"
							d="m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"
						/>
					</svg>
				</button>
			</div>
			<div className="flex justify-center">
				<svg
					aria-hidden="true"
					className=""
					width="19"
					height="18"
					viewBox="0 0 19 18"
				>
					<path
						fill="lightgrey"
						d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9Zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5Z"
					/>
				</svg>
			</div>
		</div>
	);
}

export default QuestionVotebar;
