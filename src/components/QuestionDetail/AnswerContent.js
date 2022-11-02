/* eslint-disable */
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

function AnswerContent({ answerId }) {
	const { questionId } = useParams();
	const { data } = useQuery(['question', questionId], () => {
		return axios.get(
			`http://ec2-43-201-80-20.ap-northeast-2.compute.amazonaws.com:8080/questions/${questionId}`,
		);
	});

	const answerData = data?.data.answers.find(
		(answer) => answer.answerId === answerId,
	);

	return <div dangerouslySetInnerHTML={{ __html: answerData.answerContent }} />;
}

export default AnswerContent;
