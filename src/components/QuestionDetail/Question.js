import React from 'react';
import QuestionContainer from './QuestionContainer';
import Votebar from './Votebar';

function Question() {
	return (
		<div className="mr-6">
			<div className="flex flex-row ">
				<Votebar />
				<QuestionContainer />
			</div>
		</div>
	);
}

export default Question;
