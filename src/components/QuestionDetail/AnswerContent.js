/* eslint react/prop-types: 0 */
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

function AnswerContent({ answerId }) {
	const { questionId } = useParams();
	const { data } = useQuery(['question', questionId], () => {
		return axios.get(
			`http://ec2-15-165-146-60.ap-northeast-2.compute.amazonaws.com:8080/questions/${questionId}`,
		);
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
