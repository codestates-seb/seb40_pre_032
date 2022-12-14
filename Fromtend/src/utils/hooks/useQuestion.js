/* eslint-disable */
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

const BASE_URL =
	'http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080';

export const getQuestionById = (questionId) => {
	let auth = JSON.parse(localStorage.getItem('user'));
	if (auth === null) {
		auth = 'not';
	}
	const { data } = useQuery(['question', questionId], () => {
		return axios.get(`${BASE_URL}/questions/${questionId}`, {
			headers: { accessToken: auth },
		});
	});

	return data;
};

export const deleteQuestionById = (questionId) => {
	const deleteQuestion = useMutation((accessToken) => {
		return axios.delete(`${BASE_URL}/questions/${questionId}/delete`, {
			data: accessToken,
		});
	});

	return deleteQuestion;
};

export const editQuestionById = (questionId) => {
	const editQuestion = useMutation((editedQuestion) => {
		return axios.patch(
			`${BASE_URL}/questions/${questionId}/edit`,
			editedQuestion,
		);
	});

	return editQuestion;
};

export const upQuestionVoteById = (questionId) => {
	const upQuestionVote = useMutation((accessToken) => {
		return axios.post(
			`${BASE_URL}/questions/${questionId}/upVote`,
			accessToken,
		);
	});

	return upQuestionVote;
};

export const downQuestionVoteById = (questionId) => {
	const downQuestionVote = useMutation((accessToken) => {
		return axios.post(
			`${BASE_URL}/questions/${questionId}/downVote`,
			accessToken,
		);
	});

	return downQuestionVote;
};
