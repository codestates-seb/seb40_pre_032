/* eslint-disable */
const BASE_URL =
	'http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080';

export const addAnswerToQuestion = (questionId) => {
	const addAnswer = useMutation((newAnswer) => {
		return axios.post(`${BASE_URL}/answers/${questionId}/add`, newAnswer);
	});

	return addAnswer;
};

export const editAnswerById = (answerId) => {
	const editAnswer = useMutation((editedAnswer) => {
		return axios.patch(
			`http://cors-anywhere.herokuapp.com/http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/answers/${answerId}/edit`,
			editedAnswer,
		);
	});

	return editAnswer;
};

export const deleteAnswer = (answerId) => {
	const deleteAnswer = useMutation((deleteId) => {
		return axios.delete(
			`http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/answers/${answerId}/delete`,
			deleteId,
		);
	});

	return deleteAnswer;
};
