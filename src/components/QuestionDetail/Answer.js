/* eslint react/prop-types: 0 */
import React from 'react';
import AnswerContainer from './AnswerContainer';
import AnswerVotebar from './AnswerVotebar';

function Answer() {
	return (
		<div className="mr-6 py-6">
			<div className="flex flex-row ">
				<AnswerVotebar />
				<AnswerContainer />
			</div>
		</div>
	);
}

export default Answer;
