/* eslint react/prop-types: 0 */
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Tag from './Tag';

function TagContainer() {
	const { questionId } = useParams();
	const { data } = useQuery(['question', questionId], () => {
		return axios.get(
			`http://cors-anywhere.herokuapp.com/http://ec2-15-165-146-60.ap-northeast-2.compute.amazonaws.com:8080/questions/${questionId}`,
		);
	});

	return (
		<ul className="my-8 flex flex-row">
			{data?.data.tags.map((tag) => (
				<Tag key={tag} tag={tag} />
			))}
		</ul>
	);
}

export default TagContainer;
