/* eslint react/prop-types: 0 */
import React from 'react';
import AnswerContainer from './AnswerContainer';
import Votebar from './Votebar';

function Answer() {
	return (
		<div className="mr-6 py-6">
			<div className="flex flex-row ">
				<Votebar />
				<AnswerContainer />
			</div>
		</div>
	);
}

export default Answer;
