/* eslint react/prop-types: 0 */
import React from 'react';
import QuestionContainer from './QuestionContainer';
import QuestionVotebar from './QuestionVotebar';

function Question() {
	return (
		<div className="mr-6 flex flex-row">
			<QuestionVotebar />
			<QuestionContainer />
		</div>
	);
}

export default Question;
