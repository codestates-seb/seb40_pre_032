/* eslint react/prop-types: 0 */
import React from 'react';
import { useParams } from 'react-router-dom';
import Tag from './Tag';
import { getQuestionById } from '../../utils/hooks/useQuestion';

function TagContainer() {
	const { questionId } = useParams();
	const data = getQuestionById(questionId);

	return (
		<ul className="my-8 flex flex-row">
			{data?.data.tags.map((tag) => (
				<Tag key={tag} tag={tag} />
			))}
		</ul>
	);
}

export default TagContainer;
