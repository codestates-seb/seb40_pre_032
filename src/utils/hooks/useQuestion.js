/* eslint-disable */

const BASE_URL =
	'http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080';

export const getQuestionById = (questionId) => {
	const { data } = useQuery(['question', questionId], () => {
		return axios.get(`${BASE_URL}/questions/${questionId}`);
	});

	return data;
};

export const deleteQuestionById = (questionId) => {
	const deleteQuestion = useMutation((deleteId) => {
		return axios.delete(`${BASE_URL}/questions/${questionId}/delete`, deleteId);
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
		return axios.post(
			`http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/questions/${questionId}/upvote`,
		);
	});

	return upQuestionVote;
};

export const downQuestionVoteById = (questionId) => {
	const downQuestionVote = useMutation(() => {
		return axios.post(
			`http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/questions/${questionId}/downvote`,
		);
	});

	return downQuestionVote;
};
