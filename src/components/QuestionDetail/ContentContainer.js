import React from 'react';
import Content from './Content';
import TagContainer from './TagContainer';
import Userinfo from './Userinfo';

function ContentContainer() {
	return (
		<div className="flex flex-col w-[660px]">
			<Content />
			<TagContainer />
			<Userinfo />
		</div>
	);
}

export default ContentContainer;
