/* eslint-disable */
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

// 프록시 서버 우회하는 성웅님 서버 URL
const BASE_URL =
	'http://cors-anywhere.herokuapp.com/http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080';

export const getQuestionById = (questionId) => {
	const { data } = useQuery(['question', questionId], () => {
		return axios.get(`${BASE_URL}/questions/${questionId}`);
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
	const upQuestionVote = useMutation(() => {
		return axios.post(`${BASE_URL}/questions/${questionId}/upvote`);
	});

	return upQuestionVote;
};

export const downQuestionVoteById = (questionId) => {
	const downQuestionVote = useMutation(() => {
		return axios.post(`${BASE_URL}/questions/${questionId}/downvote`);
	});

	return downQuestionVote;
};
