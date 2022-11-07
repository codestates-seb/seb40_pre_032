/* eslint-disable */
import React from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionById } from '../../utils/hooks/useQuestion';

function AnswerContent({ answerId }) {
	const { questionId } = useParams();

	const data = getQuestionById(questionId);

	const answerData = data?.data.answers.find(
		(answer) => answer.answerId === answerId,
	);

	return <div dangerouslySetInnerHTML={{ __html: answerData.answerContent }} />;
}

export default AnswerContent;
