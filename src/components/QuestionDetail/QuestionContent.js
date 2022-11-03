/* eslint-disable */
import React from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionById } from '../../utils/hooks/useQuestion';

function QuestionContent() {
	const { questionId } = useParams();

	const data = getQuestionById(questionId);

	return (
		<div dangerouslySetInnerHTML={{ __html: data?.data.questionContent }} />
	);
}

export default QuestionContent;
