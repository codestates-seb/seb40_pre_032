/* eslint-disable */
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

function QuestionContent() {
	const { questionId } = useParams();
	const { data } = useQuery(['question', questionId], () => {
		return axios.get(`http://localhost:4000/questions/${questionId}`);
	});
	return (
		<div dangerouslySetInnerHTML={{ __html: data?.data.questionContent }} />
	);
}

export default QuestionContent;
