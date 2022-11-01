/* eslint react/prop-types: 0 */
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Tag from './Tag';

function TagContainer() {
	const { questionId } = useParams();
	const { data } = useQuery(['question', questionId], () => {
		return axios.get(`http://localhost:4000/questions/${questionId}`);
	});

	return (
		<ul className="mb-4 flex flex-row">
			{data?.data.tags.map((tag) => (
				<Tag key={tag} tag={tag} />
			))}
		</ul>
	);
}

export default TagContainer;
