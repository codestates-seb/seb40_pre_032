import React from 'react';
import QuestionContent from './QuestionContent';
import TagContainer from './TagContainer';
import QuestionInfo from './QuestionInfo';
import QuestionVotebar from './QuestionVotebar';

function QuestionContainer() {
	return (
		<div className="mr-6 flex flex-row">
			<QuestionVotebar />
			<div className="flex flex-col w-[660px]">
				<QuestionContent />
				<TagContainer />
				<QuestionInfo />
			</div>
		</div>
	);
}

export default QuestionContainer;
