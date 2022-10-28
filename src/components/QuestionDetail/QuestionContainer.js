/* eslint react/prop-types: 0 */
import React from 'react';
import QuestionContent from './QuestionContent';
import TagContainer from './TagContainer';
import ContentInfo from './ContentInfo';

function QuestionContainer() {
	return (
		<div className="flex flex-col w-[660px]">
			<QuestionContent />
			<TagContainer />
			<ContentInfo />
		</div>
	);
}

export default QuestionContainer;
