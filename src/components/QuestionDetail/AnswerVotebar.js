/* eslint-disable */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { getQuestionById } from '../../utils/hooks/useQuestion';
import {
	upAnswerVoteById,
	downAnswerVoteById,
	acceptAnswerById,
	undoAcceptAnswerById,
} from '../../utils/hooks/useAnswer';

function AnswerVotebar({ answerId }) {
	const queryClient = useQueryClient();
	const { questionId } = useParams();
	const [isAccepted, setIsAccepted] = useState(false);

	const data = getQuestionById(questionId);

	const answerData = data?.data.answers.find(
		(answer) => answer.answerId === answerId,
	);

	const upAnswerVote = upAnswerVoteById(answerId);
	const downAnswerVote = downAnswerVoteById(answerId);
	const acceptAnswer = acceptAnswerById(answerId);
	const undoAcceptAnswer = undoAcceptAnswerById(answerId);

	const handleUpClick = () => {
		upAnswerVote.mutate(
			{},
			{
				onSuccess: () =>
					queryClient.invalidateQueries(['question', questionId]),
			},
		);
	};

	const handleDownClick = () => {
		downAnswerVote.mutate(
			{},
			{
				onSuccess: () =>
					queryClient.invalidateQueries(['question', questionId]),
			},
		);
	};

	const handleAcceptClick = () => {
		setIsAccepted(!isAccepted);
		if (isAccepted) {
			acceptAnswer.mutate(
				{},
				{
					onSuccess: () =>
						queryClient.invalidateQueries(['question', questionId]),
				},
			);
		} else {
			undoAcceptAnswer.mutate(
				{},
				{
					onSuccess: () =>
						queryClient.invalidateQueries(['question', questionId]),
				},
			);
		}
	};

	return (
		<div className="w-[40px] mr-4">
			{/* up button */}
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
				{answerData.score}
			</div>
			<button
				type="button"
				className="flex justify-center mb-2"
				onClick={handleDownClick}
			>
				{/* down button */}
				<svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36">
					<path fill="lightgrey" d="M2 11h32L18 27 2 11Z" />
				</svg>
			</button>
			<div className="flex justify-center mb-3">
				<button type="button">
					{/* bookmark icon */}
					<svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
						<path
							fill="lightgrey"
							d="m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"
						/>
					</svg>
				</button>
			</div>
			<div className="flex justify-center">
				{/* history icon */}
				<svg aria-hidden="true" width="19" height="18" viewBox="0 0 19 18">
					<path
						fill="lightgrey"
						d="M3 9a8 8 0 1 1 3.73 6.77L8.2 14.3A6 6 0 1 0 5 9l3.01-.01-4 4-4-4h3L3 9Zm7-4h1.01L11 9.36l3.22 2.1-.6.93L10 10V5Z"
					/>
				</svg>
			</div>
			<button type="button" onClick={handleAcceptClick}>
				<svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36">
					<path
						fill={isAccepted ? 'green' : 'lightgrey'}
						d="m6 14 8 8L30 6v8L14 30l-8-8v-8Z"
					/>
				</svg>
			</button>
		</div>
	);
}

export default AnswerVotebar;
