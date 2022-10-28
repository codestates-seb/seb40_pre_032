import React from 'react';
import Content from './Content';
import TagContainer from './TagContainer';
import ContentInfo from './ContentInfo';

function ContentContainer() {
	return (
		<div className="flex flex-col w-[660px]">
			<Content />
			<TagContainer />
			<ContentInfo />
		</div>
	);
}

export default ContentContainer;
