/* eslint-disable */
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';

function QuestionVotebar() {
	const queryClient = useQueryClient();

	const { questionId } = useParams();
	const { data } = useQuery(['question', questionId], () => {
		return axios.get(`http://localhost:4000/questions/${questionId}`);
	});

	const upVote = useMutation((updatedVote) => {
		return axios.patch(
			`http://localhost:4000/questions/${questionId}`,
			updatedVote,
		);
	});

	const downVote = useMutation((updatedVote) => {
		return axios.patch(
			`http://localhost:4000/questions/${questionId}`,
			updatedVote,
		);
	});

	const handleUpClick = () => {
		upVote.mutate(
			{ score: data.data.score + 1 },
			{
				onSuccess: () =>
					queryClient.invalidateQueries(['question', questionId]),
			},
		);
	};

	const handleDownClick = () => {
		downVote.mutate(
			{ score: data.data.score - 1 },
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
				{/* up button */}
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
