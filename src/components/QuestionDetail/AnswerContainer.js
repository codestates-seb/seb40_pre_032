/* eslint react/prop-types: 0 */
import React from 'react';
import AnswerVotebar from './AnswerVotebar';
import AnswerContent from './AnswerContent';
import TagContainer from './TagContainer';
import ContentInfo from './ContentInfo';

function AnswerContainer() {
	return (
		<div className="mr-6 py-6 flex flex-row ">
			<AnswerVotebar />
			<div className="flex flex-col w-[660px]">
				<AnswerContent />
				<TagContainer />
				<ContentInfo />
			</div>
		</div>
	);
}

export default AnswerContainer;
