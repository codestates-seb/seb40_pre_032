/* eslint react/prop-types: 0 */
import React from 'react';
import AnswerContent from './AnswerContent';
import TagContainer from './TagContainer';
import ContentInfo from './ContentInfo';

function AnswerContainer() {
	return (
		<div className="flex flex-col w-[660px]">
			<AnswerContent />
			<TagContainer />
			<ContentInfo />
		</div>
	);
}

export default AnswerContainer;
