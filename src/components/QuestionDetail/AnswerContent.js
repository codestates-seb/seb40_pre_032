/* eslint react/prop-types: 0 */
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

function AnswerContent({ answerId }) {
	const { questionId } = useParams();
	const { data } = useQuery(['question', questionId], () => {
		return axios.get(`http://localhost:4000/questions/${questionId}`);
	});

	const answerData = data?.data.answers.find(
		(answer) => answer.answerId === answerId,
	);

	return (
		<div>
			<p className="mb-4 break-all">{answerData.answerContent}</p>
		</div>
	);
}

export default AnswerContent;
