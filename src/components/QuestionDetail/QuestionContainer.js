import React from 'react';
import QuestionContent from './QuestionContent';
import TagContainer from './TagContainer';
import QuestionUserInfo from './QuestionUserInfo';
import QuestionVotebar from './QuestionVotebar';

function QuestionContainer() {
	return (
		<div className="mr-6 flex flex-row">
			<QuestionVotebar />
			<div className="flex flex-col w-[750px]">
				<QuestionContent />
				<TagContainer />
				<QuestionUserInfo />
			</div>
		</div>
	);
}

export default QuestionContainer;
