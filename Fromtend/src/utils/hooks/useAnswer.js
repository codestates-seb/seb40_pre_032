/* eslint-disable */
import { useMutation } from 'react-query';
import axios from 'axios';

const BASE_URL =
	'http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080';

export const addAnswerToQuestion = (questionId) => {
	const addAnswer = useMutation((newAnswer) => {
		return axios.post(`${BASE_URL}/answers/${questionId}/add`, newAnswer);
	});

	return addAnswer;
};

export const deleteAnswerById = (answerId) => {
	const deleteAnswer = useMutation((accessToken) => {
		return axios.delete(`${BASE_URL}/answers/${answerId}/delete`, {
			data: accessToken,
		});
	});

	return deleteAnswer;
};

export const editAnswerById = (answerId) => {
	const editAnswer = useMutation((editedAnswer) => {
		return axios.patch(`${BASE_URL}/answers/${answerId}/edit`, editedAnswer);
	});

	return editAnswer;
};

export const upAnswerVoteById = (answerId) => {
	const upAnswerVote = useMutation((accessToken) => {
		return axios.post(`${BASE_URL}/answers/${answerId}/upVote`, accessToken);
	});

	return upAnswerVote;
};

export const downAnswerVoteById = (answerId) => {
	const downAnswerVote = useMutation((accessToken) => {
		return axios.post(`${BASE_URL}/answers/${answerId}/downVote`, accessToken);
	});

	return downAnswerVote;
};

export const acceptAnswerById = (answerId) => {
	const acceptAnswer = useMutation((accessToken) => {
		return axios.post(`${BASE_URL}/answers/${answerId}/accept`, accessToken);
	});

	return acceptAnswer;
};

export const undoAcceptAnswerById = (answerId) => {
	const undoAcceptAnswer = useMutation((accessToken) => {
		return axios.post(
			`${BASE_URL}/answers/${answerId}/accept/undo`,
			accessToken,
		);
	});

	return undoAcceptAnswer;
};
