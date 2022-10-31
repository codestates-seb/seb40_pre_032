/* eslint react/prop-types: 0 */
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Tag from './Tag';

function TagContainer() {
	const { id } = useParams();
	const { data } = useQuery(['question', id], () => {
		return axios.get(`https://2af2-59-16-130-226.jp.ngrok.io/questions/${id}`);
	});

	return (
		<div className="mb-4">
			{data?.data.tags.map((tag) => (
				<Tag key={tag} tag={tag} />
			))}
		</div>
	);
}

export default TagContainer;
