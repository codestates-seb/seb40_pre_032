/* eslint react/prop-types: 0 */
import React from 'react';
import AnswerVotebar from './AnswerVotebar';
import AnswerContent from './AnswerContent';
import AnswerUserInfo from './AnswerUserInfo';

function AnswerContainer({ answerId }) {
	return (
		<div className="mr-6 py-6 flex flex-row ">
			<AnswerVotebar answerId={answerId} />
			<div className="flex flex-col w-[750px]">
				<AnswerContent answerId={answerId} />
				<AnswerUserInfo answerId={answerId} />
			</div>
		</div>
	);
}

export default AnswerContainer;
